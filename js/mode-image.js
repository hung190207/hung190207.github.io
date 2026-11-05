/* ==========================================================================
   FILE: js/mode-image.js - Chế độ Đoán Hình Ảnh (Món Ăn Việt Nam)
   ========================================================================== */

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

/**
 * Tạo chuỗi gợi ý tên món ăn giống hình mẫu (Main title: S______ ____ _____)
 * - Nếu tổng số chữ cái (không tính khoảng trắng) < 7: chỉ hiện đúng 1 ký tự đầu tiên.
 * - Nếu tổng số chữ cái >= 7: hiện vài ký tự (chữ cái đầu của các từ).
 */
function buildMaskedTitleClue(fullName) {
    const totalLetters = fullName.replace(/\s+/g, '').length;
    const words = fullName.trim().split(/\s+/);

    if (totalLetters < 7) {
        // Dưới 7 chữ cái -> Chỉ hiện đúng 1 ký tự đầu tiên của toàn bộ tên món
        return words
            .map((word, wordIdx) => {
                return Array.from(word)
                    .map((ch, charIdx) => (wordIdx === 0 && charIdx === 0 ? ch : '_'))
                    .join('');
            })
            .join(' ');
    } else {
        // Từ 7 chữ cái trở lên -> Hiện vài ký tự (chữ cái đầu mỗi từ)
        return words
            .map(word => {
                return Array.from(word)
                    .map((ch, charIdx) => (charIdx === 0 ? ch : '_'))
                    .join('');
            })
            .join(' ');
    }
}

// Dữ liệu 4 món ăn: Phở, Cơm tấm, Bánh mì, Bún thịt nướng
const IMAGE_ROUNDS = [
    {
        round: 1,
        difficulty: 'Dễ',
        // "Phở" (3 chữ cái < 7 -> Chỉ lộ 1 ký tự: P__)
        acceptedEncoded: ['cGjhu58=', 'cGjhu58gYsOz', 'cGjhu58gZ8Og'],
        displayNameEncoded: 'UGjhu58=',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pho-Beef-Noodles-2008.jpg/1024px-Pho-Beef-Noodles-2008.jpg',
        featureClue: 'Món ăn có nước dùng trong và ngọt thanh ninh từ xương, thơm mùi quế, hồi, thảo quả, ăn cùng sợi bánh trắng mềm và hành lá.',
        originClue: 'Ra đời tại miền Bắc Việt Nam (cội nguồn từ Nam Định và Hà Nội) vào đầu thế kỷ 20.'
    },
    {
        round: 2,
        difficulty: 'Dễ',
        // "Cơm tấm" (6 chữ cái < 7 -> Chỉ lộ 1 ký tự: C__ ___)
        acceptedEncoded: ['Y8ahbSB04bqlbQ==', 'Y8ahbSB04bqlbSBzxrDhu51uIGLDrCBjaOG6ow=='],
        displayNameEncoded: 'Q8ahbSB04bqlbQ==',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg/1024px-C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg',
        featureClue: 'Nấu từ những hạt gạo bị vỡ khi xay xát, thường ăn kèm sườn nướng, bì, chả trứng, mỡ hành và nước mắm chua ngọt.',
        originClue: 'Xuất xứ từ vùng đồng bằng sông Cửu Long (miền Tây Nam Bộ) và trở thành món ăn biểu tượng của Sài Gòn – TP.HCM.'
    },
    {
        round: 3,
        difficulty: 'Dễ',
        // "Bánh mì" (6 chữ cái < 7 -> Chỉ lộ 1 ký tự: B___ __)
        acceptedEncoded: ['YsOhbmggbcOs', 'YsOhbmggbcOsIHZp4buHdCBuYW0=', 'YsOhbmggbcOsIHRo4buLdA=='],
        displayNameEncoded: 'QsOhbmggbcOs',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng%2C_2021.jpg/1024px-B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng%2C_2021.jpg',
        featureClue: 'Vỏ nướng giòn rụm bên ngoài, ruột mềm xốp bên trong, phết pate, bơ, kẹp thịt, chả lụa, đồ chua và ngò rí.',
        originClue: 'Hình thành tại Sài Gòn từ sự giao thoa ẩm thực Việt – Pháp, biến tấu từ ổ bánh baguette thành món ăn đường phố thuần Việt.'
    },
    {
        round: 4,
        difficulty: 'Trung bình',
        // "Bún thịt nướng" (12 chữ cái > 7 -> Lộ vài ký tự: B__ t___ n____)
        acceptedEncoded: ['YsO6biB0aOG7i3Qgbsaw4bubbmc='],
        displayNameEncoded: 'QsO6biB0aOG7i3Qgbsaw4bubbmc=',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bun_thit_nuong_1.jpg/1024px-Bun_thit_nuong_1.jpg',
        featureClue: 'Món bún trộn khô (không chan nước lèo nóng), gồm thịt heo ướp sả nướng vàng thơm, đồ chua, đậu phộng rang và nước mắm chua ngọt.',
        originClue: 'Có nguồn gốc từ miền Trung và miền Nam Việt Nam, đặc biệt phổ biến tại Sài Gòn và các tỉnh Nam Bộ.'
    }
];

