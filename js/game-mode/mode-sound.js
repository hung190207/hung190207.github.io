// Sound Mode Mechanics

const SOUND_INITIAL_DB_SIZE = 22;
const SOUND_ANSWER_LOG_KEY = 'vietnamguesser_sound_answer_log';

function getYtThumb(youtubeId) {
    if (activeDailySong && activeDailySong.resolvedThumb) {
        return activeDailySong.resolvedThumb;
    }
    return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

function handleYtThumbError(imgEl, youtubeId) {
    if (activeDailySong && activeDailySong.resolvedThumb && imgEl.src !== activeDailySong.resolvedThumb) {
        imgEl.src = activeDailySong.resolvedThumb;
        return;
    }
    const fallbackUrl = `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
    if (imgEl.src !== fallbackUrl) {
        imgEl.src = fallbackUrl;
    } else {
        imgEl.onerror = null;
    }
}

function getAllDatabaseSongTitles() {
    return Array.from(new Set(SONG_DATABASE.map(s => s.title)));
}

function recordDailySoundAnswer(dateStr, songId) {
    try {
        const log = JSON.parse(localStorage.getItem(SOUND_ANSWER_LOG_KEY) || '{}');
        if (log[dateStr] !== songId) {
            log[dateStr] = songId;
            localStorage.setItem(SOUND_ANSWER_LOG_KEY, JSON.stringify(log));
        }
    } catch (e) {}
}

function pickDailySoundSong() {
    const todayStr = getHanoiDateString();
    const idx = getDailySeedHash('sound_daily_song') % SONG_DATABASE.length;
    const song = SONG_DATABASE[idx];
    if (song) {
        recordDailySoundAnswer(todayStr, song.id);
    }
    return { ...song };
}

function getYesterdaySoundSong() {
    const yesterdayStr = getYesterdayHanoiDateString();
    try {
        const log = JSON.parse(localStorage.getItem(SOUND_ANSWER_LOG_KEY) || '{}');
        if (log[yesterdayStr]) {
            const matched = SONG_DATABASE.find(s => s.id === log[yesterdayStr]);
            if (matched) return matched;
        }
    } catch (e) {}

    const poolSize = yesterdayStr <= '2026-11-14'
        ? Math.min(SOUND_INITIAL_DB_SIZE, SONG_DATABASE.length)
        : SONG_DATABASE.length;
    const idx = getYesterdaySeedHash('sound_daily_song') % poolSize;
    return SONG_DATABASE[idx];
}

let activeDailySong = null;
let soundEarnedScore = 0;
let videoClueUnlocked = false;
let isShowingVideoClue = false;
let soundRoundFinished = false;

const SOUND_STORAGE_KEY = 'vietnamguesser_sound_daily_status';

function getSoundDailyStatus(expectedSongId) {
    const today = getHanoiDateString();
    try {
        const data = JSON.parse(localStorage.getItem(SOUND_STORAGE_KEY));
        if (data && data.date === today && data.targetId === expectedSongId) {
            return data;
        }
    } catch (e) {}
    return null;
}

function saveSoundDailyStatus(completed, score, isVideoUnlocked) {
    const today = getHanoiDateString();
    const data = {
        date: today,
        targetId: activeDailySong ? activeDailySong.id : '',
        completed: completed,
        score: score,
        videoClueUnlocked: isVideoUnlocked
    };
    localStorage.setItem(SOUND_STORAGE_KEY, JSON.stringify(data));
}

function getSoundMaxScore() {
    return videoClueUnlocked ? 1500 : 3000;
}


// Dual-Engine Audio & YouTube Player

let htmlAudio = null;
let htmlAudioReady = false;
let usingHtmlAudio = false;

let ytPlayer = null;
let ytPlayerReady = false;
let ytApiReady = false;
let pendingSongLoad = null;
let pendingPlayRequest = false;
let progressTimer = null;
let isPlayingAudio = false;
let isMutedAudio = false;
let currentVolume = 80;

function ensureYouTubeApi() {
    if (window.YT && window.YT.Player) {
        ytApiReady = true;
        return;
    }
    if (!document.getElementById('yt-iframe-api-script')) {
        const tag = document.createElement('script');
        tag.id = 'yt-iframe-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
    }
}

window.onYouTubeIframeAPIReady = function () {
    ytApiReady = true;
    if (pendingSongLoad) {
        mountYouTubePlayer(pendingSongLoad);
        pendingSongLoad = null;
    }
};

async function prepareHtmlAudioBackup(song) {
    if (htmlAudio) {
        try {
            htmlAudio.pause();
            htmlAudio.src = '';
        } catch (e) {}
        htmlAudio = null;
    }
    htmlAudioReady = false;
    usingHtmlAudio = false;

    const cleanArtist = (song.artist || '').split(/ft\.|x|,/i)[0].trim();
    const query = encodeURIComponent(`${song.title} ${cleanArtist}`);
    const url = `https://itunes.apple.com/search?term=${query}&country=VN&entity=song&limit=5`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!data || !Array.isArray(data.results) || data.results.length === 0) return;

        const targetNorm = normalizeVN(song.title);
        const bestMatch = data.results.find(item => normalizeVN(item.trackName || '').includes(targetNorm)) || data.results[0];

        if (bestMatch && bestMatch.artworkUrl100 && activeDailySong && activeDailySong.id === song.id) {
            activeDailySong.resolvedThumb = bestMatch.artworkUrl100.replace('100x100bb', '600x600bb');
            const stageEl = document.getElementById('sound-video-stage');
            if (stageEl) {
                stageEl.style.setProperty('--thumb-url', `url('${activeDailySong.resolvedThumb}')`);
            }
        }

        if (bestMatch && bestMatch.previewUrl && activeDailySong && activeDailySong.id === song.id) {
            const audio = new Audio(bestMatch.previewUrl);
            audio.preload = 'auto';
            audio.volume = currentVolume / 100;
            audio.muted = isMutedAudio;

            audio.addEventListener('canplay', function () {
                htmlAudioReady = true;
                usingHtmlAudio = true;
                if (pendingPlayRequest && !isPlayingAudio) {
                    pendingPlayRequest = false;
                    startHtmlAudioPlayback();
                }
            });

            audio.addEventListener('play', function () {
                isPlayingAudio = true;
                updatePlayButtonIcon();
                startProgressSync();
            });

            audio.addEventListener('pause', function () {
                if (usingHtmlAudio) {
                    isPlayingAudio = false;
                    updatePlayButtonIcon();
                    stopProgressSync();
                }
            });

            audio.addEventListener('ended', function () {
                resetToClipStart();
            });

            htmlAudio = audio;
            htmlAudio.load();
        }
    } catch (e) {}
}

