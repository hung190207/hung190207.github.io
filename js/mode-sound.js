// Section: Song Database

const SONG_DATABASE = {
    easy: [
        {
            id: 'hay_trao_cho_anh',
            title: 'Hãy Trao Cho Anh',
            artist: 'Sơn Tùng M-TP ft. Snoop Dogg',
            youtubeId: 'knW7-x7Y7RE',
            startSeconds: 22
        },
        {
            id: 'see_tinh',
            title: 'See Tình',
            artist: 'Hoàng Thùy Linh',
            youtubeId: 'gJHSDZfJrRY',
            startSeconds: 15
        },
        {
            id: 'hai_phut_hon',
            title: '2 Phút Hơn',
            artist: 'Pháo',
            youtubeId: 'jTLhQf5KJSc',
            startSeconds: 10
        },
        {
            id: 'lac_troi',
            title: 'Lạc Trôi',
            artist: 'Sơn Tùng M-TP',
            youtubeId: 'Llw9Q6akRo4',
            startSeconds: 25
        },
        {
            id: 'bong_bong_bang_bang',
            title: 'Bống Bống Bang Bang',
            artist: 'Nhóm 365daband',
            youtubeId: 'BwN3voo83j4',
            startSeconds: 12
        }
    ],

    medium: [
        {
            id: 'co_chang_trai_viet_len_cay',
            title: 'Có Chàng Trai Viết Lên Cây',
            artist: 'Phan Mạnh Quỳnh',
            youtubeId: '0VC6euBtKkk',
            startSeconds: 20
        },
        {
            id: 'mang_tien_ve_cho_me',
            title: 'Mang Tiền Về Cho Mẹ',
            artist: 'Đen Vâu ft. Nguyên Thảo',
            youtubeId: 'UVBV-3X1Gm0',
            startSeconds: 30
        },
        {
            id: 'nang_tho',
            title: 'Nàng Thơ',
            artist: 'Hoàng Dũng',
            youtubeId: 'Zzn9-ATB9aU',
            startSeconds: 18
        },
        {
            id: 'waiting_for_you',
            title: 'Waiting For You',
            artist: 'MONO',
            youtubeId: 'okz5RIZRT0U',
            startSeconds: 15
        },
        {
            id: 'bua_yeu',
            title: 'Bùa Yêu',
            artist: 'Bích Phương',
            youtubeId: 'FkOt19CUC30',
            startSeconds: 25
        }
    ],

    hard: [
        {
            id: 'chiec_khan_gio_am',
            title: 'Chiếc Khăn Gió Ấm',
            artist: 'Khánh Phương',
            youtubeId: 'pQ2vN3N4X6I',
            startSeconds: 20
        },
        {
            id: 'con_mua_ngang_qua',
            title: 'Cơn Mưa Ngang Qua',
            artist: 'Sơn Tùng M-TP',
            youtubeId: 'r1OtnOs-utU',
            startSeconds: 15
        },
        {
            id: 'xe_dap',
            title: 'Xe Đạp',
            artist: 'Thùy Chi ft. M4U',
            youtubeId: '3v5c5T7v7vQ',
            startSeconds: 18
        },
        {
            id: 'thu_cuoi',
            title: 'Thu Cuối',
            artist: 'Yanbi ft. Mr.T & Hằng BingBoong',
            youtubeId: 'Qc1xG2T7X8M',
            startSeconds: 20
        },
        {
            id: 'em_cua_ngay_hom_qua',
            title: 'Em Của Ngày Hôm Qua',
            artist: 'Sơn Tùng M-TP',
            youtubeId: 'N25P78U8P2A',
            startSeconds: 25
        }
    ]
};


// Section: Helpers & State

