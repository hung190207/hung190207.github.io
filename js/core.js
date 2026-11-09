// Constants & Audio

const HANOI_OFFSET_MS = 7 * 60 * 60 * 1000;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'vietnamguesser_daily_data';
const HISTORY_KEY = 'vietnamguesser_history';
const ACTIVE_MODE_KEY = 'vietnamguesser_active_mode';
const SETTINGS_KEY = 'vietnamguesser_settings';
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


// Settings & Localization

const I18N_DICT = {
    vi: {
        subtitle: 'ĐOÁN MỌI THỨ VỀ VIỆT NAM',
        select_mode: 'Chọn chế độ đoán',
        mode_image_title: '... qua hình ảnh',
        mode_image_desc: 'Đoán các món ăn đặc sản của Việt Nam qua ảnh chụp thực tế.',
        mode_sound_title: '... qua âm thanh',
        mode_sound_desc: 'Nghe và đoán bài hát Việt Nam.',
        mode_history_title: '... qua lịch sử & nhân vật',
        mode_history_desc: 'Thử tài hiểu biết về các anh hùng hào kiệt, nhân vật nổi tiếng của dân tộc Việt Nam.',
        mode_map_title: '... qua bản đồ',
        mode_map_desc: 'Đoán tên tỉnh thành, vị trí, ranh giới địa lý hoặc các địa điểm đặc biệt trên bản đồ chữ S Việt Nam.',
        score_label: 'Điểm:',
        reset_label: 'Reset lúc:',
        total_score_label: 'Tổng điểm:',
        about_us: 'Về chúng tôi',
        contact: 'Liên hệ',
        home: 'Trang chủ',
        today_score: 'Điểm hôm nay:',
        nav_image: 'Đoán qua hình ảnh',
        nav_sound: 'Đoán qua âm thanh',
        nav_history: 'Lịch sử & nhân vật',
        nav_map: 'Đoán qua bản đồ',
        settings_title: 'Cài đặt',
        settings_language: 'Ngôn ngữ',
        settings_mode: 'Mode',
        theme_light: 'Light',
        theme_dark: 'Dark',

        points_suffix: 'điểm',
        score_header: 'ĐIỂM',
        guess_btn: 'ĐOÁN',
        next_round_btn: 'VÒNG TIẾP THEO ➔',
        view_final_btn: 'XEM KẾT QUẢ TỔNG ➔',
        back_menu_btn: 'Về Menu chính',
        today_summary_heading: 'TỔNG KẾT HÔM NAY',
        three_rounds_sub: 'Điểm tổng kết 3 vòng',
        diff_easy: 'Dễ',
        diff_medium: 'Trung bình',
        diff_hard: 'Khó',
        yesterday_single: 'Đáp án của ngày hôm qua là',
        yesterday_multi_prefix: 'Đáp án của ngày hôm qua là',

        img_heading: 'ĐOÁN HÌNH ẢNH',
        img_clue_1: 'GỢI Ý 1',
        img_clue_2: 'GỢI Ý 2',
        img_clue_name: 'GỢI Ý TÊN',
        img_clue_1_unlocked: 'ĐÃ MỞ GỢI Ý 1',
        img_clue_2_unlocked: 'ĐÃ MỞ GỢI Ý 2',
        img_clue_name_unlocked: 'ĐÃ MỞ GỢI Ý TÊN',
        img_feature_label: 'Đặc điểm:',
        img_origin_label: 'Nơi xuất xứ:',
        img_name_label: 'Tên món:',
        img_input_placeholder: 'Nhập tên món ăn tại đây...',
        img_empty_warning: 'Vui lòng nhập tên món ăn trước khi đoán!',

        sound_heading: 'ĐOÁN ÂM THANH',
        sound_result_heading: 'KẾT QUẢ ÂM THANH HÔM NAY',
        sound_audio_only: 'CHỈ ÂM THANH',
        sound_unlock_video: 'MỞ GỢI Ý VIDEO',
        sound_video_unlocked: 'ĐÃ MỞ GỢI Ý VIDEO',
        sound_input_placeholder: 'Nhập tên bài hát tại đây...',
        sound_empty_warning: 'Vui lòng nhập tên bài hát trước khi đoán!',
        sound_artist_prefix: 'Nghệ sĩ:',

        hist_heading: 'ĐOÁN NHÂN VẬT LỊCH SỬ',
        hist_subtitle: 'Đoán nhân vật lịch sử Việt Nam của ngày hôm nay!',
        hist_clue_1: 'GỢI Ý 1: CÂU NÓI',
        hist_clue_1_unlocked: 'ĐÃ MỞ GỢI Ý 1',
        hist_clue_2: 'GỢI Ý 2: SỰ KIỆN',
        hist_clue_2_unlocked: 'ĐÃ MỞ GỢI Ý 2',
        hist_after_guesses: 'SAU {n} LƯỢT',
        hist_event_label: 'Sự kiện lịch sử:',
        hist_input_placeholder: 'Nhập tên nhân vật lịch sử...',
        hist_empty_warning: 'Vui lòng nhập tên nhân vật trước khi đoán!',
        hist_not_found_warning: 'Không tìm thấy nhân vật này trong danh sách!',
        hist_already_guessed: 'Bạn đã đoán nhân vật này rồi!',
        hist_col_char: 'Nhân vật',
        hist_col_role: 'Vai trò',
        hist_col_event: 'Sự kiện gắn liền',
        hist_col_region: 'Vùng',
        hist_col_era: 'Giai đoạn',
        hist_legend_correct: 'Chính xác',
        hist_legend_partial: 'Đúng một phần',
        hist_legend_wrong: 'Không khớp',
        hist_victory_title: 'Chính xác:',
        hist_victory_desc: 'Bạn đã tìm ra nhân vật sau {tries} lượt đoán và nhận được <strong>{score} điểm</strong>!',

        map_result_heading: 'KẾT QUẢ BẢN ĐỒ HÔM NAY',
        map_reset_start: 'Quay về vị trí xuất phát',
        map_fullscreen: 'Toàn màn hình',
        map_open_mobile: 'MỞ BẢN ĐỒ ĐOÁN',
        map_toggle_size: 'Phóng to / Thu nhỏ',
        map_close_mobile: 'Đóng bản đồ',
        map_pick_prompt: 'CHỌN VỊ TRÍ TRÊN BẢN ĐỒ',
        map_guess_this: 'ĐOÁN VỊ TRÍ NÀY',
        map_distance_label: 'Cách mục tiêu:',
        map_popup_answer: 'Đáp án:',
        map_popup_guess: 'Vị trí bạn đoán'
    },
    en: {
        subtitle: 'GUESS EVERYTHING ABOUT VIETNAM',
        select_mode: 'Select Game Mode',
        mode_image_title: '... by Image',
        mode_image_desc: 'Guess Vietnamese specialty dishes from real photos.',
        mode_sound_title: '... by Sound',
        mode_sound_desc: 'Listen and guess Vietnamese songs.',
        mode_history_title: '... by History & Figures',
        mode_history_desc: 'Test your knowledge of famous Vietnamese heroes and historical figures.',
        mode_map_title: '... by Map',
        mode_map_desc: 'Guess provinces, locations, and landmarks across the S-shaped map of Vietnam.',
        score_label: 'Score:',
        reset_label: 'Resets in:',
        total_score_label: 'Total Score:',
        about_us: 'About Us',
        contact: 'Contact',
        home: 'Home',
        today_score: 'Today score:',
        nav_image: 'Guess by Image',
        nav_sound: 'Guess by Sound',
        nav_history: 'History & Figures',
        nav_map: 'Guess by Map',
        settings_title: 'Settings',
        settings_language: 'Language',
        settings_mode: 'Mode',
        theme_light: 'Light',
        theme_dark: 'Dark',

        points_suffix: 'pts',
        score_header: 'SCORE',
        guess_btn: 'GUESS',
        next_round_btn: 'NEXT ROUND ➔',
        view_final_btn: 'VIEW FINAL RESULTS ➔',
        back_menu_btn: 'Back to Main Menu',
        today_summary_heading: "TODAY'S SUMMARY",
        three_rounds_sub: 'Total score across 3 rounds',
        diff_easy: 'Easy',
        diff_medium: 'Medium',
        diff_hard: 'Hard',
        yesterday_single: "Yesterday's answer was",
        yesterday_multi_prefix: "Yesterday's answers were",

        img_heading: 'GUESS THE DISH',
        img_clue_1: 'CLUE 1',
        img_clue_2: 'CLUE 2',
        img_clue_name: 'NAME CLUE',
        img_clue_1_unlocked: 'CLUE 1 UNLOCKED',
        img_clue_2_unlocked: 'CLUE 2 UNLOCKED',
        img_clue_name_unlocked: 'NAME CLUE UNLOCKED',
        img_feature_label: 'Features:',
        img_origin_label: 'Origin:',
        img_name_label: 'Dish Name:',
        img_input_placeholder: 'Type dish name here...',
        img_empty_warning: 'Please enter a dish name before guessing!',

        sound_heading: 'GUESS THE SONG',
        sound_result_heading: "TODAY'S SOUND RESULT",
        sound_audio_only: 'AUDIO ONLY',
        sound_unlock_video: 'UNLOCK VIDEO CLUE',
        sound_video_unlocked: 'VIDEO CLUE UNLOCKED',
        sound_input_placeholder: 'Type song title here...',
        sound_empty_warning: 'Please enter a song title before guessing!',
        sound_artist_prefix: 'Artist:',

        hist_heading: 'GUESS THE HISTORICAL FIGURE',
        hist_subtitle: "Guess today's Vietnamese historical figure!",
        hist_clue_1: 'CLUE 1: QUOTE',
        hist_clue_1_unlocked: 'CLUE 1 UNLOCKED',
        hist_clue_2: 'CLUE 2: EVENT',
        hist_clue_2_unlocked: 'CLUE 2 UNLOCKED',
        hist_after_guesses: 'IN {n} TRIES',
        hist_event_label: 'Historical Event:',
        hist_input_placeholder: 'Type historical figure name...',
        hist_empty_warning: 'Please enter a name before guessing!',
        hist_not_found_warning: 'Figure not found in the database!',
        hist_already_guessed: 'You already guessed this figure!',
        hist_col_char: 'Figure',
        hist_col_role: 'Role',
        hist_col_event: 'Key Event',
        hist_col_region: 'Region',
        hist_col_era: 'Era',
        hist_legend_correct: 'Correct',
        hist_legend_partial: 'Partial',
        hist_legend_wrong: 'Incorrect',
        hist_victory_title: 'Correct:',
        hist_victory_desc: 'You found the figure in {tries} tries and earned <strong>{score} pts</strong>!',

        map_result_heading: "TODAY'S MAP RESULT",
        map_reset_start: 'Return to start location',
        map_fullscreen: 'Fullscreen',
        map_open_mobile: 'OPEN GUESS MAP',
        map_toggle_size: 'Expand / Collapse',
        map_close_mobile: 'Close Map',
        map_pick_prompt: 'PLACE YOUR PIN ON THE MAP',
        map_guess_this: 'GUESS THIS LOCATION',
        map_distance_label: 'Distance from target:',
        map_popup_answer: 'Answer:',
        map_popup_guess: 'Your guess'
    }
};

