// Section: Text Helpers

function decodeDishName(codes) {
    return String.fromCharCode(...codes);
}

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

function buildMaskedTitleClue(fullName) {
    const totalLetters = fullName.replace(/\s+/g, '').length;
    const words = fullName.trim().split(/\s+/);
    if (totalLetters < 7) {
        return words.map((w, wi) => Array.from(w).map((c, ci) => (wi === 0 && ci === 0 ? c : '_')).join('')).join(' ');
    } else {
        return words.map(w => Array.from(w).map((c, ci) => (ci === 0 ? c : '_')).join('')).join(' ');
    }
}


// Section: Dish Database

const DISH_DATABASE = {
    easy: [
        {
            id: 'pho',
            nameCodes: [80, 104, 7903],
            image: 'img/pho.jpeg',
            featureClue: 'Món ăn có nước dùng trong và ngọt thanh ninh từ xương, thơm mùi quế, hồi, thảo quả, ăn cùng sợi bánh trắng mềm.',
            originClue: 'Ra đời tại miền Bắc Việt Nam, cội nguồn từ Nam Định và Hà Nội vào đầu thế kỷ 20.'
        },
        {
            id: 'com_tam',
            nameCodes: [67, 417, 109, 32, 116, 7845, 109],
            image: 'img/com_tam.webp',
            featureClue: 'Nấu từ những hạt gạo bị vỡ khi xay xát, thường ăn kèm sườn nướng, bì, chả trứng, mỡ hành và nước mắm chua ngọt.',
            originClue: 'Xuất xứ từ vùng đồng bằng sông Cửu Long và trở thành món ăn biểu tượng của Sài Gòn – TP.HCM.'
        },
        {
            id: 'banh_mi',
            nameCodes: [66, 225, 110, 104, 32, 109, 236],
            image: 'img/banh_mi.jpg',
            featureClue: 'Vỏ nướng giòn rụm bên ngoài, ruột mềm xốp bên trong, phết pate, bơ, kẹp thịt, chả lụa, đồ chua và ngò rí.',
            originClue: 'Hình thành tại Sài Gòn từ sự giao thoa ẩm thực Việt – Pháp, biến tấu từ ổ bánh baguette thành món ăn đường phố.'
        },
        {
            id: 'bun_thit_nuong',
            nameCodes: [66, 250, 110, 32, 116, 104, 7883, 116, 32, 110, 432, 7899, 110, 103],
            image: 'img/bun_thit_nuong.png',
            featureClue: 'Món bún trộn khô không chan nước lèo nóng, gồm thịt heo ướp sả nướng vàng thơm, đồ chua, đậu phộng rang và mỡ hành.',
            originClue: 'Có nguồn gốc từ miền Trung và miền Nam Việt Nam, đặc biệt phổ biến tại Sài Gòn và các tỉnh Nam Bộ.'
        },
        {
            id: 'bun_bo_hue',
            nameCodes: [66, 250, 110, 32, 98, 242, 32, 72, 117, 7871],
            image: 'img/bun-bo-hue.webp',
            featureClue: 'Món bún nổi tiếng với sợi bún to, nước dùng đậm đà vị sả và mắm ruốc đặc trưng, ăn kèm thịt bò, chả và giò heo.',
            originClue: 'Xuất xứ từ vùng đất cố đô Huế, mang đậm phong cách ẩm thực miền Trung.'
        }
    ],

    medium: [
        {
            id: 'banh_khot',
            nameCodes: [66, 225, 110, 104, 32, 107, 104, 7885, 116],
            image: 'img/banh_khot.webp',
            featureClue: 'Bánh tròn nhỏ đổ trong khuôn sâu lòng, vỏ giòn rụm, nhân tôm tươi, rắc mỡ hành và tôm cháy, ăn kèm rau sống và nước mắm.',
            originClue: 'Đặc sản nổi tiếng của vùng biển Vũng Tàu và các tỉnh miền Nam.'
        },
        {
            id: 'banh_gai',
            nameCodes: [66, 225, 110, 104, 32, 103, 97, 105],
            image: 'img/banh_gai.jpg',
            featureClue: 'Bánh có lớp vỏ màu đen đặc trưng làm từ lá gai giã nhuyễn trộn bột nếp, nhân đậu xanh dừa thơm ngọt bùi, gói lá chuối khô.',
            originClue: 'Đặc sản truyền thống trứ danh của vùng đồng bằng Bắc Bộ như Hải Dương, Nam Định và Thanh Hóa.'
        },
        {
            id: 'mi_vit_tiem',
            nameCodes: [77, 236, 32, 118, 7883, 116, 32, 116, 105, 7873, 109],
            image: 'img/mi_vit_tiem.jpg',
            featureClue: 'Mì trứng sợi dai ăn cùng đùi vịt chiên vàng rồi tiềm mềm trong nồi nước dùng thảo mộc thuốc bắc thơm dịu.',
            originClue: 'Món ăn có gốc từ người Hoa, gắn liền với văn hóa ẩm thực khu vực Chợ Lớn, Sài Gòn.'
        },
        {
            id: 'che_khuc_bach',
            nameCodes: [67, 104, 232, 32, 107, 104, 250, 99, 32, 98, 7841, 99, 104],
            image: 'img/che_khuc_bach.jpg',
            featureClue: 'Món chè giải nhiệt gồm những viên thạch kem sữa phô mai béo ngậy cắt miếng, ăn kèm vải hoặc nhãn lồng và hạnh nhân lát.',
            originClue: 'Trào lưu ẩm thực khởi nguồn từ Hà Nội và Sài Gòn, rất được ưa chuộng vào mùa hè.'
        },
        {
            id: 'che_buoi',
            nameCodes: [67, 104, 232, 32, 98, 432, 7903, 105],
            image: 'img/che_buoi.jpg',
            featureClue: 'Được nấu từ phần cùi trắng giòn sần sật đã khử sạch vị đắng, kết hợp cùng đậu xanh bùi và nước cốt dừa sánh đặc.',
            originClue: 'Món chè dân dã nổi tiếng của vùng sông nước miền Tây Nam Bộ, đặc biệt là An Giang và Cần Thơ.'
        },
        {
            id: 'bo_pia',
            nameCodes: [66, 242, 32, 112, 237, 97],
            image: 'img/bo_pia.jpg',
            featureClue: 'Món cuốn nhỏ gọn gồm bánh tráng mỏng cuốn củ sắn, lạp xưởng, trứng tráng, tép khô, rau thơm và chấm tương ngọt đậu phộng.',
            originClue: 'Món ăn vặt đường phố du nhập từ ẩm thực Triều Châu, rất phổ biến tại miền Nam.'
        }
    ],

    hard: [
        {
            id: 'thang_co',
            nameCodes: [84, 104, 7855, 110, 103, 32, 99, 7889],
            image: 'img/thang_co.webp',
            featureClue: 'Món canh truyền thống ninh nhừ từ thịt, xương và nội tạng cùng thảo quả, hạt dổi và nhiều loại gia vị núi rừng đặc trưng.',
            originClue: 'Món ăn truyền thống lâu đời của đồng bào dân tộc H’Mông tại vùng cao nguyên Hà Giang và Lào Cai.'
        },
        {
            id: 'che_suong_sa_hat_luu',
            nameCodes: [67, 104, 232, 32, 115, 432, 417, 110, 103, 32, 115, 97, 32, 104, 7841, 116, 32, 108, 7921, 117],
            image: 'img/che-suong-sa-hat-luu.jpg',
            featureClue: 'Món chè nhiều màu sắc gồm thạch rong biển giòn mát, củ năng áo bột năng luộc trong veo, đậu xanh đánh và nước cốt dừa.',
            originClue: 'Món chè giải nhiệt lâu đời và phổ biến rộng rãi tại Sài Gòn cùng các tỉnh miền Nam.'
        },
        {
            id: 'luon_xao_lan',
            nameCodes: [76, 432, 417, 110, 32, 120, 224, 111, 32, 108, 259, 110],
            image: 'img/luon_xao_lan.jpg',
            featureClue: 'Thịt đồng xào săn thơm lừng với sả ớt, cà ri, bún tàu, nấm mèo và nước cốt dừa béo ngậy, rắc đậu phộng rang.',
            originClue: 'Món ăn đặc sản đậm chất dân dã của vùng sông nước miền Tây Nam Bộ.'
        },
        {
            id: 'banh_to',
            nameCodes: [66, 225, 110, 104, 32, 116, 7893],
            image: 'img/banh_to.jpg',
            featureClue: 'Bánh làm từ gạo nếp và đường đen đặc sản đem hấp chín trong rọ tre lót lá chuối, dẻo quánh, ăn trực tiếp hoặc chiên giòn.',
            originClue: 'Bánh cổ truyền không thể thiếu trong mâm cỗ ngày Tết của người dân xứ Quảng Nam.'
        },
        {
            id: 'bun_doc_mung',
            nameCodes: [66, 250, 110, 32, 100, 7885, 99, 32, 109, 249, 110, 103],
            image: 'img/bun_doc_mung.jpg',
            featureClue: 'Bát bún nước dùng xương heo trong ngọt, ăn kèm sườn non, mọc viên, thịt chân giò thái lát và phần cuống lá giòn sần sật.',
            originClue: 'Món bún thanh tao quen thuộc của ẩm thực Hà Nội.'
        }
    ]
};