function getYtThumb(youtubeId) {
    return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

function getAllDatabaseSongTitles() {
    const allSongs = [
        ...SONG_DATABASE.easy,
        ...SONG_DATABASE.medium,
        ...SONG_DATABASE.hard
    ];
    return Array.from(new Set(allSongs.map(s => s.title)));
}

function pickDailySoundRounds(savedIds) {
    const usedIds = new Set();

    function pickFromPool(pool, preferredId) {
        if (preferredId) {
            const found = pool.find(item => item.id === preferredId && !usedIds.has(item.id));
            if (found) {
                usedIds.add(found.id);
                return found;
            }
        }
        const available = pool.filter(item => !usedIds.has(item.id));
        const chosen = available[Math.floor(Math.random() * available.length)] || pool[0];
        usedIds.add(chosen.id);
        return chosen;
    }

    const r1 = pickFromPool(SONG_DATABASE.easy, savedIds ? savedIds[0] : null);
    const r2 = pickFromPool(SONG_DATABASE.medium, savedIds ? savedIds[1] : null);
    const r3 = pickFromPool(SONG_DATABASE.hard, savedIds ? savedIds[2] : null);

    return [
        { ...r1, round: 1, difficulty: 'Dễ' },
        { ...r2, round: 2, difficulty: 'Trung bình' },
        { ...r3, round: 3, difficulty: 'Khó' }
    ];
}

let activeSoundRounds = [];
let soundRoundIndex = 0;
let soundRoundScores = [0, 0, 0];
let videoClueUnlocked = false;
let soundRoundFinished = false;

const SOUND_STORAGE_KEY = 'vietnamguesser_sound_daily_status';

function getSoundDailyStatus() {
    const today = getHanoiDateString();
    try {
        const data = JSON.parse(localStorage.getItem(SOUND_STORAGE_KEY));
        if (data && data.date === today) return data;
    } catch (e) {}
    return null;
}

function saveSoundDailyStatus(completed, scoresArray, roundIdx, isVideoUnlocked, isFinished) {
    const today = getHanoiDateString();
    const roundIds = activeSoundRounds.map(r => r.id);
    const data = {
        date: today,
        completed: completed,
        scores: scoresArray,
        currentRoundIndex: roundIdx,
        videoClueUnlocked: isVideoUnlocked,
        roundFinished: isFinished,
        roundIds: roundIds
    };
    localStorage.setItem(SOUND_STORAGE_KEY, JSON.stringify(data));
}

function getSoundMaxScore() {
    return videoClueUnlocked ? 1500 : 3000;
}


// Section: YouTube Audio Player Controller

let ytPlayer = null;
let ytApiReady = false;
let pendingVideoLoad = null;
let progressTimer = null;
let isPlayingAudio = false;
let isMutedAudio = false;

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
    if (pendingVideoLoad) {
        cueYouTubeAudio(pendingVideoLoad.youtubeId, pendingVideoLoad.startSeconds);
        pendingVideoLoad = null;
    }
};

function cueYouTubeAudio(youtubeId, startSeconds = 0) {
    ensureYouTubeApi();
    if (!ytApiReady) {
        pendingVideoLoad = { youtubeId, startSeconds };
        return;
    }

    let holder = document.getElementById('yt-hidden-holder');
    if (!holder) {
        holder = document.createElement('div');
        holder.id = 'yt-hidden-holder';
        holder.className = 'yt-hidden-container';
        holder.innerHTML = '<div id="yt-audio-player"></div>';
        document.body.appendChild(holder);
    }

    if (ytPlayer && typeof ytPlayer.cueVideoById === 'function') {
        ytPlayer.cueVideoById({ videoId: youtubeId, startSeconds: startSeconds });
        isPlayingAudio = false;
        updatePlayButtonIcon();
    } else {
        ytPlayer = new YT.Player('yt-audio-player', {
            height: '1',
            width: '1',
            videoId: youtubeId,
            playerVars: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                fs: 0,
                rel: 0,
                start: startSeconds
            },
            events: {
                onReady: function (e) {
                    e.target.setVolume(80);
                },
                onStateChange: function (e) {
                    if (e.data === YT.PlayerState.PLAYING) {
                        isPlayingAudio = true;
                        updatePlayButtonIcon();
                        startProgressSync();
                    } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
                        isPlayingAudio = false;
                        updatePlayButtonIcon();
                        stopProgressSync();
                    }
                }
            }
        });
    }
}

