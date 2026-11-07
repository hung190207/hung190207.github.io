// Image Mode Mechanics

function getDishName(item) {
    return item.name ? item.name : String.fromCharCode(...item.nameCodes);
}

function handleDishImgError(imgEl) {
    const rawSrc = imgEl.getAttribute('data-orig-src') || imgEl.getAttribute('src') || '';
    if (!imgEl.getAttribute('data-orig-src')) {
        imgEl.setAttribute('data-orig-src', rawSrc);
    }

    const baseNoExt = rawSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const altBase = baseNoExt.includes('_')
        ? baseNoExt.replace(/_/g, '-')
        : baseNoExt.replace(/-/g, '_');

    const candidates = [
        `${baseNoExt}.jpg`,
        `${baseNoExt}.webp`,
        `${baseNoExt}.png`,
        `${baseNoExt}.jpeg`,
        `${altBase}.jpg`,
        `${altBase}.webp`,
        `${altBase}.png`,
        `${altBase}.jpeg`
    ];

    const step = Number(imgEl.getAttribute('data-retry-step') || 0);
    if (step < candidates.length) {
        imgEl.setAttribute('data-retry-step', String(step + 1));
        imgEl.src = candidates[step];
    }
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

function getAllDatabaseDishNames() {
    const allItems = [
        ...DISH_DATABASE.easy,
        ...DISH_DATABASE.medium,
        ...DISH_DATABASE.hard
    ];
    return Array.from(new Set(allItems.map(item => getDishName(item))));
}

function pickDailyRounds() {
    const r1 = DISH_DATABASE.easy[getDailySeedHash('image_easy') % DISH_DATABASE.easy.length];
    const r2 = DISH_DATABASE.medium[getDailySeedHash('image_medium') % DISH_DATABASE.medium.length];
    const r3 = DISH_DATABASE.hard[getDailySeedHash('image_hard') % DISH_DATABASE.hard.length];

    return [
        { ...r1, round: 1, difficulty: 'Dễ' },
        { ...r2, round: 2, difficulty: 'Trung bình' },
        { ...r3, round: 3, difficulty: 'Khó' }
    ];
}


// State & Progress

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

function saveImageDailyStatus(completed, scoresArray, roundIdx, cluesCount, isRoundFinished) {
    const today = getHanoiDateString();
    const data = {
        date: today,
        completed: completed,
        scores: scoresArray,
        currentRoundIndex: roundIdx,
        unlockedCluesCount: cluesCount,
        roundFinished: isRoundFinished
    };
    localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(data));
}

function initImageMode() {
    activeDailyRounds = pickDailyRounds();
    const dailyStatus = getImageDailyStatus();

    if (dailyStatus) {
        roundScores = dailyStatus.scores || [0, 0, 0];

        if (dailyStatus.completed) {
            renderFinalScoreScreen(roundScores);
            return;
        }

        currentRoundIndex = dailyStatus.currentRoundIndex || 0;
        unlockedCluesCount = dailyStatus.unlockedCluesCount || 0;
        roundFinished = Boolean(dailyStatus.roundFinished);

        if (roundFinished) {
            renderRoundResultScreen(currentRoundIndex, roundScores[currentRoundIndex]);
        } else {
            loadRoundScreen(currentRoundIndex, unlockedCluesCount);
        }
        return;
    }

    currentRoundIndex = 0;
    roundScores = [0, 0, 0];
    unlockedCluesCount = 0;
    roundFinished = false;
    saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount, false);
    loadRoundScreen(currentRoundIndex, unlockedCluesCount);
}

function getCurrentRoundMaxScore() {
    if (unlockedCluesCount === 0) return 3000;
    if (unlockedCluesCount === 1) return 2000;
    if (unlockedCluesCount === 2) return 1000;
    return 500;
}


// Round UI & Clues

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
            <img id="dish-image" src="${data.image}" alt="Dish" onerror="handleDishImgError(this)">
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

        <div class="guess-controls">
            <div class="guess-input-wrapper">
                <div id="autocomplete-list" class="autocomplete-items"></div>
                <input 
                    type="text" 
                    id="guess-input" 
                    class="guess-input" 
                    placeholder="Nhập tên món ăn tại đây..." 
                    autocomplete="off"
                >
            </div>
            <button id="guess-submit-btn" class="btn-guess" onclick="submitImageGuess()">ĐOÁN</button>
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
        const decodedName = getDishName(data);
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

    saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount, false);
    updateClueButtonsAndLines();
}


// Autocomplete & Submission

