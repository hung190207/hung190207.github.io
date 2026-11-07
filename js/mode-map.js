// Map Mode Mechanics (1 Location Per Day, Full-Bleed View)

const VIETNAM_BOUNDS = [
    [7.2, 101.2],
    [24.2, 110.8]
];
const VIETNAM_CENTER = [16.1, 106.2];
const GOOGLE_ROAD_TILES = 'https://mt1.google.com/vt/lyrs=m&hl=vi&x={x}&y={y}&z={z}';

function pickDailyMapLocation() {
    const idx = getDailySeedHash('map_daily_location') % MAP_DATABASE.length;
    return MAP_DATABASE[idx];
}

function buildSvEmbedUrl(lat, lng, heading = 0, panoId = '') {
    const panoParam = panoId ? `&panoid=${encodeURIComponent(panoId)}` : '';
    return `https://maps.google.com/maps?layer=c&cbll=${lat},${lng}${panoParam}&cbp=12,${heading},0,0,0&output=svembed`;
}

function resolveNearestPanorama(lat, lng, callback) {
    const cbName = 'svSnapCb_' + Math.floor(Math.random() * 1000000);
    const script = document.createElement('script');
    let handled = false;

    const timer = setTimeout(() => {
        if (handled) return;
        handled = true;
        cleanup();
        callback(lat, lng, '');
    }, 3500);

    function cleanup() {
        clearTimeout(timer);
        delete window[cbName];
        if (script.parentNode) script.parentNode.removeChild(script);
    }

    window[cbName] = function (data) {
        if (handled) return;
        handled = true;
        cleanup();
        try {
            if (data && data[0] && data[0][0] === 0 && data[1]) {
                const panoId = data[1][1] && data[1][1][0] ? data[1][1][0][1] : '';
                const coords =
                    data[1][5] &&
                    data[1][5][0] &&
                    data[1][5][0][1] &&
                    data[1][5][0][1][0]
                        ? data[1][5][0][1][0]
                        : null;
                const exactLat = coords && coords[2] ? coords[2] : lat;
                const exactLng = coords && coords[3] ? coords[3] : lng;
                callback(exactLat, exactLng, panoId);
                return;
            }
        } catch (e) {}
        callback(lat, lng, '');
    };

    script.onerror = function () {
        if (handled) return;
        handled = true;
        cleanup();
        callback(lat, lng, '');
    };

    script.src = `https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch?pb=!1m5!1sapiv3!5sUS!11m2!1m1!1b0!2m4!1m2!3d${lat}!4d${lng}!2d2500!3m10!2m2!1svi!2sVN!11m4!1m3!1e2!2b1!3e2!4m10!1e1!1e2!1e3!1e4!1e8!1e6!5m1!1e2!6m1!1e2&callback=${cbName}`;
    document.head.appendChild(script);
}

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function calculateMapScore(distanceKm) {
    if (distanceKm <= 0.15) return 3000;
    const raw = Math.round(3000 * Math.exp(-distanceKm / 185));
    return Math.max(0, Math.min(3000, raw));
}


// State & Daily Persistence

let activeDailyLocation = null;
let snappedPanoState = null;
let mapEarnedScore = 0;
let mapEarnedDistance = 0;
let mapUserGuess = null;
let mapRoundFinished = false;

let miniLeafletMap = null;
let resultLeafletMap = null;
let currentGuessMarker = null;
let selectedLatLng = null;
let isMinimapPinnedLarge = false;
let mapKeydownHandler = null;

const MAP_STORAGE_KEY = 'vietnamguesser_map_daily_status';

function getMapDailyStatus() {
    const today = getHanoiDateString();
    try {
        const data = JSON.parse(localStorage.getItem(MAP_STORAGE_KEY));
        if (data && data.date === today) return data;
    } catch (e) {}
    return null;
}