function toggleSoundPlay() {
    if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') return;
    if (isPlayingAudio) {
        ytPlayer.pauseVideo();
    } else {
        ytPlayer.playVideo();
    }
}

function stopSoundPlayer() {
    stopProgressSync();
    isPlayingAudio = false;
    if (ytPlayer && typeof ytPlayer.stopVideo === 'function') {
        try {
            ytPlayer.stopVideo();
        } catch (e) {}
    }
}

function updatePlayButtonIcon() {
    const btn = document.getElementById('sound-play-btn');
    if (!btn) return;
    btn.innerHTML = isPlayingAudio
        ? '<i class="fa-solid fa-pause"></i>'
        : '<i class="fa-solid fa-play"></i>';
}

function startProgressSync() {
    stopProgressSync();
    progressTimer = setInterval(() => {
        if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function') return;
        const current = ytPlayer.getCurrentTime() || 0;
        const duration = ytPlayer.getDuration() || 0;
        const seekEl = document.getElementById('sound-seek-slider');
        if (seekEl && duration > 0) {
            seekEl.max = Math.floor(duration);
            seekEl.value = Math.floor(current);
        }
    }, 400);
}

function stopProgressSync() {
    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }
}


// Section: Round UI & Mode Init

function initSoundMode() {
    ensureYouTubeApi();
    const dailyStatus = getSoundDailyStatus();

    if (dailyStatus && dailyStatus.roundIds) {
        activeSoundRounds = pickDailySoundRounds(dailyStatus.roundIds);
        soundRoundScores = dailyStatus.scores || [0, 0, 0];

        if (dailyStatus.completed) {
            renderSoundFinalScreen(soundRoundScores);
            return;
        }

        soundRoundIndex = dailyStatus.currentRoundIndex || 0;
        videoClueUnlocked = Boolean(dailyStatus.videoClueUnlocked);
        soundRoundFinished = Boolean(dailyStatus.roundFinished);

        if (soundRoundFinished) {
            renderSoundRoundResult(soundRoundIndex, soundRoundScores[soundRoundIndex]);
        } else {
            loadSoundRoundScreen(soundRoundIndex, videoClueUnlocked);
        }
        return;
    }

    activeSoundRounds = pickDailySoundRounds(null);
    soundRoundIndex = 0;
    soundRoundScores = [0, 0, 0];
    videoClueUnlocked = false;
    soundRoundFinished = false;
    saveSoundDailyStatus(false, soundRoundScores, soundRoundIndex, false, false);
    loadSoundRoundScreen(soundRoundIndex, false);
}