function setupAutocomplete() {
    const inputEl = document.getElementById('guess-input');
    const dropdown = document.getElementById('autocomplete-list');
    if (!inputEl || !dropdown) return;

    const dishNames = getAllDatabaseDishNames();

    function renderSuggestions(rawVal) {
        dropdown.innerHTML = '';
        const normalizedVal = normalizeVN(rawVal);

        if (!normalizedVal) {
            dropdown.classList.remove('show');
            return;
        }

        const matches = dishNames.filter(dish => normalizeVN(dish).includes(normalizedVal));
        if (matches.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        matches.sort((a, b) => {
            const aStarts = normalizeVN(a).startsWith(normalizedVal) ? 0 : 1;
            const bStarts = normalizeVN(b).startsWith(normalizedVal) ? 0 : 1;
            return aStarts - bStarts;
        });

        matches.forEach(dish => {
            const item = document.createElement('div');
            item.innerHTML = `<i class="fa-solid fa-utensils" style="margin-right:8px; color:var(--cyan-dim);"></i> ${dish}`;
            item.addEventListener('mousedown', function (e) {
                e.preventDefault();
                inputEl.value = dish;
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
            submitImageGuess();
        }
    });

    inputEl.addEventListener('blur', function () {
        setTimeout(() => {
            dropdown.classList.remove('show');
        }, 150);
    });

    inputEl.focus();
}

function submitImageGuess() {
    if (roundFinished) return;
    playClickSound();

    const inputEl = document.getElementById('guess-input');
    const feedbackEl = document.getElementById('round-feedback');
    if (!inputEl) return;

    const userGuess = normalizeVN(inputEl.value);
    if (!userGuess) {
        if (feedbackEl) {
            feedbackEl.textContent = 'Vui lòng nhập tên món ăn trước khi đoán!';
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    const currentData = activeDailyRounds[currentRoundIndex];
    const correctName = getDishName(currentData);
    const isCorrect = normalizeVN(correctName) === userGuess;

    roundFinished = true;
    const earned = isCorrect ? getCurrentRoundMaxScore() : 0;
    roundScores[currentRoundIndex] = earned;

    const totalCurrentScore = roundScores.reduce((a, b) => a + b, 0);
    saveModeScore('image', totalCurrentScore);
    saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount, true);

    renderRoundResultScreen(currentRoundIndex, earned);
}


// Round Result & Final Recap

let imageResultKeydownHandler = null;

function renderRoundResultScreen(index, earnedScore) {
    const data = activeDailyRounds[index];
    const dishName = getDishName(data);
    const nextButtonText = index < activeDailyRounds.length - 1 ? 'VÒNG TIẾP THEO ➔' : 'XEM KẾT QUẢ TỔNG ➔';

    const container = document.getElementById('image-mode-view');
    container.innerHTML = `
        <h2 class="game-mode-heading">ĐOÁN HÌNH ẢNH</h2>

        <div class="round-bar">
            <span class="round-title">Round ${data.round}</span>
            <span class="badge-difficulty">${data.difficulty}</span>
        </div>

        <div class="round-result-card">
            <img src="${data.image}" class="round-result-img" alt="Dish" onerror="handleDishImgError(this)">
            <div class="round-result-details">
                <div class="round-result-title">${dishName}</div>
                <div class="round-result-origin">${data.originClue}</div>
                <div class="score-badge-box">
                    <div class="score-badge-header">ĐIỂM</div>
                    <div class="score-badge-value">${earnedScore}</div>
                </div>
            </div>
        </div>

        <button id="next-round-action-btn" class="btn-guess" onclick="nextImageRound()">${nextButtonText}</button>
    `;

    if (imageResultKeydownHandler) {
        document.removeEventListener('keydown', imageResultKeydownHandler);
    }
    imageResultKeydownHandler = function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.removeEventListener('keydown', imageResultKeydownHandler);
            imageResultKeydownHandler = null;
            nextImageRound();
        }
    };
    document.addEventListener('keydown', imageResultKeydownHandler);
}

function nextImageRound() {
    if (imageResultKeydownHandler) {
        document.removeEventListener('keydown', imageResultKeydownHandler);
        imageResultKeydownHandler = null;
    }
    playClickSound();
    if (currentRoundIndex < activeDailyRounds.length - 1) {
        currentRoundIndex++;
        unlockedCluesCount = 0;
        roundFinished = false;
        saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount, false);
        loadRoundScreen(currentRoundIndex, unlockedCluesCount);
    } else {
        const totalSessionScore = roundScores.reduce((a, b) => a + b, 0);
        saveModeScore('image', totalSessionScore);
        saveImageDailyStatus(true, roundScores, currentRoundIndex, unlockedCluesCount, true);
        if (typeof updateCountdownTimers === 'function') {
            updateCountdownTimers();
        }
        renderFinalScoreScreen(roundScores);
    }
}

let finalScoreKeydownHandler = null;

function renderFinalScoreScreen(scoresArray) {
    const totalSum = scoresArray.reduce((a, b) => a + b, 0);
    const container = document.getElementById('image-mode-view');

    let roundsHtml = '';
    activeDailyRounds.forEach((round, idx) => {
        const dishName = getDishName(round);
        const pts = scoresArray[idx];
        roundsHtml += `
            <div class="round-recap-card">
                <div class="recap-header">
                    <span class="recap-round-title">Round ${round.round} - ${round.difficulty}</span>
                    <span class="recap-points">${pts.toLocaleString('en-US')} pts</span>
                </div>
                <div class="recap-body">
                    <img src="${round.image}" class="recap-thumb" alt="Dish" onerror="handleDishImgError(this)">
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

    if (finalScoreKeydownHandler) {
        document.removeEventListener('keydown', finalScoreKeydownHandler);
    }
    finalScoreKeydownHandler = function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.removeEventListener('keydown', finalScoreKeydownHandler);
            finalScoreKeydownHandler = null;
            backToMainMenu();
        }
    };
    document.addEventListener('keydown', finalScoreKeydownHandler);
}