function startHtmlAudioPlayback() {
    if (!htmlAudio) return;
    usingHtmlAudio = true;
    const clipLen = activeDailySong ? (activeDailySong.clipDuration || 30) : 30;
    if (htmlAudio.currentTime >= clipLen - 0.3 || htmlAudio.ended) {
        htmlAudio.currentTime = 0;
    }
    isPlayingAudio = true;
    updatePlayButtonIcon();

    htmlAudio.play().then(() => {
        isPlayingAudio = true;
        updatePlayButtonIcon();
        startProgressSync();
    }).catch(() => {
        isPlayingAudio = false;
        updatePlayButtonIcon();
    });

    if (ytPlayer && ytPlayerReady && isShowingVideoClue) {
        try {
            ytPlayer.mute();
            ytPlayer.playVideo();
        } catch (e) {}
    }
}

function mountYouTubePlayer(song) {
    prepareHtmlAudioBackup(song);
    ensureYouTubeApi();

    if (!ytApiReady) {
        pendingSongLoad = song;
        return;
    }

    if (ytPlayer && typeof ytPlayer.destroy === 'function') {
        try {
            ytPlayer.destroy();
        } catch (e) {}
        ytPlayer = null;
    }

    const playerEl = document.getElementById('yt-audio-player');
    if (!playerEl) return;

    ytPlayerReady = false;
    const startSec = song.startSeconds || 60;

    const vars = {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        start: startSec
    };

    if (window.location.protocol.startsWith('http')) {
        vars.origin = window.location.origin;
    }

    ytPlayer = new YT.Player('yt-audio-player', {
        height: '100%',
        width: '100%',
        videoId: song.youtubeId,
        playerVars: vars,
        events: {
            onReady: function (e) {
                ytPlayerReady = true;
                e.target.setVolume(currentVolume);
                if (isMutedAudio) e.target.mute();
                if (pendingPlayRequest && !usingHtmlAudio) {
                    pendingPlayRequest = false;
                    e.target.seekTo(startSec, true);
                    e.target.playVideo();
                }
            },
            onStateChange: function (e) {
                if (usingHtmlAudio) return;
                if (e.data === YT.PlayerState.PLAYING) {
                    pendingPlayRequest = false;
                    isPlayingAudio = true;
                    updatePlayButtonIcon();
                    startProgressSync();
                } else if (e.data === YT.PlayerState.PAUSED) {
                    isPlayingAudio = false;
                    updatePlayButtonIcon();
                    stopProgressSync();
                } else if (e.data === YT.PlayerState.ENDED) {
                    resetToClipStart();
                }
            },
            onError: function () {
                if (htmlAudio) {
                    usingHtmlAudio = true;
                    if (pendingPlayRequest || isPlayingAudio) {
                        pendingPlayRequest = false;
                        startHtmlAudioPlayback();
                    }
                }
            }
        }
    });
}

