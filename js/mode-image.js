// Section: Giải mã và chuẩn hóa chuỗi

function decodeStr(encoded) {
    return decodeURIComponent(escape(atob(encoded)));
}

function normalizeVN(str) {
    return str
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/\s+/g, ' ');
}

function buildMaskedTitleClue(fullName) {
    const totalLetters = fullName.replace(/\s+/g, '').length;
    const words = fullName.trim().split(/\s+/);
    if (totalLetters < 7) {
        return words.map((w, wi) => Array.from(w).map((c, ci) => (wi === 0 && ci === 0 ? c : '_')).join('')).join(' ');
    } else {
        return words.map(w => Array.from(w).map((c, ci) => (ci === 0 ? c : '_')).join('')).join(' ');
    }
}


// Make dish difficulty database with encoded names and clues to prevent cheating

const DISH_DATABASE = {
    easy: [
        {
            id: 'pho',
            acceptedEncoded: ['cGjhu58='],
            displayNameEncoded: 'UGjhu58=',
            image: 'img/pho.jpeg',
            featureClue: 'Món ăn có nước dùng trong và ngọt thanh ninh từ xương, thơm mùi quế, hồi, thảo quả, ăn cùng sợi bánh trắng mềm.',
            originClue: 'Ra đời tại miền Bắc Việt Nam, cội nguồn từ Nam Định và Hà Nội vào đầu thế kỷ 20.'
        },
        {
            id: 'com_tam',
            acceptedEncoded: ['Y8ahbSB04bqlbQ=='],
            displayNameEncoded: 'Q8ahbSB04bqlbQ==',
            image: 'img/com_tam.webp',
            featureClue: 'Nấu từ những hạt gạo bị vỡ khi xay xát, thường ăn kèm sườn nướng, bì, chả trứng, mỡ hành và nước mắm chua ngọt.',
            originClue: 'Xuất xứ từ vùng đồng bằng sông Cửu Long và trở thành món ăn biểu tượng của Sài Gòn – TP.HCM.'
        },
        {
            id: 'banh_mi',
            acceptedEncoded: ['YsOhbmggbcOs'],
            displayNameEncoded: 'QsOhbmggbcOs',
            image: 'img/banh_mi.jpg',
            featureClue: 'Vỏ nướng giòn rụm bên ngoài, ruột mềm xốp bên trong, phết pate, bơ, kẹp thịt, chả lụa, đồ chua và ngò rí.',
            originClue: 'Hình thành tại Sài Gòn từ sự giao thoa ẩm thực Việt – Pháp, biến tấu từ ổ bánh baguette thành món ăn đường phố.'
        },
        {
            id: 'bun_thit_nuong',
            acceptedEncoded: ['YsO6biB0aOG7i3Qgbsaw4bubbmc='],
            displayNameEncoded: 'QsO6biB0aOG7i3Qgbsaw4bubbmc=',
            image: 'img/bun_thit_nuong.png',
            featureClue: 'Món bún trộn khô không chan nước lèo nóng, gồm thịt heo ướp sả nướng vàng thơm, đồ chua, đậu phộng rang và nước mắm chua ngọt.',
            originClue: 'Có nguồn gốc từ miền Trung và miền Nam Việt Nam, đặc biệt phổ biến tại Sài Gòn và các tỉnh Nam Bộ.'
        },
        {
            id: 'bun_bo_hue',
            acceptedEncoded: ['YsO6biBiw7IgaHXhur8='],
            displayNameEncoded: 'QsO6biBiw7IgSHXhur8=',
            image: 'img/bun-bo-hue.webp',
            featureClue: 'Món bún nổi tiếng với sợi bún to, nước dùng đậm đà vị sả và mắm ruốc đặc trưng, ăn kèm thịt bò, chả và giò heo.',
            originClue: 'Xuất xứ từ vùng đất cố đô Huế, mang đậm phong cách ẩm thực miền Trung.'
        }
    ],

    medium: [],

    hard: []
};


// Get all unique dish names from the database

function getAllDatabaseDishNames() {
    const allItems = [
        ...DISH_DATABASE.easy,
        ...DISH_DATABASE.medium,
        ...DISH_DATABASE.hard
    ];
    const uniqueNames = new Set(allItems.map(item => decodeStr(item.displayNameEncoded)));
    return Array.from(uniqueNames);
}


// Choose 3 daily rounds from the database, ensuring no duplicates and respecting saved IDs if provided

