// History Mode Mechanics

const CLUE_1_REQUIRED_GUESSES = 5;
const CLUE_2_REQUIRED_GUESSES = 10;

function pickDailyHistoryFigure() {
    const idx = getDailySeedHash('history_daily_figure') % HISTORY_DATABASE.length;
    return HISTORY_DATABASE[idx];
}

function getYesterdayHistoryFigure() {
    const idx = getYesterdaySeedHash('history_daily_figure') % HISTORY_DATABASE.length;
    return HISTORY_DATABASE[idx];
}

function getFigRole(fig) {
    return isEn() && fig.roleEn ? fig.roleEn : fig.role;
}

function getFigEvent(fig) {
    return isEn() && fig.eventEn ? fig.eventEn : fig.event;
}

function getFigRegion(fig) {
    return isEn() && fig.regionEn ? fig.regionEn : fig.region;
}

function getFigEra(fig) {
    return isEn() && fig.eraEn ? fig.eraEn : fig.era;
}

function getFigQuoteClue(fig) {
    return isEn() && fig.quoteClueEn ? fig.quoteClueEn : fig.quoteClue;
}

function getFigEventClue(fig) {
    return isEn() && fig.eventClueEn ? fig.eventClueEn : fig.eventClue;
}

function splitTokens(val) {
    return val
        .split(/[,–-]/)
        .map(s => normalizeVN(s))
        .filter(Boolean);
}

function compareAttribute(guessVal, targetVal) {
    if (normalizeVN(guessVal) === normalizeVN(targetVal)) {
        return 'tile-correct';
    }
    const gTokens = splitTokens(guessVal);
    const tTokens = splitTokens(targetVal);
    const hasOverlap = gTokens.some(gt => tTokens.some(tt => gt === tt || gt.includes(tt) || tt.includes(gt)));
    return hasOverlap ? 'tile-partial' : 'tile-wrong';
}


// State & Persistence

let activeHistoryTarget = null;
let guessedHistoryIds = [];
let unlockedQuoteClue = false;
let unlockedEventClue = false;
let historyCompleted = false;
let historyEarnedScore = 0;
let historyKeydownHandler = null;

const HISTORY_STORAGE_KEY = 'vietnamguesser_history_daily_status';

function getHistoryDailyStatus() {
    const today = getHanoiDateString();
    try {
        const data = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY));
        if (data && data.date === today) return data;
    } catch (e) {}
    return null;
}

function saveHistoryDailyStatus() {
    const today = getHanoiDateString();
    const data = {
        date: today,
        completed: historyCompleted,
        score: historyEarnedScore,
        guessedIds: guessedHistoryIds,
        unlockedQuoteClue: unlockedQuoteClue,
        unlockedEventClue: unlockedEventClue
    };
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(data));
}

function getHistoryPotentialScore() {
    let base = 3000;
    if (unlockedQuoteClue) base -= 750;
    if (unlockedEventClue) base -= 750;
    const wrongGuesses = guessedHistoryIds.filter(id => id !== activeHistoryTarget.id).length;
    base -= wrongGuesses * 150;
    return Math.max(500, base);
}


// UI Rendering

function initHistoryMode() {
    activeHistoryTarget = pickDailyHistoryFigure();
    const dailyStatus = getHistoryDailyStatus();

    if (dailyStatus) {
        guessedHistoryIds = dailyStatus.guessedIds || [];
        unlockedQuoteClue = Boolean(dailyStatus.unlockedQuoteClue);
        unlockedEventClue = Boolean(dailyStatus.unlockedEventClue);
        historyCompleted = Boolean(dailyStatus.completed);
        historyEarnedScore = dailyStatus.score || 0;
    } else {
        guessedHistoryIds = [];
        unlockedQuoteClue = false;
        unlockedEventClue = false;
        historyCompleted = false;
        historyEarnedScore = 0;
        saveHistoryDailyStatus();
    }

    renderHistoryScreen();
}