function resetToClipStart() {
    stopProgressSync();
    isPlayingAudio = false;
    pendingPlayRequest = false;
    updatePlayButtonIcon();

    if (htmlAudio) {
        try {
            htmlAudio.pause();
            htmlAudio.currentTime = 0;
        } catch (e) {}
    }

    if (ytPlayer && ytPlayerReady && activeDailySong) {
        try {
            const startSec = activeDailySong.startSeconds || 60;
            ytPlayer.pauseVideo();
            ytPlayer.seekTo(startSec, true);
        } catch (e) {}
    }

    const seekEl = document.getElementById('sound-seek-slider');
    if (seekEl) seekEl.value = 0;
}

function toggleSoundPlay() {
    if (!activeDailySong) return;

    if (isPlayingAudio || pendingPlayRequest) {
        pendingPlayRequest = false;
        isPlayingAudio = false;
        updatePlayButtonIcon();
        stopProgressSync();
        if (htmlAudio) {
            try { htmlAudio.pause(); } catch (e) {}
        }
        if (ytPlayer && ytPlayerReady) {
            try { ytPlayer.pauseVideo(); } catch (e) {}
        }
        return;
    }

    if (htmlAudio && (htmlAudioReady || htmlAudio.readyState >= 2)) {
        startHtmlAudioPlayback();
        return;
    }

    if (ytPlayer && ytPlayerReady && typeof ytPlayer.playVideo === 'function') {
        const startSec = activeDailySong.startSeconds || 60;
        const maxSec = startSec + (activeDailySong.clipDuration || 30);
        const cur = ytPlayer.getCurrentTime ? ytPlayer.getCurrentTime() : 0;

        isPlayingAudio = true;
        updatePlayButtonIcon();

        if (cur < startSec || cur >= maxSec - 0.3) {
            ytPlayer.seekTo(startSec, true);
        }
        ytPlayer.playVideo();
        startProgressSync();
        return;
    }

    pendingPlayRequest = true;
    isPlayingAudio = true;
    updatePlayButtonIcon();
    if (htmlAudio) {
        startHtmlAudioPlayback();
    }
}

function stopSoundPlayer() {
    stopProgressSync();
    isPlayingAudio = false;
    pendingPlayRequest = false;
    if (htmlAudio) {
        try {
            htmlAudio.pause();
        } catch (e) {}
    }
    if (ytPlayer && ytPlayerReady && typeof ytPlayer.pauseVideo === 'function') {
        try {
            ytPlayer.pauseVideo();
        } catch (e) {}
    }
}

function updatePlayButtonIcon() {
    const btn = document.getElementById('sound-play-btn');
    if (!btn) return;
    btn.innerHTML = (isPlayingAudio || pendingPlayRequest)
        ? '<i class="fa-solid fa-pause"></i>'
        : '<i class="fa-solid fa-play"></i>';
}