let currentRoundIndex = 0;
let totalImageSessionScore = 0;
let unlockedCluesCount = 0; // 0: chưa mở, 1: đã mở Gợi ý 1, 2: đã mở Gợi ý 2, 3: đã mở Gợi ý tên
let roundFinished = false;

function initImageMode() {
    currentRoundIndex = 0;
    totalImageSessionScore = 0;
    loadImageRound(currentRoundIndex);
}

function getCurrentRoundMaxScore() {
    let penalty = 0;
    if (unlockedCluesCount >= 1) penalty += 300;
    if (unlockedCluesCount >= 2) penalty += 300;
    if (unlockedCluesCount >= 3) penalty += 400;
    return Math.max(500, 1500 - penalty);
}

function loadImageRound(index) {
    const data = IMAGE_ROUNDS[index];
    unlockedCluesCount = 0;
    roundFinished = false;

    document.getElementById('img-round-number').textContent = `Round ${data.round}`;
    document.getElementById('img-difficulty-badge').textContent = data.difficulty;
    document.getElementById('img-potential-score').textContent = `+${getCurrentRoundMaxScore()} điểm`;

    const imgEl = document.getElementById('dish-image');
    imgEl.src = data.image;

    const inputEl = document.getElementById('guess-input');
    inputEl.value = '';
    inputEl.disabled = false;
    inputEl.focus();

    document.getElementById('guess-submit-btn').style.display = 'inline-block';
    document.getElementById('next-round-btn').style.display = 'none';
    document.getElementById('round-feedback').textContent = '';
    document.getElementById('round-feedback').className = 'round-feedback';

    updateClueButtonsAndLines();
}

function updateClueButtonsAndLines() {
    const data = IMAGE_ROUNDS[currentRoundIndex];
    const btnClue1 = document.getElementById('btn-clue-1');
    const btnClue2 = document.getElementById('btn-clue-2');
    const btnClue3 = document.getElementById('btn-clue-3');

    const line1 = document.getElementById('clue-line-1');
    const line2 = document.getElementById('clue-line-2');
    const line3 = document.getElementById('clue-line-3');

    // Nút 1: Đặc điểm món ăn
    btnClue1.disabled = false;
    if (unlockedCluesCount >= 1) {
        btnClue1.classList.add('unlocked');
        btnClue1.innerHTML = '<i class="fa-solid fa-lock-open"></i> ĐÃ MỞ GỢI Ý 1';
        line1.style.display = 'block';
        line1.innerHTML = `<span class="clue-label">Đặc điểm:</span> ${data.featureClue}`;
    } else {
        btnClue1.classList.remove('unlocked');
        btnClue1.innerHTML = '<i class="fa-solid fa-unlock"></i> MỞ GỢI Ý 1 (-300đ)';
        line1.style.display = 'none';
    }

    // Nút 2: Nơi tạo ra món ăn
    btnClue2.disabled = unlockedCluesCount < 1;
    if (unlockedCluesCount >= 2) {
        btnClue2.classList.add('unlocked');
        btnClue2.innerHTML = '<i class="fa-solid fa-lock-open"></i> ĐÃ MỞ GỢI Ý 2';
        line2.style.display = 'block';
        line2.innerHTML = `<span class="clue-label">Nơi xuất xứ:</span> ${data.originClue}`;
    } else {
        btnClue2.classList.remove('unlocked');
        btnClue2.innerHTML = '<i class="fa-solid fa-lock"></i> MỞ GỢI Ý 2 (-300đ)';
        line2.style.display = 'none';
    }

    // Nút 3: Gợi ý tên món ăn (ẩn bằng dấu gạch dưới giống hình mẫu)
    btnClue3.disabled = unlockedCluesCount < 2;
    if (unlockedCluesCount >= 3) {
        const decodedName = decodeStr(data.displayNameEncoded);
        const maskedTitle = buildMaskedTitleClue(decodedName);
        const letterCount = decodedName.replace(/\s+/g, '').length;

        btnClue3.classList.add('unlocked');
        btnClue3.innerHTML = '<i class="fa-solid fa-lock-open"></i> ĐÃ MỞ GỢI Ý TÊN';
        line3.style.display = 'block';
        line3.innerHTML = `<span class="clue-label">Tên món ăn (${letterCount} chữ cái):</span> <span class="title-mask">${maskedTitle}</span>`;
    } else {
        btnClue3.classList.remove('unlocked');
        btnClue3.innerHTML = '<i class="fa-solid fa-lock"></i> MỞ GỢI Ý TÊN (-400đ)';
        line3.style.display = 'none';
    }

    document.getElementById('img-potential-score').textContent = `+${getCurrentRoundMaxScore()} điểm`;
}