function loadSoundRoundScreen(index, savedVideoClue = false) {
    const data = activeSoundRounds[index];
    videoClueUnlocked = savedVideoClue;
    soundRoundFinished = false;

    const container = document.getElementById('sound-mode-view');
    container.innerHTML = `
        <h2 class="game-mode-heading">ĐOÁN ÂM THANH</h2>

        <div class="round-bar">
            <span class="round-title">Round ${data.round} / 3</span>
            <span class="badge-difficulty">${data.difficulty}</span>
            <span id="sound-potential-score" class="badge-score">+${getSoundMaxScore()} điểm</span>
        </div>

        <div id="sound-video-stage" class="sound-video-clue-stage ${videoClueUnlocked ? 'show' : ''}">
            <img src="${getYtThumb(data.youtubeId)}" alt="Blurred Video Clue">
        </div>

        <div class="audio-player-bar">
            <button id="sound-play-btn" class="audio-btn" onclick="toggleSoundPlay()">
                <i class="fa-solid fa-play"></i>
            </button>
            <input type="range" id="sound-seek-slider" class="audio-seek-slider" min="0" max="100" value="0">
            <button id="sound-mute-btn" class="audio-btn" onclick="toggleSoundMute()">
                <i class="fa-solid fa-volume-high"></i>
            </button>
            <input type="range" id="sound-vol-slider" class="audio-vol-slider" min="0" max="100" value="80">
        </div>

        <div class="sound-clues-bar">
            <button id="btn-audio-only" class="btn-clue ${!videoClueUnlocked ? 'unlocked' : ''}" onclick="selectAudioOnlyTab()">
                <i class="fa-solid fa-music"></i> CHỈ ÂM THANH
            </button>
            <button id="btn-video-clue" class="btn-clue ${videoClueUnlocked ? 'unlocked' : ''}" onclick="unlockSoundVideoClue()">
                <i class="fa-solid ${videoClueUnlocked ? 'fa-lock-open' : 'fa-lock'}"></i> GỢI Ý VIDEO
            </button>
        </div>

        <div class="guess-controls">
            <div class="guess-input-wrapper">
                <div id="sound-autocomplete-list" class="autocomplete-items"></div>
                <input 
                    type="text" 
                    id="sound-guess-input" 
                    class="guess-input" 
                    placeholder="Nhập tên bài hát tại đây..." 
                    autocomplete="off"
                >
            </div>
            <button id="sound-submit-btn" class="btn-guess" onclick="submitSoundGuess()">ĐOÁN</button>
        </div>

        <div id="sound-round-feedback" class="round-feedback"></div>
    `;

    bindAudioControls();
    setupSoundAutocomplete();
    cueYouTubeAudio(data.youtubeId, data.startSeconds || 0);
}

function bindAudioControls() {
    const seekSlider = document.getElementById('sound-seek-slider');
    const volSlider = document.getElementById('sound-vol-slider');

    if (seekSlider) {
        seekSlider.addEventListener('input', function () {
            if (ytPlayer && typeof ytPlayer.seekTo === 'function') {
                ytPlayer.seekTo(Number(this.value), true);
            }
        });
    }

    if (volSlider) {
        volSlider.addEventListener('input', function () {
            if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
                const val = Number(this.value);
                ytPlayer.setVolume(val);
                if (val > 0 && isMutedAudio) {
                    ytPlayer.unMute();
                    isMutedAudio = false;
                    updateMuteIcon();
                }
            }
        });
    }
}

function toggleSoundMute() {
    if (!ytPlayer || typeof ytPlayer.isMuted !== 'function') return;
    if (isMutedAudio) {
        ytPlayer.unMute();
        isMutedAudio = false;
    } else {
        ytPlayer.mute();
        isMutedAudio = true;
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
    const stage = document.getElementById('sound-video-stage');
    if (stage) stage.classList.remove('show');
}

function unlockSoundVideoClue() {
    if (soundRoundFinished) return;
    playClickSound();

    videoClueUnlocked = true;
    saveSoundDailyStatus(false, soundRoundScores, soundRoundIndex, true, false);

    const stage = document.getElementById('sound-video-stage');
    if (stage) stage.classList.add('show');

    const btnAudio = document.getElementById('btn-audio-only');
    const btnVideo = document.getElementById('btn-video-clue');
    if (btnAudio) btnAudio.classList.remove('unlocked');
    if (btnVideo) {
        btnVideo.classList.add('unlocked');
        btnVideo.innerHTML = '<i class="fa-solid fa-lock-open"></i> GỢI Ý VIDEO';
    }

    const scoreBadge = document.getElementById('sound-potential-score');
    if (scoreBadge) scoreBadge.textContent = `+${getSoundMaxScore()} điểm`;
}


// Section: Autocomplete & Guess Submission

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
            feedbackEl.textContent = 'Vui lòng nhập tên bài hát trước khi đoán!';
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    stopSoundPlayer();

    const currentData = activeSoundRounds[soundRoundIndex];
    const isCorrect = normalizeVN(currentData.title) === userGuess;

    soundRoundFinished = true;
    const earned = isCorrect ? getSoundMaxScore() : 0;
    soundRoundScores[soundRoundIndex] = earned;

    const totalCurrentScore = soundRoundScores.reduce((a, b) => a + b, 0);
    saveModeScore('sound', totalCurrentScore);
    saveSoundDailyStatus(false, soundRoundScores, soundRoundIndex, videoClueUnlocked, true);

    renderSoundRoundResult(soundRoundIndex, earned);
}