function startProgressSync() {
    stopProgressSync();
    progressTimer = setInterval(() => {
        if (!activeDailySong) return;
        const clipLen = activeDailySong.clipDuration || 30;

        if (usingHtmlAudio && htmlAudio) {
            const elapsed = Math.max(0, htmlAudio.currentTime || 0);
            const effectiveMax = htmlAudio.duration ? Math.min(clipLen, htmlAudio.duration) : clipLen;
            if (elapsed >= effectiveMax - 0.15) {
                resetToClipStart();
                return;
            }
            const seekEl = document.getElementById('sound-seek-slider');
            if (seekEl) {
                seekEl.max = effectiveMax;
                seekEl.value = Math.min(effectiveMax, elapsed.toFixed(1));
            }
            return;
        }

        if (ytPlayer && ytPlayerReady && typeof ytPlayer.getCurrentTime === 'function') {
            const startSec = activeDailySong.startSeconds || 60;
            const current = ytPlayer.getCurrentTime() || startSec;
            const elapsed = Math.max(0, current - startSec);

            if (elapsed >= clipLen) {
                resetToClipStart();
                return;
            }

            const seekEl = document.getElementById('sound-seek-slider');
            if (seekEl) {
                seekEl.max = clipLen;
                seekEl.value = Math.min(clipLen, elapsed.toFixed(1));
            }
        }
    }, 150);
}

function stopProgressSync() {
    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }
}


// UI Rendering & Controls

function initSoundMode() {
    ensureYouTubeApi();
    activeDailySong = pickDailySoundSong();
    const dailyStatus = getSoundDailyStatus(activeDailySong ? activeDailySong.id : '');

    if (dailyStatus) {
        videoClueUnlocked = Boolean(dailyStatus.videoClueUnlocked);
        isShowingVideoClue = videoClueUnlocked;
        soundEarnedScore = dailyStatus.score || 0;

        if (dailyStatus.completed) {
            soundRoundFinished = true;
            prepareHtmlAudioBackup(activeDailySong);
            renderSoundFinalScreen(soundEarnedScore);
            return;
        }
    } else {
        videoClueUnlocked = false;
        isShowingVideoClue = false;
        soundEarnedScore = 0;
        soundRoundFinished = false;
        saveModeScore('sound', 0);
        saveSoundDailyStatus(false, 0, false);
        if (typeof updateCountdownTimers === 'function') {
            updateCountdownTimers();
        }
    }

    loadSoundRoundScreen();
}

function loadSoundRoundScreen() {
    const song = activeDailySong;
    const yesterdaySong = getYesterdaySoundSong();
    const clipLen = song.clipDuration || 30;
    soundRoundFinished = false;
    isPlayingAudio = false;
    pendingPlayRequest = false;

    const container = document.getElementById('sound-mode-view');
    container.innerHTML = `
        <h2 class="game-mode-heading">${t('sound_heading')}</h2>

        <div class="round-bar">
            <span class="round-title">Round 1 / 1</span>
            <span id="sound-potential-score" class="badge-score">+${getSoundMaxScore()} ${t('points_suffix')}</span>
        </div>

        <div class="sound-player-wrapper">
            <div 
                id="sound-video-stage" 
                class="sound-video-clue-stage ${isShowingVideoClue ? 'show' : ''}"
                style="--thumb-url: url('${getYtThumb(song.youtubeId)}');"
            >
                <div id="yt-audio-player"></div>
            </div>

            <div class="audio-player-bar">
                <button id="sound-play-btn" class="audio-btn" onclick="toggleSoundPlay()">
                    <i class="fa-solid fa-play"></i>
                </button>
                <input type="range" id="sound-seek-slider" class="audio-seek-slider" min="0" max="${clipLen}" step="0.1" value="0">
                <button id="sound-mute-btn" class="audio-btn" onclick="toggleSoundMute()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
                <input type="range" id="sound-vol-slider" class="audio-vol-slider" min="0" max="100" value="${currentVolume}">
            </div>
        </div>

        <div class="sound-clues-bar">
            <button id="btn-audio-only" class="btn-clue ${!isShowingVideoClue ? 'unlocked' : ''}" onclick="selectAudioOnlyTab()">
                <i class="fa-solid fa-lock"></i> ${t('sound_audio_only')}
            </button>
            <button id="btn-video-clue" class="btn-clue ${isShowingVideoClue ? 'unlocked' : ''}" onclick="unlockSoundVideoClue()">
                <i class="fa-solid ${videoClueUnlocked ? 'fa-lock-open' : 'fa-lock'}"></i> ${videoClueUnlocked ? t('sound_video_unlocked') : t('sound_unlock_video')}
            </button>
        </div>

        <div class="guess-controls">
            <div class="guess-input-wrapper">
                <div id="sound-autocomplete-list" class="autocomplete-items"></div>
                <input 
                    type="text" 
                    id="sound-guess-input" 
                    class="guess-input" 
                    placeholder="${t('sound_input_placeholder')}" 
                    autocomplete="off"
                >
            </div>
            <button id="sound-submit-btn" class="btn-guess" onclick="submitSoundGuess()">${t('guess_btn')}</button>
        </div>

        <div id="sound-round-feedback" class="round-feedback"></div>

        <div class="yesterday-answer-line">
            ${t('yesterday_single')} <strong>${yesterdaySong.title}</strong>
        </div>
    `;

    bindAudioControls();
    setupSoundAutocomplete();
    mountYouTubePlayer(song);
}