// Section: Round Selection & State

function getAllDatabaseDishNames() {
    const allItems = [
        ...DISH_DATABASE.easy,
        ...DISH_DATABASE.medium,
        ...DISH_DATABASE.hard
    ];
    return allItems.map(item => decodeDishName(item.nameCodes));
}

function pickDailyRounds(savedIds) {
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

    const r1 = pickFromPool(DISH_DATABASE.easy, savedIds ? savedIds[0] : null);
    const r2 = pickFromPool(DISH_DATABASE.medium, savedIds ? savedIds[1] : null);
    const r3 = pickFromPool(DISH_DATABASE.hard, savedIds ? savedIds[2] : null);

    return [
        { ...r1, round: 1, difficulty: 'Dễ' },
        { ...r2, round: 2, difficulty: 'Trung bình' },
        { ...r3, round: 3, difficulty: 'Khó' }
    ];
}

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
    const roundIds = activeDailyRounds.map(r => r.id);
    const data = {
        date: today,
        completed: completed,
        scores: scoresArray,
        currentRoundIndex: roundIdx,
        unlockedCluesCount: cluesCount,
        roundFinished: isRoundFinished,
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
        roundFinished = Boolean(dailyStatus.roundFinished);

        if (roundFinished) {
            renderRoundResultScreen(currentRoundIndex, roundScores[currentRoundIndex]);
        } else {
            loadRoundScreen(currentRoundIndex, unlockedCluesCount);
        }
        return;
    }

    activeDailyRounds = pickDailyRounds(null);
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