function renderHistoryScreen() {
    const yesterdayFig = getYesterdayHistoryFigure();
    const guessCount = guessedHistoryIds.length;
    const hasGuessedOnce = guessCount > 0;

    const canUnlockClue1 = guessCount >= CLUE_1_REQUIRED_GUESSES;
    const canUnlockClue2 = guessCount >= CLUE_2_REQUIRED_GUESSES;
    const remClue1 = Math.max(0, CLUE_1_REQUIRED_GUESSES - guessCount);
    const remClue2 = Math.max(0, CLUE_2_REQUIRED_GUESSES - guessCount);

    let clue1Label = t('hist_clue_1');
    if (unlockedQuoteClue) {
        clue1Label = t('hist_clue_1_unlocked');
    } else if (!canUnlockClue1) {
        clue1Label = `${t('hist_clue_1')} - ${t('hist_after_guesses').replace('{n}', remClue1)}`;
    }

    let clue2Label = t('hist_clue_2');
    if (unlockedEventClue) {
        clue2Label = t('hist_clue_2_unlocked');
    } else if (!canUnlockClue2) {
        clue2Label = `${t('hist_clue_2')} - ${t('hist_after_guesses').replace('{n}', remClue2)}`;
    }

    const container = document.getElementById('history-mode-view');
    container.innerHTML = `
        <h2 class="game-mode-heading">${t('hist_heading')}</h2>

        <div class="round-bar">
            <span id="history-potential-score" class="badge-score">+${historyCompleted ? historyEarnedScore : getHistoryPotentialScore()} ${t('points_suffix')}</span>
        </div>

        <div class="history-clue-panel">
            <div class="history-clue-subtitle">${t('hist_subtitle')}</div>
            <div class="history-clue-buttons">
                <button 
                    id="btn-hist-clue-quote" 
                    class="btn-clue ${unlockedQuoteClue ? 'unlocked' : ''}" 
                    onclick="unlockHistoryClue('quote')"
                    ${!canUnlockClue1 && !unlockedQuoteClue ? 'disabled' : ''}
                >
                    <i class="fa-solid ${unlockedQuoteClue ? 'fa-lock-open' : 'fa-quote-left'}"></i>
                    ${clue1Label}
                </button>
                <button 
                    id="btn-hist-clue-event" 
                    class="btn-clue ${unlockedEventClue ? 'unlocked' : ''}" 
                    onclick="unlockHistoryClue('event')"
                    ${!canUnlockClue2 && !unlockedEventClue ? 'disabled' : ''}
                >
                    <i class="fa-solid ${unlockedEventClue ? 'fa-lock-open' : 'fa-scroll'}"></i>
                    ${clue2Label}
                </button>
            </div>
            <div id="hist-clue-quote-box" class="history-clue-box" style="display: ${unlockedQuoteClue ? 'block' : 'none'};">
                <span class="clue-quote">${getFigQuoteClue(activeHistoryTarget)}</span>
            </div>
            <div id="hist-clue-event-box" class="history-clue-box" style="display: ${unlockedEventClue ? 'block' : 'none'};">
                <span style="color:var(--cyan-glow);font-weight:700;">${t('hist_event_label')}</span> ${getFigEventClue(activeHistoryTarget)}
            </div>
        </div>

        <div id="history-input-section" class="guess-controls" style="display: ${historyCompleted ? 'none' : 'flex'};">
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
            <button class="btn-guess" onclick="submitHistoryGuess()">${t('guess_btn')}</button>
        </div>

        <div id="history-round-feedback" class="round-feedback"></div>

        <div class="loldle-board-scroll" style="display: ${hasGuessedOnce ? 'block' : 'none'};">
            <div class="loldle-grid">
                <div class="loldle-header-row">
                    <div class="loldle-col-header">${t('hist_col_char')}</div>
                    <div class="loldle-col-header">${t('hist_col_role')}</div>
                    <div class="loldle-col-header">${t('hist_col_event')}</div>
                    <div class="loldle-col-header">${t('hist_col_region')}</div>
                    <div class="loldle-col-header">${t('hist_col_era')}</div>
                </div>
                <div id="loldle-rows-container" style="display:flex;flex-direction:column;gap:10px;"></div>
            </div>
        </div>

        <div class="loldle-legend-box" style="display: ${hasGuessedOnce ? 'flex' : 'none'};">
            <div class="legend-item"><span class="legend-swatch correct"></span> ${t('hist_legend_correct')}</div>
            <div class="legend-item"><span class="legend-swatch partial"></span> ${t('hist_legend_partial')}</div>
            <div class="legend-item"><span class="legend-swatch wrong"></span> ${t('hist_legend_wrong')}</div>
        </div>

        <div id="history-victory-container" style="width:100%;display:flex;justify-content:center;"></div>

        <div class="yesterday-answer-line">
            ${t('yesterday_single')} <strong>${yesterdayFig.name}</strong>
        </div>
    `;

    if (hasGuessedOnce) {
        renderGuessedHistoryRows();
    }

    if (historyCompleted) {
        renderHistoryVictoryBanner();
    } else {
        setupHistoryAutocomplete();
    }
}