// Section: Round Result & Final Recap

function renderSoundRoundResult(index, earnedScore) {
    const data = activeSoundRounds[index];
    const nextButtonText = index < activeSoundRounds.length - 1 ? 'VÒNG TIẾP THEO ➔' : 'XEM KẾT QUẢ TỔNG ➔';
    const scoreZeroClass = earnedScore === 0 ? 'zero' : '';

    const container = document.getElementById('sound-mode-view');
    container.innerHTML = `
        <h2 class="game-mode-heading">ĐOÁN ÂM THANH</h2>

        <div class="round-bar">
            <span class="round-title">Round ${data.round}</span>
            <span class="badge-difficulty">${data.difficulty}</span>
        </div>

        <div class="round-result-card">
            <img src="${getYtThumb(data.youtubeId)}" class="round-result-img" alt="Song Thumbnail">
            <div class="round-result-details">
                <div class="round-result-title">${data.title}</div>
                <div class="round-result-origin">Nghệ sĩ: ${data.artist}</div>
                <div class="score-badge-box">
                    <div class="score-badge-header">ĐIỂM</div>
                    <div class="score-badge-value ${scoreZeroClass}">${earnedScore}</div>
                </div>
            </div>
        </div>

        <button class="btn-guess" onclick="nextSoundRound()">${nextButtonText}</button>
    `;
}

function nextSoundRound() {
    playClickSound();
    if (soundRoundIndex < activeSoundRounds.length - 1) {
        soundRoundIndex++;
        videoClueUnlocked = false;
        soundRoundFinished = false;
        saveSoundDailyStatus(false, soundRoundScores, soundRoundIndex, false, false);
        loadSoundRoundScreen(soundRoundIndex, false);
    } else {
        const totalSessionScore = soundRoundScores.reduce((a, b) => a + b, 0);
        saveModeScore('sound', totalSessionScore);
        saveSoundDailyStatus(true, soundRoundScores, soundRoundIndex, videoClueUnlocked, true);
        if (typeof updateCountdownTimers === 'function') {
            updateCountdownTimers();
        }
        renderSoundFinalScreen(soundRoundScores);
    }
}

function renderSoundFinalScreen(scoresArray) {
    stopSoundPlayer();
    const totalSum = scoresArray.reduce((a, b) => a + b, 0);
    const container = document.getElementById('sound-mode-view');

    let roundsHtml = '';
    activeSoundRounds.forEach((round, idx) => {
        const pts = scoresArray[idx];
        roundsHtml += `
            <div class="round-recap-card">
                <div class="recap-header">
                    <span class="recap-round-title">Round ${round.round} - ${round.difficulty}</span>
                    <span class="recap-points">${pts.toLocaleString('en-US')} pts</span>
                </div>
                <div class="recap-body">
                    <img src="${getYtThumb(round.youtubeId)}" class="recap-thumb" alt="Song">
                    <div class="recap-info">
                        <h4>${round.title}</h4>
                        <p>Nghệ sĩ: ${round.artist}</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="final-score-container">
            <h2 class="game-mode-heading">TỔNG KẾT HÔM NAY</h2>
            
            <div class="final-score-banner">
                <div class="final-score-number">${totalSum.toLocaleString('en-US')}</div>
                <div class="final-score-sub">Điểm tổng kết 3 vòng</div>
            </div>

            <div style="width: 100%; display: flex; flex-direction: column; gap: 14px;">
                ${roundsHtml}
            </div>

            <button class="btn-action" onclick="backToMainMenu()" style="margin-top: 10px;">
                <i class="fa-solid fa-house"></i> Về Menu chính
            </button>
        </div>
    `;
}