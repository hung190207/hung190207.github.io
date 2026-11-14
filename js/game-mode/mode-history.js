// History Mode Mechanics

const HISTORY_INITIAL_DB_SIZE = 16;
const HISTORY_ANSWER_LOG_KEY = 'vietnamguesser_history_answer_log';

let activeHistoryFigure = null;
let historyGuesses = [];
let historyGameOver = false;
let historyQuoteUnlocked = false;
let historyEventUnlocked = false;

const HISTORY_STORAGE_KEY = 'vietnamguesser_history_daily_status';

function getFigRole(fig) {
    if (!fig) return '';
    return isEn() && fig.roleEn ? fig.roleEn : (fig.role || '');
}

function getFigEvent(fig) {
    if (!fig) return '';
    if (isEn()) return fig.eventEn || fig.keyEventEn || fig.event || fig.keyEvent || '';
    return fig.event || fig.keyEvent || '';
}

function getFigEventClue(fig) {
    if (!fig) return '';
    if (isEn()) return fig.eventClueEn || fig.eventEn || fig.eventClue || fig.event || '';
    return fig.eventClue || fig.keyEvent || fig.event || '';
}

function getFigRegion(fig) {
    if (!fig) return '';
    return isEn() && fig.regionEn ? fig.regionEn : (fig.region || '');
}

function getFigEra(fig) {
    if (!fig) return '';
    return isEn() && fig.eraEn ? fig.eraEn : (fig.era || '');
}

function getFigQuote(fig) {
    if (!fig) return '';
    if (isEn()) return fig.quoteEn || fig.quoteClueEn || fig.quote || fig.quoteClue || '';
    return fig.quote || fig.quoteClue || '';
}

function getFigEraOrder(fig) {
    if (!fig) return 0;
    if (fig.eraIndex !== undefined) return Number(fig.eraIndex);
    if (fig.eraOrder !== undefined) return Number(fig.eraOrder);
    if (fig.year !== undefined) return Number(fig.year);
    return 0;
}

function recordDailyHistoryAnswer(dateStr, figId) {
    try {
        const log = JSON.parse(localStorage.getItem(HISTORY_ANSWER_LOG_KEY) || '{}');
        if (log[dateStr] !== figId) {
            log[dateStr] = figId;
            localStorage.setItem(HISTORY_ANSWER_LOG_KEY, JSON.stringify(log));
        }
    } catch (e) {}
}

function pickDailyHistoryFigure() {
    const todayStr = getHanoiDateString();
    const idx = getDailySeedHash('history_daily_figure') % HISTORY_DATABASE.length;
    const fig = HISTORY_DATABASE[idx];
    if (fig) {
        recordDailyHistoryAnswer(todayStr, fig.id);
    }
    return fig;
}

function getYesterdayHistoryFigure() {
    const yesterdayStr = getYesterdayHanoiDateString();
    try {
        const log = JSON.parse(localStorage.getItem(HISTORY_ANSWER_LOG_KEY) || '{}');
        if (log[yesterdayStr]) {
            const matched = HISTORY_DATABASE.find(item => item.id === log[yesterdayStr]);
            if (matched) return matched;
        }
    } catch (e) {}

    const poolSize = yesterdayStr <= '2026-11-14'
        ? Math.min(HISTORY_INITIAL_DB_SIZE, HISTORY_DATABASE.length)
        : HISTORY_DATABASE.length;
    const idx = getYesterdaySeedHash('history_daily_figure') % poolSize;
    return HISTORY_DATABASE[idx];
}

function getAllDatabaseFigureNames() {
    return Array.from(new Set(HISTORY_DATABASE.map(item => item.name)));
}

function findFigureByGuessEntry(entry) {
    if (!entry) return null;
    const targetName = typeof entry === 'string' ? entry : (entry.name || entry.id || '');
    return HISTORY_DATABASE.find(
        item => item.id === targetName || normalizeVN(item.name) === normalizeVN(targetName)
    ) || null;
}

function getHistoryDailyStatus(expectedFigId) {
    const today = getHanoiDateString();
    try {
        const data = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY));
        if (data && data.date === today && data.targetId === expectedFigId) {
            return data;
        }
    } catch (e) {}
    return null;
}