function renderGuessedHistoryRows() {
    const rowsContainer = document.getElementById('loldle-rows-container');
    if (!rowsContainer) return;
    rowsContainer.innerHTML = '';

    const reversedIds = [...guessedHistoryIds].reverse();
    reversedIds.forEach(id => {
        const fig = HISTORY_DATABASE.find(item => item.id === id);
        if (!fig) return;

        const roleClass = compareAttribute(fig.role, activeHistoryTarget.role);
        const eventClass = compareAttribute(fig.event, activeHistoryTarget.event);
        const regionClass = compareAttribute(fig.region, activeHistoryTarget.region);
        const eraClass = compareAttribute(fig.era, activeHistoryTarget.era);

        let eraArrowIcon = '';
        if (activeHistoryTarget.eraOrder > fig.eraOrder) {
            eraArrowIcon = '<i class="fa-solid fa-arrow-up"></i>';
        } else if (activeHistoryTarget.eraOrder < fig.eraOrder) {
            eraArrowIcon = '<i class="fa-solid fa-arrow-down"></i>';
        }

        const row = document.createElement('div');
        row.className = 'loldle-guess-row';
        row.innerHTML = `
            <div class="loldle-tile tile-character">${fig.name}</div>
            <div class="loldle-tile ${roleClass}">${getFigRole(fig)}</div>
            <div class="loldle-tile ${eventClass}">${getFigEvent(fig)}</div>
            <div class="loldle-tile ${regionClass}">${getFigRegion(fig)}</div>
            <div class="loldle-tile ${eraClass}">
                ${eraArrowIcon ? `<div class="era-bg-arrow">${eraArrowIcon}</div>` : ''}
                <span class="era-tile-content">${getFigEra(fig)} ${eraArrowIcon}</span>
            </div>
        `;
        rowsContainer.appendChild(row);
    });
}

function unlockHistoryClue(type) {
    if (historyCompleted) return;
    const guessCount = guessedHistoryIds.length;

    if (type === 'quote' && guessCount >= CLUE_1_REQUIRED_GUESSES && !unlockedQuoteClue) {
        playClickSound();
        unlockedQuoteClue = true;
        saveHistoryDailyStatus();
        renderHistoryScreen();
    } else if (type === 'event' && guessCount >= CLUE_2_REQUIRED_GUESSES && !unlockedEventClue) {
        playClickSound();
        unlockedEventClue = true;
        saveHistoryDailyStatus();
        renderHistoryScreen();
    }
}


// Autocomplete & Guess Submission