function pickDailyRounds(savedIds) {
    const usedIds = new Set();

    function pickFromPool(pool, fallbackPool, preferredId) {
        const source = pool.length > 0 ? pool : fallbackPool;
        if (preferredId) {
            const found = source.find(item => item.id === preferredId && !usedIds.has(item.id));
            if (found) {
                usedIds.add(found.id);
                return found;
            }
        }
        const available = source.filter(item => !usedIds.has(item.id));
        const chosen = available[Math.floor(Math.random() * available.length)] || source[0];
        usedIds.add(chosen.id);
        return chosen;
    }

    const r1 = pickFromPool(DISH_DATABASE.easy, DISH_DATABASE.easy, savedIds ? savedIds[0] : null);
    const r2 = pickFromPool(DISH_DATABASE.medium, DISH_DATABASE.easy, savedIds ? savedIds[1] : null);
    const r3 = pickFromPool(DISH_DATABASE.hard, DISH_DATABASE.easy, savedIds ? savedIds[2] : null);

    return [
        { ...r1, round: 1, difficulty: 'Dễ' },
        { ...r2, round: 2, difficulty: 'Trung bình' },
        { ...r3, round: 3, difficulty: 'Khó' }
    ];
}


// Manage the state of the daily image rounds, including scores, unlocked clues, and current round index

let activeDailyRounds = [];
let currentRoundIndex = 0;
let roundScores = [0, 0, 0];
let unlockedCluesCount = 0;
let roundFinished = false;

const IMAGE_STORAGE_KEY = 'vietnamguesser_image_daily_status';

function getImageDailyStatus() {
    const today = getHanoiDateString();
    try {
        const data = JSON.parse(localStorage.getItem(IMAGE_STORAGE_KEY));
        if (data && data.date === today) return data;
    } catch (e) {}
    return null;
}

function saveImageDailyStatus(completed, scoresArray, roundIdx, cluesCount) {
    const today = getHanoiDateString();
    const roundIds = activeDailyRounds.map(r => r.id);
    const data = {
        date: today,
        completed: completed,
        scores: scoresArray,
        currentRoundIndex: roundIdx,
        unlockedCluesCount: cluesCount,
        roundIds: roundIds
    };
    localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(data));
}

function initImageMode() {
    const dailyStatus = getImageDailyStatus();

    if (dailyStatus && dailyStatus.roundIds) {
        activeDailyRounds = pickDailyRounds(dailyStatus.roundIds);
        roundScores = dailyStatus.scores || [0, 0, 0];

        if (dailyStatus.completed) {
            renderFinalScoreScreen(roundScores);
            return;
        }

        currentRoundIndex = dailyStatus.currentRoundIndex || 0;
        unlockedCluesCount = dailyStatus.unlockedCluesCount || 0;
        loadRoundScreen(currentRoundIndex, unlockedCluesCount);
        return;
    }

    activeDailyRounds = pickDailyRounds(null);
    currentRoundIndex = 0;
    roundScores = [0, 0, 0];
    unlockedCluesCount = 0;
    saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount);
    loadRoundScreen(currentRoundIndex, unlockedCluesCount);
}

function getCurrentRoundMaxScore() {
    if (unlockedCluesCount === 0) return 3000;
    if (unlockedCluesCount === 1) return 2000;
    if (unlockedCluesCount === 2) return 1000;
    return 500;
}


// Show the round interface with image, clues, and guess input

function loadRoundScreen(index, savedClues = 0) {
    const data = activeDailyRounds[index];
    unlockedCluesCount = savedClues;
    roundFinished = false;

    const container = document.getElementById('image-mode-view');
    container.innerHTML = `
        <h2 class="game-mode-heading">ĐOÁN HÌNH ẢNH</h2>

        <div class="round-bar">
            <span id="img-round-number" class="round-title">Round ${data.round} / 3</span>
            <span id="img-difficulty-badge" class="badge-difficulty">${data.difficulty}</span>
            <span id="img-potential-score" class="badge-score">+${getCurrentRoundMaxScore()} điểm</span>
        </div>

        <div class="image-stage">
            <img id="dish-image" src="${data.image}" alt="Dish">
        </div>

        <div class="clues-bar">
            <button id="btn-clue-1" class="btn-clue" onclick="handleClueButtonClick(1)">
                <i class="fa-solid fa-unlock"></i> GỢI Ý 1
            </button>
            <button id="btn-clue-2" class="btn-clue" onclick="handleClueButtonClick(2)" disabled>
                <i class="fa-solid fa-lock"></i> GỢI Ý 2
            </button>
            <button id="btn-clue-3" class="btn-clue" onclick="handleClueButtonClick(3)" disabled>
                <i class="fa-solid fa-lock"></i> GỢI Ý TÊN
            </button>
        </div>

        <div id="unlocked-clues-container" class="unlocked-clues-container">
            <div id="clue-line-1" class="clue-line" style="display: none;"></div>
            <div id="clue-line-2" class="clue-line" style="display: none;"></div>
            <div id="clue-line-3" class="clue-line" style="display: none;"></div>
        </div>

        <div class="guess-controls" style="position:relative;">
            <input 
                type="text" 
                id="guess-input" 
                class="guess-input" 
                placeholder="Nhập tên món ăn tại đây..." 
                autocomplete="off"
            >
            <button id="guess-submit-btn" class="btn-guess" onclick="submitImageGuess()">ĐOÁN</button>
            <button id="next-round-btn" class="btn-guess" style="display:none;" onclick="nextImageRound()">TIẾP THEO ➔</button>
        </div>

        <div id="round-feedback" class="round-feedback"></div>
    `;

    updateClueButtonsAndLines();
    setupAutocomplete();
}