function saveHistoryDailyStatus(completed, guesses, isOver, quoteUnlocked, eventUnlocked) {
    const today = getHanoiDateString();
    const data = {
        date: today,
        targetId: activeHistoryFigure ? activeHistoryFigure.id : '',
        completed: completed,
        guesses: guesses,
        historyGameOver: isOver,
        historyQuoteUnlocked: quoteUnlocked,
        historyEventUnlocked: eventUnlocked
    };
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(data));
}

function initHistoryMode() {
    activeHistoryFigure = pickDailyHistoryFigure();
    const dailyStatus = getHistoryDailyStatus(activeHistoryFigure ? activeHistoryFigure.id : '');

    if (dailyStatus) {
        const rawGuesses = Array.isArray(dailyStatus.guesses)
            ? dailyStatus.guesses
            : (Array.isArray(dailyStatus.guessedIds) ? dailyStatus.guessedIds : []);

        historyGuesses = rawGuesses
            .map(entry => {
                const fig = findFigureByGuessEntry(entry);
                return fig ? fig.name : null;
            })
            .filter(Boolean);

        const hasGuessedTarget = historyGuesses.some(
            name => normalizeVN(name) === normalizeVN(activeHistoryFigure.name)
        );
        historyGameOver = Boolean((dailyStatus.historyGameOver || dailyStatus.completed) && hasGuessedTarget);
        historyQuoteUnlocked = Boolean(dailyStatus.historyQuoteUnlocked || dailyStatus.quoteUnlocked);
        historyEventUnlocked = Boolean(dailyStatus.historyEventUnlocked || dailyStatus.eventUnlocked);

        if (!historyGameOver && (dailyStatus.historyGameOver || dailyStatus.completed)) {
            saveModeScore('history', 0);
            saveHistoryDailyStatus(false, historyGuesses, false, historyQuoteUnlocked, historyEventUnlocked);
        }
    } else {
        historyGuesses = [];
        historyGameOver = false;
        historyQuoteUnlocked = false;
        historyEventUnlocked = false;
        saveModeScore('history', 0);
        saveHistoryDailyStatus(false, [], false, false, false);
        if (typeof updateCountdownTimers === 'function') {
            updateCountdownTimers();
        }
    }

    renderHistoryScreen();
}

function calculateHistoryScore() {
    let baseScore = 3000;
    if (historyQuoteUnlocked) baseScore -= 1000;
    if (historyEventUnlocked) baseScore -= 1000;
    return Math.max(500, baseScore);
}

function unlockHistoryClue(clueNumber) {
    if (historyGameOver) return;
    playClickSound();

    if (clueNumber === 1) historyQuoteUnlocked = true;
    if (clueNumber === 2) historyEventUnlocked = true;

    saveHistoryDailyStatus(historyGameOver, historyGuesses, historyGameOver, historyQuoteUnlocked, historyEventUnlocked);
    renderHistoryScreen();
}

function compareMultiTokenText(rawGuess, rawTarget) {
    const gNorm = normalizeVN(rawGuess || '');
    const tNorm = normalizeVN(rawTarget || '');
    if (gNorm === tNorm) return 'correct';

    const gParts = gNorm.split(',').map(s => s.trim()).filter(Boolean);
    const tParts = tNorm.split(',').map(s => s.trim()).filter(Boolean);
    const hasOverlap = gParts.some(p => tParts.includes(p));
    return hasOverlap ? 'partial' : 'wrong';
}

function compareHistoryAttributes(guessItem, targetItem) {
    const matchRole = compareMultiTokenText(guessItem.role, targetItem.role);
    const matchKeyEvent = compareMultiTokenText(
        guessItem.event || guessItem.keyEvent,
        targetItem.event || targetItem.keyEvent
    );
    const matchRegion = normalizeVN(guessItem.region || '') === normalizeVN(targetItem.region || '') ? 'correct' : 'wrong';

    const gEraOrder = getFigEraOrder(guessItem);
    const tEraOrder = getFigEraOrder(targetItem);

    let eraStatus = 'wrong';
    let eraArrow = '';
    if (gEraOrder === tEraOrder && normalizeVN(guessItem.era || '') === normalizeVN(targetItem.era || '')) {
        eraStatus = 'correct';
    } else if (Math.abs(gEraOrder - tEraOrder) === 1) {
        eraStatus = 'partial';
        eraArrow = gEraOrder < tEraOrder ? '↑' : '↓';
    } else if (gEraOrder !== tEraOrder) {
        eraArrow = gEraOrder < tEraOrder ? '↑' : '↓';
    }

    return {
        role: { text: getFigRole(guessItem), status: matchRole },
        keyEvent: { text: getFigEvent(guessItem), status: matchKeyEvent },
        region: { text: getFigRegion(guessItem), status: matchRegion },
        era: { text: getFigEra(guessItem), status: eraStatus, arrow: eraArrow }
    };
}