function setupHistoryAutocomplete() {
    const inputEl = document.getElementById('history-guess-input');
    const dropdown = document.getElementById('history-autocomplete-list');
    if (!inputEl || !dropdown) return;

    function getRemainingFigures() {
        return HISTORY_DATABASE.filter(fig => !guessedHistoryIds.includes(fig.id));
    }

    function renderSuggestions(rawVal) {
        dropdown.innerHTML = '';
        const normalizedVal = normalizeVN(rawVal);

        if (!normalizedVal) {
            dropdown.classList.remove('show');
            return;
        }

        const remaining = getRemainingFigures();
        const matches = remaining.filter(fig => normalizeVN(fig.name).includes(normalizedVal));
        if (matches.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        matches.sort((a, b) => {
            const aStarts = normalizeVN(a.name).startsWith(normalizedVal) ? 0 : 1;
            const bStarts = normalizeVN(b.name).startsWith(normalizedVal) ? 0 : 1;
            return aStarts - bStarts;
        });

        matches.forEach(fig => {
            const item = document.createElement('div');
            item.innerHTML = `<i class="fa-solid fa-landmark" style="margin-right:8px; color:var(--cyan-dim);"></i> ${fig.name}`;
            item.addEventListener('mousedown', function (e) {
                e.preventDefault();
                inputEl.value = fig.name;
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
    if (historyCompleted) return;
    playClickSound();

    const inputEl = document.getElementById('history-guess-input');
    const feedbackEl = document.getElementById('history-round-feedback');
    if (!inputEl) return;

    const rawGuess = normalizeVN(inputEl.value);
    if (!rawGuess) {
        if (feedbackEl) {
            feedbackEl.textContent = t('hist_empty_warning');
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    const matchedFig = HISTORY_DATABASE.find(
        fig => normalizeVN(fig.name) === rawGuess || normalizeVN(fig.name).includes(rawGuess)
    );

    if (!matchedFig) {
        if (feedbackEl) {
            feedbackEl.textContent = t('hist_not_found_warning');
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    if (guessedHistoryIds.includes(matchedFig.id)) {
        if (feedbackEl) {
            feedbackEl.textContent = t('hist_already_guessed');
            feedbackEl.className = 'round-feedback warning';
        }
        return;
    }

    if (feedbackEl) feedbackEl.textContent = '';
    const currentPotential = getHistoryPotentialScore();
    guessedHistoryIds.push(matchedFig.id);

    if (matchedFig.id === activeHistoryTarget.id) {
        historyCompleted = true;
        historyEarnedScore = currentPotential;
        saveModeScore('history', historyEarnedScore);
        saveHistoryDailyStatus();
        if (typeof updateCountdownTimers === 'function') {
            updateCountdownTimers();
        }
        renderHistoryScreen();
    } else {
        saveHistoryDailyStatus();
        renderHistoryScreen();
    }
}

function renderHistoryVictoryBanner() {
    const box = document.getElementById('history-victory-container');
    if (!box) return;

    const descHtml = t('hist_victory_desc')
        .replace('{tries}', guessedHistoryIds.length)
        .replace('{score}', historyEarnedScore.toLocaleString('en-US'));

    box.innerHTML = `
        <div class="history-victory-banner">
            <div class="round-result-title" style="color:var(--cyan-glow);">${t('hist_victory_title')} ${activeHistoryTarget.name}</div>
            <div class="round-result-origin" style="border:none;padding:0;text-align:center;">
                ${descHtml}
            </div>
            <button class="btn-action" onclick="backToMainMenu()" style="margin-top: 6px;">
                <i class="fa-solid fa-house"></i> ${t('back_menu_btn')}
            </button>
        </div>
    `;

    if (historyKeydownHandler) {
        document.removeEventListener('keydown', historyKeydownHandler);
    }
    historyKeydownHandler = function (e) {
        if (e.key === 'Enter' && localStorage.getItem('vietnamguesser_active_mode') === 'history' && historyCompleted) {
            e.preventDefault();
            document.removeEventListener('keydown', historyKeydownHandler);
            historyKeydownHandler = null;
            backToMainMenu();
        }
    };
    document.addEventListener('keydown', historyKeydownHandler);
}