function bindAudioControls() {
    const seekSlider = document.getElementById('sound-seek-slider');
    const volSlider = document.getElementById('sound-vol-slider');

    if (seekSlider) {
        seekSlider.addEventListener('input', function () {
            const offset = Number(this.value);
            if (usingHtmlAudio && htmlAudio) {
                htmlAudio.currentTime = offset;
            } else if (ytPlayer && ytPlayerReady && typeof ytPlayer.seekTo === 'function' && activeDailySong) {
                const startSec = activeDailySong.startSeconds || 60;
                ytPlayer.seekTo(startSec + offset, true);
            }
        });
    }

    if (volSlider) {
        volSlider.addEventListener('input', function () {
            const val = Number(this.value);
            currentVolume = val;
            if (htmlAudio) {
                htmlAudio.volume = val / 100;
                if (val > 0 && isMutedAudio) {
                    htmlAudio.muted = false;
                }
            }
            if (ytPlayer && ytPlayerReady && typeof ytPlayer.setVolume === 'function') {
                ytPlayer.setVolume(val);
                if (val > 0 && isMutedAudio && !usingHtmlAudio) {
                    ytPlayer.unMute();
                }
            }
            if (val > 0 && isMutedAudio) {
                isMutedAudio = false;
                updateMuteIcon();
            }
        });
    }
}

function toggleSoundMute() {
    isMutedAudio = !isMutedAudio;
    if (htmlAudio) {
        htmlAudio.muted = isMutedAudio;
    }
    if (ytPlayer && ytPlayerReady) {
        try {
            if (isMutedAudio || usingHtmlAudio) {
                ytPlayer.mute();
            } else {
                ytPlayer.unMute();
            }
        } catch (e) {}
    }
    updateMuteIcon();
}

function updateMuteIcon() {
    const btn = document.getElementById('sound-mute-btn');
    if (!btn) return;
    btn.innerHTML = isMutedAudio
        ? '<i class="fa-solid fa-volume-xmark"></i>'
        : '<i class="fa-solid fa-volume-high"></i>';
}

function selectAudioOnlyTab() {
    playClickSound();
    isShowingVideoClue = false;
    const stage = document.getElementById('sound-video-stage');
    if (stage) stage.classList.remove('show');

    const btnAudio = document.getElementById('btn-audio-only');
    const btnVideo = document.getElementById('btn-video-clue');
    if (btnAudio) btnAudio.classList.add('unlocked');
    if (btnVideo) btnVideo.classList.remove('unlocked');
}

function unlockSoundVideoClue() {
    if (soundRoundFinished) return;
    playClickSound();

    videoClueUnlocked = true;
    isShowingVideoClue = true;
    saveSoundDailyStatus(false, soundEarnedScore, true);

    const stage = document.getElementById('sound-video-stage');
    if (stage) stage.classList.add('show');

    const btnAudio = document.getElementById('btn-audio-only');
    const btnVideo = document.getElementById('btn-video-clue');
    if (btnAudio) btnAudio.classList.remove('unlocked');
    if (btnVideo) {
        btnVideo.classList.add('unlocked');
        btnVideo.innerHTML = `<i class="fa-solid fa-lock-open"></i> ${t('sound_video_unlocked')}`;
    }

    const scoreBadge = document.getElementById('sound-potential-score');
    if (scoreBadge) scoreBadge.textContent = `+${getSoundMaxScore()} ${t('points_suffix')}`;
}


// Autocomplete & Submission

