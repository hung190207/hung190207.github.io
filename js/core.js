// Section: Constants & Audio

const HANOI_OFFSET_MS = 7 * 60 * 60 * 1000;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'vietnamguesser_daily_data';
const HISTORY_KEY = 'vietnamguesser_history';
const ACTIVE_MODE_KEY = 'vietnamguesser_active_mode';
const MODES = ['image', 'sound', 'history', 'map'];

let audioCtx = null;
const customClickAudio = new Audio('click3.mp3');
let useCustomAudioFile = false;

customClickAudio.addEventListener('canplaythrough', () => {
    useCustomAudioFile = true;
});

function playClickSound() {
    if (useCustomAudioFile) {
        const soundClone = customClickAudio.cloneNode();
        soundClone.volume = 0.7;
        soundClone.play().catch(() => {});
        return;
    }
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        triggerClickPulse(now, 1900, 520, 0.022, 0.45);
        triggerClickPulse(now + 0.042, 1350, 420, 0.016, 0.22);
    } catch (err) {}
}

function triggerClickPulse(startTime, startFreq, endFreq, duration, gainLevel) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(startFreq, startTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);
    gain.gain.setValueAtTime(gainLevel, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(startTime);
    osc.stop(startTime + duration);
}


// Section: Daily Timer

function getHanoiDateString() {
    const hanoiTime = new Date(Date.now() + HANOI_OFFSET_MS);
    return hanoiTime.toISOString().slice(0, 10);
}

function updateCountdownTimers() {
    const nowUtcMs = Date.now();
    const hanoiElapsedTodayMs = (nowUtcMs + HANOI_OFFSET_MS) % ONE_DAY_MS;
    const remainingMs = ONE_DAY_MS - hanoiElapsedTodayMs;

    const totalSeconds = Math.floor(remainingMs / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const todayStr = getHanoiDateString();

    MODES.forEach(mode => {
        const timerContainer = document.getElementById(`timer-container-${mode}`);
        const timerEl = document.getElementById(`timer-${mode}`);
        if (timerContainer && timerEl) {
            const statusKey = `vietnamguesser_${mode}_daily_status`;
            try {
                const statusData = JSON.parse(localStorage.getItem(statusKey));
                if (statusData && statusData.date === todayStr && statusData.completed) {
                    timerContainer.style.display = 'flex';
                    timerEl.textContent = formattedTime;
                } else {
                    timerContainer.style.display = 'none';
                }
            } catch (e) {
                timerContainer.style.display = 'none';
            }
        }
    });

    checkAndSyncDailyScores();
}


// Section: Score Management

function getDefaultScoreData(dateStr) {
    return {
        date: dateStr,
        scores: { image: 0, sound: 0, history: 0, map: 0 }
    };
}

function checkAndSyncDailyScores() {
    const todayHanoi = getHanoiDateString();
    let dailyData = null;
    try {
        dailyData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {}

    if (!dailyData || dailyData.date !== todayHanoi) {
        if (dailyData && dailyData.date) {
            try {
                const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
                history[dailyData.date] = dailyData.scores;
                localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
            } catch (e) {}
        }
        dailyData = getDefaultScoreData(todayHanoi);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyData));
        renderScoresToUI(dailyData.scores);
    }
    return dailyData;
}

function renderScoresToUI(scores) {
    let total = 0;
    MODES.forEach(mode => {
        const modeScore = Number(scores[mode]) || 0;
        total += modeScore;
        const scoreEl = document.getElementById(`score-${mode}`);
        if (scoreEl) scoreEl.textContent = modeScore.toLocaleString('en-US');
    });

    const totalScoreEl = document.getElementById('total-score');
    if (totalScoreEl) totalScoreEl.textContent = total.toLocaleString('en-US');

    const sidebarScoreEl = document.getElementById('sidebar-today-score');
    if (sidebarScoreEl) sidebarScoreEl.textContent = total.toLocaleString('en-US');
}

function saveModeScore(mode, newScore) {
    const dailyData = checkAndSyncDailyScores();
    if (MODES.includes(mode)) {
        dailyData.scores[mode] = Math.max(0, Number(newScore) || 0);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyData));
        renderScoresToUI(dailyData.scores);
    }
}


// Section: Mobile Sidebar Controls

function toggleMobileSidebar() {
    playClickSound();
    const sidebar = document.getElementById('game-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('game-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}


// Section: Navigation

function openGameMode(mode, isReload = false) {
    if (!isReload) playClickSound();
    closeMobileSidebar();

    if (typeof stopSoundPlayer === 'function' && mode !== 'sound') {
        stopSoundPlayer();
    }

    const imgView = document.getElementById('image-mode-view');
    const soundView = document.getElementById('sound-mode-view');

    if (mode === 'image' || mode === 'sound') {
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        const activeNav = document.getElementById(`nav-mode-${mode}`);
        if (activeNav) activeNav.classList.add('active');

        localStorage.setItem(ACTIVE_MODE_KEY, mode);
        document.getElementById('main-menu-wrapper').style.display = 'none';
        document.getElementById('game-layout-wrapper').style.display = 'flex';

        if (mode === 'image') {
            if (soundView) soundView.style.display = 'none';
            if (imgView) imgView.style.display = 'flex';
            if (typeof initImageMode === 'function') initImageMode();
        } else if (mode === 'sound') {
            if (imgView) imgView.style.display = 'none';
            if (soundView) soundView.style.display = 'flex';
            if (typeof initSoundMode === 'function') initSoundMode();
        }
    } else {
        setTimeout(() => {
            alert('Chế độ này sẽ được tích hợp ở bước tiếp theo!');
        }, 80);
    }
}

function backToMainMenu() {
    playClickSound();
    closeMobileSidebar();
    if (typeof stopSoundPlayer === 'function') {
        stopSoundPlayer();
    }
    localStorage.removeItem(ACTIVE_MODE_KEY);
    document.getElementById('game-layout-wrapper').style.display = 'none';
    document.getElementById('main-menu-wrapper').style.display = 'flex';
    const data = checkAndSyncDailyScores();
    renderScoresToUI(data.scores);
    updateCountdownTimers();
}

function handleReplayClick() {
    playClickSound();
    setTimeout(() => {
        const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
        const dates = Object.keys(history);
        if (dates.length === 0) {
            alert('Chưa có dữ liệu điểm các ngày trước.');
        } else {
            const summary = dates.map(d => {
                const s = history[d];
                const sum = (s.image || 0) + (s.sound || 0) + (s.history || 0) + (s.map || 0);
                return `• Ngày ${d}: Tổng ${sum.toLocaleString('en-US')} điểm`;
            }).join('\n');
            alert(`Lịch sử điểm các ngày trước:\n\n${summary}`);
        }
    }, 80);
}

document.addEventListener('DOMContentLoaded', () => {
    const initialData = checkAndSyncDailyScores();
    renderScoresToUI(initialData.scores);
    updateCountdownTimers();
    setInterval(updateCountdownTimers, 1000);

    const savedMode = localStorage.getItem(ACTIVE_MODE_KEY);
    if (savedMode === 'image' || savedMode === 'sound') {
        openGameMode(savedMode, true);
    }
});