let currentSettings = {
    lang: 'vi',
    theme: 'light'
};

function isEn() {
    return currentSettings.lang === 'en';
}

function t(key) {
    const lang = currentSettings.lang || 'vi';
    const dict = I18N_DICT[lang] || I18N_DICT.vi;
    return dict[key] !== undefined ? dict[key] : (I18N_DICT.vi[key] || key);
}

function loadUserSettings() {
    try {
        const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
        if (saved) {
            currentSettings.lang = saved.lang === 'en' ? 'en' : 'vi';
            currentSettings.theme = saved.theme === 'dark' ? 'dark' : 'light';
        }
    } catch (e) {}
    document.documentElement.style.filter = 'none';
    applyTheme(currentSettings.theme);
    applyLanguage(currentSettings.lang);
}

function saveUserSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(currentSettings));
}

function openSettingsModal() {
    playClickSound();
    const overlay = document.getElementById('settings-modal-overlay');
    if (overlay) overlay.classList.add('active');
}

function closeSettingsModal() {
    playClickSound();
    const overlay = document.getElementById('settings-modal-overlay');
    if (overlay) overlay.classList.remove('active');
}

function setGameLanguage(lang) {
    playClickSound();
    currentSettings.lang = lang === 'en' ? 'en' : 'vi';
    saveUserSettings();
    applyLanguage(currentSettings.lang);
}