function handleClueButtonClick(clueLevel) {
    if (roundFinished) return;
    playClickSound();

    if (clueLevel === 1 && unlockedCluesCount < 1) {
        unlockedCluesCount = 1;
    } else if (clueLevel === 2 && unlockedCluesCount === 1) {
        unlockedCluesCount = 2;
    } else if (clueLevel === 3 && unlockedCluesCount === 2) {
        unlockedCluesCount = 3;
    }

    updateClueButtonsAndLines();
}

function submitImageGuess() {
    if (roundFinished) return;
    playClickSound();

    const inputEl = document.getElementById('guess-input');
    const userGuess = normalizeVN(inputEl.value);
    const feedbackEl = document.getElementById('round-feedback');

    if (!userGuess) {
        feedbackEl.textContent = 'Vui lòng nhập tên món ăn trước khi đoán!';
        feedbackEl.className = 'round-feedback warning';
        return;
    }

    const currentData = IMAGE_ROUNDS[currentRoundIndex];
    const isCorrect = currentData.acceptedEncoded.some(enc => {
        const decodedAns = decodeStr(enc);
        return normalizeVN(decodedAns) === userGuess;
    });

    if (isCorrect) {
        roundFinished = true;
        const earned = getCurrentRoundMaxScore();
        totalImageSessionScore += earned;

        saveModeScore('image', totalImageSessionScore);

        const dishName = decodeStr(currentData.displayNameEncoded);
        feedbackEl.innerHTML = `Chính xác! Đó là món <strong>${dishName}</strong> (+${earned.toLocaleString('en-US')} điểm)`;
        feedbackEl.className = 'round-feedback success';

        inputEl.disabled = true;
        document.getElementById('guess-submit-btn').style.display = 'none';

        const nextBtn = document.getElementById('next-round-btn');
        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = currentRoundIndex < IMAGE_ROUNDS.length - 1 ? 'CÂU TIẾP THEO ➔' : 'HOÀN THÀNH';
    } else {
        if (unlockedCluesCount < 3) {
            unlockedCluesCount++;
            updateClueButtonsAndLines();
            feedbackEl.textContent = 'Chưa chính xác! Hệ thống đã mở thêm gợi ý tiếp theo cho bạn.';
        } else {
            feedbackEl.textContent = 'Chưa chính xác! Hãy nhìn kỹ gợi ý tên món ăn bên trên nhé.';
        }
        feedbackEl.className = 'round-feedback error';
    }
}

function nextImageRound() {
    playClickSound();
    if (currentRoundIndex < IMAGE_ROUNDS.length - 1) {
        currentRoundIndex++;
        loadImageRound(currentRoundIndex);
    } else {
        alert(`Chúc mừng bạn đã hoàn thành chế độ Đoán Hình Ảnh!\nTổng điểm đạt được: ${totalImageSessionScore.toLocaleString('en-US')} điểm.`);
        backToMainMenu();
    }
}