// Section: Round UI & Clues

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
        const decodedName = decodeDishName(data.nameCodes);
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


// Section: Autocomplete & Input

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


// Section: Guess Submission & Results

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
    const correctName = decodeDishName(currentData.nameCodes);
    const isCorrect = normalizeVN(correctName) === userGuess;

    roundFinished = true;
    const earned = isCorrect ? getCurrentRoundMaxScore() : 0;
    roundScores[currentRoundIndex] = earned;

    const totalCurrentScore = roundScores.reduce((a, b) => a + b, 0);
    saveModeScore('image', totalCurrentScore);
    saveImageDailyStatus(false, roundScores, currentRoundIndex, unlockedCluesCount, true);

    renderRoundResultScreen(currentRoundIndex, earned);
}

function renderRoundResultScreen(index, earnedScore) {
    const data = activeDailyRounds[index];
    const dishName = decodeDishName(data.nameCodes);
    const nextButtonText = index < activeDailyRounds.length - 1 ? 'VÒNG TIẾP THEO ➔' : 'XEM KẾT QUẢ TỔNG ➔';
    const scoreZeroClass = earnedScore === 0 ? 'zero' : '';

    const container = document.getElementById('image-mode-view');
    container.innerHTML = `
        <h2 class="game-mode-heading">ĐOÁN HÌNH ẢNH</h2>

        <div class="round-bar">
            <span class="round-title">Round ${data.round}</span>
            <span class="badge-difficulty">${data.difficulty}</span>
        </div>

        <div class="round-result-card">
            <img src="${data.image}" class="round-result-img" alt="Dish">
            <div class="round-result-details">
                <div class="round-result-title">${dishName}</div>
                <div class="round-result-origin">${data.originClue}</div>
                <div class="score-badge-box">
                    <div class="score-badge-header">ĐIỂM</div>
                    <div class="score-badge-value ${scoreZeroClass}">${earnedScore}</div>
                </div>
            </div>
        </div>

        <button class="btn-guess" onclick="nextImageRound()">${nextButtonText}</button>
    `;
}

function nextImageRound() {
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

function renderFinalScoreScreen(scoresArray) {
    const totalSum = scoresArray.reduce((a, b) => a + b, 0);
    const container = document.getElementById('image-mode-view');

    let roundsHtml = '';
    activeDailyRounds.forEach((round, idx) => {
        const dishName = decodeDishName(round.nameCodes);
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