function applyLanguage(lang) {
    const dict = I18N_DICT[lang] || I18N_DICT.vi;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    const btnVi = document.getElementById('lang-btn-vi');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnVi) btnVi.classList.toggle('active', lang === 'vi');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');

    const activeMode = localStorage.getItem(ACTIVE_MODE_KEY);
    if (activeMode === 'image' && typeof initImageMode === 'function') initImageMode();
    if (activeMode === 'sound' && typeof initSoundMode === 'function') initSoundMode();
    if (activeMode === 'history' && typeof initHistoryMode === 'function') initHistoryMode();
    if (activeMode === 'map' && typeof initMapMode === 'function') initMapMode();
}

function setGameTheme(theme) {
    playClickSound();
    currentSettings.theme = theme === 'dark' ? 'dark' : 'light';
    saveUserSettings();
    applyTheme(currentSettings.theme);
}

function applyTheme(theme) {
    const activeTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', activeTheme);

    const btnLight = document.getElementById('theme-btn-light');
    const btnDark = document.getElementById('theme-btn-dark');
    if (btnLight) btnLight.classList.toggle('active', activeTheme === 'light');
    if (btnDark) btnDark.classList.toggle('active', activeTheme === 'dark');
}


// Shared Text & Daily Seed Helpers

function normalizeVN(str) {
    return str
        .normalize('NFC')
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/\s+/g, ' ');
}