function saveMapDailyStatus(completed, score, distance, guessCoords) {
    const today = getHanoiDateString();
    const data = {
        date: today,
        completed: completed,
        score: score,
        distance: distance,
        guess: guessCoords
    };
    localStorage.setItem(MAP_STORAGE_KEY, JSON.stringify(data));
}

function initMapMode() {
    activeDailyLocation = pickDailyMapLocation();
    snappedPanoState = null;
    const dailyStatus = getMapDailyStatus();

    if (dailyStatus && dailyStatus.completed) {
        mapRoundFinished = true;
        mapEarnedScore = dailyStatus.score || 0;
        mapEarnedDistance = dailyStatus.distance || 0;
        mapUserGuess = dailyStatus.guess || null;
        renderMapFinalScreen();
        return;
    }

    mapRoundFinished = false;
    mapEarnedScore = 0;
    mapEarnedDistance = 0;
    mapUserGuess = null;
    saveMapDailyStatus(false, 0, 0, null);
    loadMapRoundScreen();
}


// Full-Bleed Play Screen & Mini-Map

function loadMapRoundScreen() {
    const loc = activeDailyLocation;
    mapRoundFinished = false;
    selectedLatLng = null;

    const container = document.getElementById('map-mode-view');
    container.innerHTML = `
        <div id="map-game-stage" class="map-game-stage">
            <div class="streetview-viewport">
                <div class="streetview-top-shield"></div>
                <iframe 
                    id="sv-iframe" 
                    src="about:blank" 
                    allowfullscreen
                ></iframe>
            </div>

            <div class="map-hud-compass">
                <span>NW</span>
                <span class="compass-ticks">|||||</span>
                <span class="compass-main">N</span>
                <span class="compass-ticks">|||||</span>
                <span>NE</span>
            </div>

            <div class="map-hud-left">
                <button class="hud-circle-btn" onclick="resetStreetViewToStart()" title="Quay về vị trí xuất phát">
                    <i class="fa-solid fa-flag"></i>
                </button>
                <button class="hud-circle-btn" onclick="toggleMapStageFullscreen()" title="Toàn màn hình">
                    <i class="fa-solid fa-expand"></i>
                </button>
            </div>

            <button id="mobile-open-map-btn" class="mobile-open-map-btn" onclick="toggleMobileMinimap(true)">
                <i class="fa-solid fa-map-location-dot"></i> MỞ BẢN ĐỒ ĐOÁN
            </button>

            <div id="map-minimap-overlay" class="map-minimap-overlay ${isMinimapPinnedLarge ? 'pinned-size' : ''}">
                <div class="minimap-header-bar">
                    <button class="minimap-tool-btn desktop-only" onclick="toggleMinimapPinSize()">
                        <i class="fa-solid fa-up-right-and-down-left-from-center"></i> Phóng to / Thu nhỏ
                    </button>
                    <button class="minimap-tool-btn mobile-only" onclick="toggleMobileMinimap(false)">
                        <i class="fa-solid fa-xmark"></i> Đóng bản đồ
                    </button>
                </div>

                <div class="minimap-canvas-box">
                    <div id="vietnam-minimap"></div>
                </div>

                <button id="btn-map-guess" class="btn-map-guess" onclick="submitMapGuess()" disabled>
                    CHỌN VỊ TRÍ TRÊN BẢN ĐỒ
                </button>
            </div>
        </div>
    `;

    resolveNearestPanorama(loc.lat, loc.lng, (exactLat, exactLng, panoId) => {
        snappedPanoState = { lat: exactLat, lng: exactLng, panoId: panoId };
        activeDailyLocation.lat = exactLat;
        activeDailyLocation.lng = exactLng;
        const iframe = document.getElementById('sv-iframe');
        if (iframe) {
            iframe.src = buildSvEmbedUrl(exactLat, exactLng, loc.heading || 0, panoId);
        }
    });

    initVietnamMinimap();
    bindMapEnterKey(submitMapGuess);
}

