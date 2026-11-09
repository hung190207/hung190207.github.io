# Vietnamguesser

A daily web-based guessing game inspired by LoLdle and GeoGuessr, designed to challenge players' knowledge of Vietnamese culture, history, cuisine, music, and geography through interactive gameplay.

**Live Website:** https://vietnamguesser.hung192.dev

## Overview

Vietnamguesser is an interactive browser game that offers four distinct guessing modes, each focusing on a different aspect of Vietnam's cultural and historical identity.

New challenges are available daily, with all game modes synchronized to Vietnam Standard Time (UTC+7).

The application supports both Vietnamese and English, features customizable light and dark themes, and provides a responsive experience across desktop and mobile devices.

## Game Modes

### 1. Image Mode

Identify traditional Vietnamese dishes and regional specialties through images.

- Image-based food recognition challenges.
- Progressive hints covering dish characteristics and regional origins.
- Letter-mask hints to assist with identifying dish names.

### 2. Sound Mode

Recognize popular Vietnamese songs through short audio excerpts.

- Integrated YouTube player for music playback.
- Approximately 30-second excerpts featuring recognizable song segments.
- Unlockable video hints for additional assistance.

### 3. History Mode

A LoLdle-inspired guessing mode focused on notable figures in Vietnamese history.

Players submit guesses and receive comparative feedback based on historical attributes.

**Comparison categories:**
- Historical role
- Associated events
- Geographic region
- Historical period

Additional mechanics include color-coded attribute comparisons, chronological indicators, and progressive hints revealing historical quotes and associated events.

### 4. Map Mode

Explore Vietnamese landmarks and geographical locations through an interactive map-based guessing experience.

- Integration with Google Street View and Leaflet.
- Interactive map centered on Vietnam.
- Location-based guessing mechanics.
- Distance calculation between the player's guess and the correct location, measured in kilometers.

## Project Structure

```text
vietnamguesser/
├── css/
│   ├── mode-history.css
│   ├── mode-image.css
│   ├── mode-map.css
│   └── mode-sound.css
├── js/
│   ├── game-data/
│   │   ├── data-history.js
│   │   ├── data-image.js
│   │   ├── data-map.js
│   │   └── data-sound.js
│   ├── game-mode/
│   │   ├── mode-history.js
│   │   ├── mode-image.js
│   │   ├── mode-map.js
│   │   └── mode-sound.js
│   ├── core.js
│   └── security.js
├── img/
├── index.html
├── style.css
├── ads.txt
└── README.md
```

### Directory Overview

- **`css/`** — Mode-specific stylesheets and visual components.
- **`js/game-data/`** — Game datasets and challenge definitions.
- **`js/game-mode/`** — Individual game mode implementations.
- **`js/core.js`** — Core application functionality and shared logic.
- **`js/security.js`** — Security-related application logic.
- **`img/`** — Image assets used throughout the application.
- **`index.html`** — Main application entry point.
- **`style.css`** — Global styling, layouts, and theme definitions.
- **`ads.txt`** — Advertising authorization configuration.

## Acknowledgments

Vietnamguesser draws inspiration from the guessing mechanics of LoLdle and GeoGuessr, adapting these concepts to create an experience centered on Vietnamese culture, history, and geography.

---

**Vietnamguesser** — Discover Vietnam, one guess at a time.