function getHanoiDateString() {
    const hanoiTime = new Date(Date.now() + HANOI_OFFSET_MS);
    return hanoiTime.toISOString().slice(0, 10);
}

function getYesterdayHanoiDateString() {
    const yesterdayHanoi = new Date(Date.now() + HANOI_OFFSET_MS - ONE_DAY_MS);
    return yesterdayHanoi.toISOString().slice(0, 10);
}

function hashSeedString(dateStr, saltString) {
    const str = `${dateStr}::vietnamguesser::${saltString}`;
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 16777619);
    }
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return h >>> 0;
}

function getDailySeedHash(saltString) {
    return hashSeedString(getHanoiDateString(), saltString);
}

function getYesterdaySeedHash(saltString) {
    return hashSeedString(getYesterdayHanoiDateString(), saltString);
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


// Score Management

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


// Mobile Sidebar & Navigation

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

function openGameMode(mode, isReload = false) {
    if (!isReload) playClickSound();
    closeMobileSidebar();

    if (typeof stopSoundPlayer === 'function' && mode !== 'sound') {
        stopSoundPlayer();
    }

    const imgView = document.getElementById('image-mode-view');
    const soundView = document.getElementById('sound-mode-view');
    const historyView = document.getElementById('history-mode-view');
    const mapView = document.getElementById('map-mode-view');

    if (MODES.includes(mode)) {
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        const activeNav = document.getElementById(`nav-mode-${mode}`);
        if (activeNav) activeNav.classList.add('active');

        localStorage.setItem(ACTIVE_MODE_KEY, mode);
        document.getElementById('main-menu-wrapper').style.display = 'none';
        document.getElementById('game-layout-wrapper').style.display = 'flex';

        if (imgView) imgView.style.display = mode === 'image' ? 'flex' : 'none';
        if (soundView) soundView.style.display = mode === 'sound' ? 'flex' : 'none';
        if (historyView) historyView.style.display = mode === 'history' ? 'flex' : 'none';
        if (mapView) mapView.style.display = mode === 'map' ? 'flex' : 'none';

        if (mode === 'image' && typeof initImageMode === 'function') initImageMode();
        if (mode === 'sound' && typeof initSoundMode === 'function') initSoundMode();
        if (mode === 'history' && typeof initHistoryMode === 'function') initHistoryMode();
        if (mode === 'map' && typeof initMapMode === 'function') initMapMode();
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

document.addEventListener('DOMContentLoaded', () => {
    loadUserSettings();
    const initialData = checkAndSyncDailyScores();
    renderScoresToUI(initialData.scores);
    updateCountdownTimers();
    setInterval(updateCountdownTimers, 1000);

    const savedMode = localStorage.getItem(ACTIVE_MODE_KEY);
    if (MODES.includes(savedMode)) {
        openGameMode(savedMode, true);
    }
});