function renderHistoryScreen() {
    const container = document.getElementById('history-mode-view');
    if (!container || !activeHistoryFigure) return;

    const yesterdayFig = getYesterdayHistoryFigure();
    const figureNames = getAllDatabaseFigureNames();

    let gridHtml = '';
    historyGuesses.forEach(guessedName => {
        const fig = findFigureByGuessEntry(guessedName);
        if (!fig) return;
        const comp = compareHistoryAttributes(fig, activeHistoryFigure);
        gridHtml += `
            <div class="loldle-guess-row">
                <div class="loldle-tile tile-character">
                    <span class="era-tile-content">${fig.name}</span>
                </div>
                <div class="loldle-tile tile-${comp.role.status}">
                    <span class="era-tile-content">${comp.role.text}</span>
                </div>
                <div class="loldle-tile tile-${comp.keyEvent.status}">
                    <span class="era-tile-content">${comp.keyEvent.text}</span>
                </div>
                <div class="loldle-tile tile-${comp.region.status}">
                    <span class="era-tile-content">${comp.region.text}</span>
                </div>
                <div class="loldle-tile tile-${comp.era.status}">
                    ${comp.era.arrow ? `<span class="era-bg-arrow">${comp.era.arrow}</span>` : ''}
                    <span class="era-tile-content">${comp.era.text}</span>
                </div>
            </div>
        `;
    });

    let inputAreaHtml = '';
    if (!historyGameOver) {
        inputAreaHtml = `
            <div class="guess-controls" style="margin-top: 20px; margin-bottom: 10px;">
                <div class="guess-input-wrapper">
                    <div id="history-autocomplete-list" class="autocomplete-items"></div>
                    <input 
                        type="text" 
                        id="history-guess-input" 
                        class="guess-input" 
                        placeholder="${t('hist_input_placeholder')}" 
                        autocomplete="off"
                    >
                </div>
                <button id="history-submit-btn" class="btn-guess" onclick="submitHistoryGuess()">${t('guess_btn')}</button>
            </div>
            <div id="history-round-feedback" class="round-feedback"></div>
        `;
    } else {
        const finalScore = calculateHistoryScore();
        inputAreaHtml = `
            <div class="history-victory-banner">
                <h3>🎉 ${t('hist_victory_title')} ${activeHistoryFigure.name}</h3>
                <p>${t('hist_victory_desc').replace('{tries}', historyGuesses.length).replace('{score}', finalScore.toLocaleString('en-US'))}</p>
                <button class="btn-action" onclick="backToMainMenu()" style="margin-top: 10px;">
                    <i class="fa-solid fa-house"></i> ${t('back_menu_btn')}
                </button>
            </div>
        `;
    }

    container.innerHTML = `
        <h2 class="game-mode-heading">${t('hist_heading')}</h2>

        <div class="round-bar">
            <span class="badge-score">+${calculateHistoryScore()} ${t('points_suffix')}</span>
        </div>

        <div class="history-clue-panel">
            <div class="history-clue-subtitle">${t('hist_subtitle')}</div>
            <div class="history-clue-buttons">
                <button class="btn-clue ${historyQuoteUnlocked ? 'unlocked' : ''}" onclick="unlockHistoryClue(1)">
                    <i class="fa-solid ${historyQuoteUnlocked ? 'fa-lock-open' : 'fa-lock'}"></i> 
                    ${historyQuoteUnlocked ? t('hist_clue_1_unlocked') : t('hist_clue_1')}
                </button>
                <button class="btn-clue ${historyEventUnlocked ? 'unlocked' : ''}" onclick="unlockHistoryClue(2)">
                    <i class="fa-solid ${historyEventUnlocked ? 'fa-lock-open' : 'fa-lock'}"></i> 
                    ${historyEventUnlocked ? t('hist_clue_2_unlocked') : t('hist_clue_2')}
                </button>
            </div>

            ${historyQuoteUnlocked ? `<div class="history-clue-box"><span class="clue-quote">${getFigQuote(activeHistoryFigure)}</span></div>` : ''}
            ${historyEventUnlocked ? `<div class="history-clue-box"><span><strong>${t('hist_event_label')}</strong> ${getFigEventClue(activeHistoryFigure)}</span></div>` : ''}
        </div>

        <div class="loldle-board-scroll">
            <div class="loldle-grid">
                <div class="loldle-header-row">
                    <div class="loldle-col-header">${t('hist_col_char')}</div>
                    <div class="loldle-col-header">${t('hist_col_role')}</div>
                    <div class="loldle-col-header">${t('hist_col_event')}</div>
                    <div class="loldle-col-header">${t('hist_col_region')}</div>
                    <div class="loldle-col-header">${t('hist_col_era')}</div>
                </div>
                ${gridHtml}
            </div>
        </div>

        ${inputAreaHtml}

        <div class="loldle-legend-box">
            <div class="legend-item"><div class="legend-swatch correct"></div><span>${t('hist_legend_correct')}</span></div>
            <div class="legend-item"><div class="legend-swatch partial"></div><span>${t('hist_legend_partial')}</span></div>
            <div class="legend-item"><div class="legend-swatch wrong"></div><span>${t('hist_legend_wrong')}</span></div>
        </div>

        <div class="yesterday-answer-line">
            ${t('yesterday_single')} <strong>${yesterdayFig.name}</strong>
        </div>
    `;

    if (!historyGameOver) {
        setupHistoryAutocomplete(figureNames);
    }
}