function initVietnamMinimap() {
    if (miniLeafletMap) {
        try {
            miniLeafletMap.remove();
        } catch (e) {}
        miniLeafletMap = null;
    }

    currentGuessMarker = null;

    miniLeafletMap = L.map('vietnam-minimap', {
        center: VIETNAM_CENTER,
        zoom: 5,
        minZoom: 5,
        maxZoom: 18,
        maxBounds: VIETNAM_BOUNDS,
        maxBoundsViscosity: 1.0,
        attributionControl: false
    });

    L.tileLayer(GOOGLE_ROAD_TILES, {
        maxZoom: 20
    }).addTo(miniLeafletMap);

    miniLeafletMap.on('click', function (e) {
        if (mapRoundFinished) return;
        playClickSound();
        selectedLatLng = { lat: e.latlng.lat, lng: e.latlng.lng };

        if (currentGuessMarker) {
            currentGuessMarker.setLatLng(e.latlng);
        } else {
            currentGuessMarker = L.marker(e.latlng).addTo(miniLeafletMap);
        }

        const guessBtn = document.getElementById('btn-map-guess');
        if (guessBtn) {
            guessBtn.disabled = false;
            guessBtn.textContent = 'ĐOÁN VỊ TRÍ NÀY';
        }
    });

    const overlayEl = document.getElementById('map-minimap-overlay');
    if (overlayEl) {
        overlayEl.addEventListener('mouseenter', () => {
            setTimeout(() => {
                if (miniLeafletMap) miniLeafletMap.invalidateSize();
            }, 260);
        });
        overlayEl.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (miniLeafletMap) miniLeafletMap.invalidateSize();
            }, 260);
        });
    }

    setTimeout(() => {
        if (miniLeafletMap) miniLeafletMap.invalidateSize();
    }, 150);
}

function resetStreetViewToStart() {
    playClickSound();
    const loc = activeDailyLocation;
    const iframe = document.getElementById('sv-iframe');
    if (iframe && loc) {
        const lat = snappedPanoState ? snappedPanoState.lat : loc.lat;
        const lng = snappedPanoState ? snappedPanoState.lng : loc.lng;
        const panoId = snappedPanoState ? snappedPanoState.panoId : '';
        iframe.src = buildSvEmbedUrl(lat, lng, loc.heading || 0, panoId);
    }
}

function toggleMapStageFullscreen() {
    playClickSound();
    const stage = document.getElementById('map-game-stage');
    if (!stage) return;
    if (!document.fullscreenElement) {
        if (stage.requestFullscreen) stage.requestFullscreen().catch(() => {});
    } else {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
    setTimeout(() => {
        if (miniLeafletMap) miniLeafletMap.invalidateSize();
    }, 300);
}

function toggleMinimapPinSize() {
    playClickSound();
    isMinimapPinnedLarge = !isMinimapPinnedLarge;
    const overlay = document.getElementById('map-minimap-overlay');
    if (overlay) {
        overlay.classList.toggle('pinned-size', isMinimapPinnedLarge);
    }
    setTimeout(() => {
        if (miniLeafletMap) miniLeafletMap.invalidateSize();
    }, 260);
}

function toggleMobileMinimap(openState) {
    playClickSound();
    const overlay = document.getElementById('map-minimap-overlay');
    const openBtn = document.getElementById('mobile-open-map-btn');
    if (overlay && openBtn) {
        overlay.classList.toggle('mobile-open', openState);
        openBtn.style.display = openState ? 'none' : 'inline-flex';
    }
    setTimeout(() => {
        if (miniLeafletMap) miniLeafletMap.invalidateSize();
    }, 200);
}


// Submission & Result Screen (1 Location Per Day)

function submitMapGuess() {
    if (mapRoundFinished || !selectedLatLng) return;
    playClickSound();

    if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    }

    const distKm = calculateDistanceKm(
        selectedLatLng.lat,
        selectedLatLng.lng,
        activeDailyLocation.lat,
        activeDailyLocation.lng
    );
    const earned = calculateMapScore(distKm);

    mapRoundFinished = true;
    mapEarnedDistance = Number(distKm.toFixed(1));
    mapEarnedScore = earned;
    mapUserGuess = selectedLatLng;

    saveModeScore('map', mapEarnedScore);
    saveMapDailyStatus(true, mapEarnedScore, mapEarnedDistance, mapUserGuess);

    if (typeof updateCountdownTimers === 'function') {
        updateCountdownTimers();
    }

    renderMapFinalScreen();
}