function updateClueButtonsAndLines() {
    const data = activeDailyRounds[currentRoundIndex];
    const btnClue1 = document.getElementById('btn-clue-1');
    const btnClue2 = document.getElementById('btn-clue-2');
    const btnClue3 = document.getElementById('btn-clue-3');

    const line1 = document.getElementById('clue-line-1');
    const line2 = document.getElementById('clue-line-2');
    const line3 = document.getElementById('clue-line-3');

    if (!btnClue1) return;

    btnClue1.disabled = false;
    if (unlockedCluesCount >= 1) {
        btnClue1.classList.add('unlocked');
        btnClue1.innerHTML = '<i class="fa-solid fa-lock-open"></i> ĐÃ MỞ GỢI Ý 1';
        line1.style.display = 'block';
        line1.innerHTML = `<span class="clue-label">Đặc điểm:</span> ${data.featureClue}`;
    } else {
        btnClue1.classList.remove('unlocked');
        btnClue1.innerHTML = '<i class="fa-solid fa-unlock"></i> GỢI Ý 1';
        line1.style.display = 'none';
    }

    btnClue2.disabled = unlockedCluesCount < 1;
    if (unlockedCluesCount >= 2) {
        btnClue2.classList.add('unlocked');
        btnClue2.innerHTML = '<i class="fa-solid fa-lock-open"></i> ĐÃ MỞ GỢI Ý 2';
        line2.style.display = 'block';
        line2.innerHTML = `<span class="clue-label">Nơi xuất xứ:</span> ${data.originClue}`;
    } else {
        btnClue2.classList.remove('unlocked');
        btnClue2.innerHTML = '<i class="fa-solid fa-lock"></i> GỢI Ý 2';
        line2.style.display = 'none';
    }

    btnClue3.disabled = unlockedCluesCount < 2;
    if (unlockedCluesCount >= 3) {
        const decodedName = decodeStr(data.displayNameEncoded);
        const maskedTitle = buildMaskedTitleClue(decodedName);

        btnClue3.classList.add('unlocked');
        btnClue3.innerHTML = '<i class="fa-solid fa-lock-open"></i> ĐÃ MỞ GỢI Ý TÊN';
        line3.style.display = 'block';
        line3.innerHTML = `<span class="clue-label">Tên món:</span> <span class="title-mask">${maskedTitle}</span>`;
    } else {
        btnClue3.classList.remove('unlocked');
        btnClue3.innerHTML = '<i class="fa-solid fa-lock"></i> GỢI Ý TÊN';
        line3.style.display = 'none';
    }

    document.getElementById('img-potential-score').textContent = `+${getCurrentRoundMaxScore()} điểm`;
}

function handleClueButtonClick(clueLevel) {
    if (roundFinished) return;
    playClickSound();

    if (clueLevel === 1 && unlockedCluesCount === 0) unlockedCluesCount = 1;
    else if (clueLevel === 2 && unlockedCluesCount === 1) unlockedCluesCount = 2;
    else if (clueLevel === 3 && unlockedCluesCount === 2) unlockedCluesCount = 3;

    saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount);
    updateClueButtonsAndLines();
}


// Autocomplete for Guess Input