function setupSoundAutocomplete() {
    const inputEl = document.getElementById('sound-guess-input');
    const dropdown = document.getElementById('sound-autocomplete-list');
    if (!inputEl || !dropdown) return;

    const songTitles = getAllDatabaseSongTitles();

    function renderSuggestions(rawVal) {
        dropdown.innerHTML = '';
        const normalizedVal = normalizeVN(rawVal);

        if (!normalizedVal) {
            dropdown.classList.remove('show');
            return;
        }

        const matches = songTitles.filter(title => normalizeVN(title).includes(normalizedVal));
        if (matches.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        matches.sort((a, b) => {
            const aStarts = normalizeVN(a).startsWith(normalizedVal) ? 0 : 1;
            const bStarts = normalizeVN(b).startsWith(normalizedVal) ? 0 : 1;
            return aStarts - bStarts;
        });

        matches.forEach(title => {
            const item = document.createElement('div');
            item.innerHTML = `<i class="fa-solid fa-music" style="margin-right:8px; color:var(--cyan-dim);"></i> ${title}`;
            item.addEventListener('mousedown', function (e) {
                e.preventDefault();
                inputEl.value = title;
                dropdown.innerHTML = '';
                dropdown.classList.remove('show');
                inputEl.focus();
            });
            dropdown.appendChild(item);
        });

        dropdown.classList.add('show');
    }

    inputEl.addEventListener('input', function () {
        renderSuggestions(this.value);
    });

    inputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            dropdown.innerHTML = '';
            dropdown.classList.remove('show');
            submitSoundGuess();
        }
    });

    inputEl.addEventListener('blur', function () {
        setTimeout(() => {
            dropdown.classList.remove('show');
        }, 150);
    });

    inputEl.focus();
}

function submitSoundGuess() {
    if (soundRoundFinished) return;
    playClickSound();

    const inputEl = document.getElementById('sound-guess-input');
    const feedbackEl = document.getElementById('sound-round-feedback');
    if (!inputEl) return;

    const userGuess = normalizeVN(inputEl.value);
    if (!userGuess) {
        if (feedbackEl) {
            feedbackEl.textContent = t('sound_empty_warning');
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    stopSoundPlayer();

    const isCorrect = normalizeVN(activeDailySong.title) === userGuess;
    soundRoundFinished = true;
    soundEarnedScore = isCorrect ? getSoundMaxScore() : 0;

    saveModeScore('sound', soundEarnedScore);
    saveSoundDailyStatus(true, soundEarnedScore, videoClueUnlocked);

    if (typeof updateCountdownTimers === 'function') {
        updateCountdownTimers();
    }

    renderSoundFinalScreen(soundEarnedScore);
}


// Final Result Screen

let soundFinalKeydownHandler = null;

function renderSoundFinalScreen(earnedScore) {
    stopSoundPlayer();
    const song = activeDailySong;
    const yesterdaySong = getYesterdaySoundSong();
    const container = document.getElementById('sound-mode-view');

    container.innerHTML = `
        <h2 class="game-mode-heading">${t('sound_result_heading')}</h2>

        <div class="round-result-card">
            <img src="${getYtThumb(song.youtubeId)}" class="round-result-img" alt="Song Thumbnail" onerror="handleYtThumbError(this, '${song.youtubeId}')">
            <div class="round-result-details">
                <div class="round-result-title">${song.title}</div>
                <div class="round-result-origin">${t('sound_artist_prefix')} ${song.artist}</div>
                <div class="score-badge-box">
                    <div class="score-badge-header">${t('score_header')}</div>
                    <div class="score-badge-value">${earnedScore}</div>
                </div>
            </div>
        </div>

        <button class="btn-action" onclick="backToMainMenu()" style="margin-top: 10px;">
            <i class="fa-solid fa-house"></i> ${t('back_menu_btn')}
        </button>

        <div class="yesterday-answer-line">
            ${t('yesterday_single')} <strong>${yesterdaySong.title}</strong>
        </div>
    `;

    if (soundFinalKeydownHandler) {
        document.removeEventListener('keydown', soundFinalKeydownHandler);
    }
    soundFinalKeydownHandler = function (e) {
        if (e.key === 'Enter' && localStorage.getItem('vietnamguesser_active_mode') === 'sound') {
            e.preventDefault();
            document.removeEventListener('keydown', soundFinalKeydownHandler);
            soundFinalKeydownHandler = null;
            backToMainMenu();
        }
    };
    document.addEventListener('keydown', soundFinalKeydownHandler);
}