function renderMapFinalScreen() {
    const data = activeDailyLocation;
    const container = document.getElementById('map-mode-view');

    container.innerHTML = `
        <h2 class="game-mode-heading">KẾT QUẢ BẢN ĐỒ HÔM NAY</h2>

        <div class="map-result-stage">
            <div id="map-result-canvas"></div>
        </div>

        <div class="round-result-card">
            <div class="round-result-details">
                <div class="round-result-title">${data.title}</div>
                <div class="map-distance-pill">
                    <i class="fa-solid fa-route"></i> Cách mục tiêu: ${mapEarnedDistance.toLocaleString('en-US')} km
                </div>
                <div class="round-result-origin">${data.regionClue}</div>
            </div>
            <div class="score-badge-box">
                <div class="score-badge-header">ĐIỂM</div>
                <div class="score-badge-value">${mapEarnedScore}</div>
            </div>
        </div>

        <button class="btn-action" onclick="backToMainMenu()" style="margin-top: 6px;">
            <i class="fa-solid fa-house"></i> Về Menu chính
        </button>
    `;

    mountResultMap(data, mapUserGuess);
    bindMapEnterKey(backToMainMenu);
}

function mountResultMap(targetData, userGuess) {
    if (resultLeafletMap) {
        try {
            resultLeafletMap.remove();
        } catch (e) {}
        resultLeafletMap = null;
    }

    resultLeafletMap = L.map('map-result-canvas', {
        center: [targetData.lat, targetData.lng],
        zoom: 6,
        attributionControl: false
    });

    L.tileLayer(GOOGLE_ROAD_TILES, {
        maxZoom: 20
    }).addTo(resultLeafletMap);

    const targetLatLng = [targetData.lat, targetData.lng];
    L.circleMarker(targetLatLng, {
        radius: 9,
        fillColor: '#00f0ff',
        color: '#0e1117',
        weight: 3,
        fillOpacity: 1
    })
        .addTo(resultLeafletMap)
        .bindPopup(`<b>Đáp án:</b> ${targetData.title}`)
        .openPopup();

    if (userGuess) {
        const guessLatLng = [userGuess.lat, userGuess.lng];
        L.marker(guessLatLng)
            .addTo(resultLeafletMap)
            .bindPopup('Vị trí bạn đoán');

        L.polyline([guessLatLng, targetLatLng], {
            color: '#0070f3',
            weight: 3,
            dashArray: '8, 8'
        }).addTo(resultLeafletMap);

        resultLeafletMap.fitBounds([guessLatLng, targetLatLng], {
            padding: [45, 45],
            maxZoom: 14
        });
    }

    setTimeout(() => {
        if (resultLeafletMap) resultLeafletMap.invalidateSize();
    }, 150);
}

function bindMapEnterKey(actionCallback) {
    if (mapKeydownHandler) {
        document.removeEventListener('keydown', mapKeydownHandler);
    }
    mapKeydownHandler = function (e) {
        if (e.key === 'Enter' && localStorage.getItem('vietnamguesser_active_mode') === 'map') {
            if (!mapRoundFinished && !selectedLatLng) return;
            e.preventDefault();
            actionCallback();
        }
    };
    document.addEventListener('keydown', mapKeydownHandler);
}