function setupAutocomplete() {
    const inputEl = document.getElementById('guess-input');
    if (!inputEl) return;

    const dishNames = getAllDatabaseDishNames();

    let dropdown = document.getElementById('autocomplete-list');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'autocomplete-list';
        dropdown.className = 'autocomplete-items';
        inputEl.parentNode.style.position = 'relative';
        inputEl.parentNode.appendChild(dropdown);
    }

    inputEl.addEventListener('input', function () {
        const val = this.value;
        closeAutocomplete();
        if (!val) return;

        const normalizedVal = normalizeVN(val);
        const matchingDishes = dishNames.filter(d => normalizeVN(d).includes(normalizedVal));
        if (matchingDishes.length === 0) return;

        matchingDishes.forEach(dish => {
            const item = document.createElement('div');
            const idx = normalizeVN(dish).indexOf(normalizedVal);
            const originalPart = dish.substr(idx, val.length);
            const highlighted = dish.substring(0, idx) + '<strong>' + originalPart + '</strong>' + dish.substring(idx + val.length);

            item.innerHTML = `<i class="fa-solid fa-utensils" style="margin-right:8px; color:var(--cyan-dim);"></i> ${highlighted}`;
            item.addEventListener('click', function () {
                inputEl.value = dish;
                closeAutocomplete();
                inputEl.focus();
            });
            dropdown.appendChild(item);
        });
    });

    inputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            submitImageGuess();
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target !== inputEl) closeAutocomplete();
    });
}

function closeAutocomplete() {
    const dropdown = document.getElementById('autocomplete-list');
    if (dropdown) dropdown.innerHTML = '';
}


// Check answer and submit the guess for the current round

function submitImageGuess() {
    if (roundFinished) return;
    playClickSound();
    closeAutocomplete();

    const inputEl = document.getElementById('guess-input');
    const userGuess = normalizeVN(inputEl.value);
    const feedbackEl = document.getElementById('round-feedback');

    if (!userGuess) {
        feedbackEl.textContent = 'Vui lòng nhập tên món ăn trước khi đoán!';
        feedbackEl.className = 'round-feedback warning';
        return;
    }

    const currentData = activeDailyRounds[currentRoundIndex];
    const isCorrect = currentData.acceptedEncoded.some(enc => {
        return normalizeVN(decodeStr(enc)) === userGuess;
    });

    roundFinished = true;
    const earned = isCorrect ? getCurrentRoundMaxScore() : 0;
    roundScores[currentRoundIndex] = earned;

    const totalCurrentScore = roundScores.reduce((a, b) => a + b, 0);
    saveModeScore('image', totalCurrentScore);

    if (currentRoundIndex < activeDailyRounds.length - 1) {
        saveImageDailyStatus(false, roundScores, currentRoundIndex + 1, 0);
    } else {
        saveImageDailyStatus(true, roundScores, currentRoundIndex, unlockedCluesCount);
    }

    const dishName = decodeStr(currentData.displayNameEncoded);
    if (isCorrect) {
        feedbackEl.innerHTML = `Chính xác! Đó là món <strong>${dishName}</strong> +${earned.toLocaleString('en-US')} điểm`;
        feedbackEl.className = 'round-feedback success';
    } else {
        feedbackEl.innerHTML = `Rất tiếc! Đáp án đúng là <strong>${dishName}</strong> - 0 điểm`;
        feedbackEl.className = 'round-feedback error';
    }

    inputEl.disabled = true;
    document.getElementById('guess-submit-btn').style.display = 'none';

    const nextBtn = document.getElementById('next-round-btn');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = currentRoundIndex < activeDailyRounds.length - 1 ? 'VÒNG TIẾP THEO ➔' : 'XEM KẾT QUẢ TỔNG';
}

function nextImageRound() {
    playClickSound();
    if (currentRoundIndex < activeDailyRounds.length - 1) {
        currentRoundIndex++;
        unlockedCluesCount = 0;
        saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount);
        loadRoundScreen(currentRoundIndex, unlockedCluesCount);
    } else {
        const totalSessionScore = roundScores.reduce((a, b) => a + b, 0);
        saveModeScore('image', totalSessionScore);
        saveImageDailyStatus(true, roundScores, currentRoundIndex, unlockedCluesCount);
        renderFinalScoreScreen(roundScores);
    }
}


// Total Points Table

function renderFinalScoreScreen(scoresArray) {
    const totalSum = scoresArray.reduce((a, b) => a + b, 0);
    const container = document.getElementById('image-mode-view');

    let roundsHtml = '';
    activeDailyRounds.forEach((round, idx) => {
        const dishName = decodeStr(round.displayNameEncoded);
        const pts = scoresArray[idx];
        roundsHtml += `
            <div class="round-recap-card">
                <div class="recap-header">
                    <span class="recap-round-title">Round ${round.round} - ${round.difficulty}</span>
                    <span class="recap-points">${pts.toLocaleString('en-US')} pts</span>
                </div>
                <div class="recap-body">
                    <img src="${round.image}" class="recap-thumb" alt="Dish">
                    <div class="recap-info">
                        <h4>${dishName}</h4>
                        <p>${round.originClue}</p>
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