function setupHistoryAutocomplete(figureNames) {
    const inputEl = document.getElementById('history-guess-input');
    const dropdown = document.getElementById('history-autocomplete-list');
    if (!inputEl || !dropdown) return;

    function renderSuggestions(rawVal) {
        dropdown.innerHTML = '';
        const normalizedVal = normalizeVN(rawVal);

        if (!normalizedVal) {
            dropdown.classList.remove('show');
            return;
        }

        const guessedSet = new Set(historyGuesses.map(name => normalizeVN(name)));
        const matches = figureNames.filter(name => {
            return normalizeVN(name).includes(normalizedVal) && !guessedSet.has(normalizeVN(name));
        });

        if (matches.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        matches.forEach(name => {
            const item = document.createElement('div');
            item.innerHTML = `<i class="fa-solid fa-landmark" style="margin-right:8px; color:var(--cyan-dim);"></i> ${name}`;
            item.addEventListener('mousedown', function (e) {
                e.preventDefault();
                inputEl.value = name;
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
            submitHistoryGuess();
        }
    });

    inputEl.addEventListener('blur', function () {
        setTimeout(() => {
            dropdown.classList.remove('show');
        }, 150);
    });

    inputEl.focus();
}

function submitHistoryGuess() {
    if (historyGameOver) return;
    playClickSound();

    const inputEl = document.getElementById('history-guess-input');
    const feedbackEl = document.getElementById('history-round-feedback');
    if (!inputEl) return;

    const rawVal = inputEl.value.trim();
    if (!rawVal) {
        if (feedbackEl) {
            feedbackEl.textContent = t('hist_empty_warning');
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    const matchedFigure = HISTORY_DATABASE.find(item => normalizeVN(item.name) === normalizeVN(rawVal));
    if (!matchedFigure) {
        if (feedbackEl) {
            feedbackEl.textContent = t('hist_not_found_warning');
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    const alreadyGuessed = historyGuesses.some(name => normalizeVN(name) === normalizeVN(matchedFigure.name));
    if (alreadyGuessed) {
        if (feedbackEl) {
            feedbackEl.textContent = t('hist_already_guessed');
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    historyGuesses.push(matchedFigure.name);

    const isCorrect = normalizeVN(matchedFigure.name) === normalizeVN(activeHistoryFigure.name);
    if (isCorrect) {
        historyGameOver = true;
        const earnedScore = calculateHistoryScore();
        saveModeScore('history', earnedScore);
    }

    saveHistoryDailyStatus(historyGameOver, historyGuesses, historyGameOver, historyQuoteUnlocked, historyEventUnlocked);
    if (typeof updateCountdownTimers === 'function') {
        updateCountdownTimers();
    }

    renderHistoryScreen();
}