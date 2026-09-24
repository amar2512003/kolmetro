# 🚇 Kolkata Metro Route Planner

An interactive web-based transit planner and companion guide for the entire **Kolkata Metro** network — covering all 6 lines, 200+ landmarks, real-time schedules, fare calculations, and Google Maps integration.

> **Live Demo →** [kolkata-metro-planner.vercel.app](https://kolkata-metro-planner.vercel.app) *(update with your deployment URL)*

---

## ✨ Features

### 🗺️ Smart Route Planning
- **BFS shortest-path algorithm** finds the optimal route across all metro lines, including interchanges
- **Landmark-based search** — type a landmark name (e.g. "Victoria Memorial", "Heritage Institute of Technology") and it auto-resolves to the nearest metro station via Haversine distance
- **GPS "Locate Me"** — uses device geolocation to find your nearest operational station with walking distance

### 🎫 Fare & Ticket System
- **Pre-computed fare matrices** for all 5 operational lines (Blue, Green, Orange, Purple, Yellow)
- **Multi-ticket support** — journeys with maintenance gaps automatically split into separate ticket cards
- **Skeuomorphic ticket cards** with QR codes linking to the official KMRL app, serial numbers, and 45-minute validity windows

### 📍 Interactive Google Map
- **Hybrid dark mode** map with color-coded line polylines
- **Dashed lines** for under-construction stretches
- **Animated route highlighting** with clickable station markers and info windows
- **Pulsing GPS marker** for user location

### ⏰ Live Schedule Status
- **Direction-aware timetables** with first/last train times
- **Day-of-week awareness** (Orange Line closed Sat/Sun, Purple Line closed Sun, etc.)
- Real-time status: `Available`, `Before First Train`, `After Last Train`, `Closed Today`

### 🏛️ 200+ Curated Landmarks
- Temples, museums, parks, malls, universities, hospitals, stadiums, ghats, heritage buildings
- All coordinates **verified against Google Maps** (40 corrections applied in Sep 2026 audit)
- **Polaroid-style photo gallery** of nearby landmarks at your destination

### 🌐 Trilingual Support
- **English**, **বাংলা (Bengali)**, **हिन्दी (Hindi)** — full i18n with placeholder interpolation

### 🎬 Cinematic Experience
- **Video splash screen** on first load
- **Typewriter animations** for journey step narrations
- **Analog station clock** (SVG) with ticking second hand
- **Glassmorphism UI** with frosted-glass cards and smooth transitions

---

## 🚊 Metro Lines Covered

| Line | Color | Route | Stations | Status |
|------|-------|-------|----------|--------|
| **Line 1** | 🔵 Blue | Dakshineswar ↔ Kavi Subhash | 26 | Fully Operational |
| **Line 2** | 🟢 Green | Howrah Maidan ↔ Salt Lake Sector V | 12 | Fully Operational |
| **Line 3** | 🟣 Purple | Joka ↔ Esplanade | 14 | Joka–Majerhat operational |
| **Line 4** | 🟡 Yellow | Noapara ↔ Barasat | 10 | Noapara–Jai Hind operational |
| **Line 5** | 🩷 Pink | Baranagar ↔ Barrackpore | 11 | Under Construction |
| **Line 6** | 🟠 Orange | Kavi Subhash ↔ Airport | 24 | Kavi Subhash–Beleghata operational |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Maps** | @react-google-maps/api (Google Maps JS API) |
| **Fonts** | Google Fonts (Roboto + Caveat) |
| **Geolocation** | HTML5 Navigator API |
| **QR Codes** | QR Server API |

---

## 📁 Project Structure

```
kolkata-metro-planner/
├── index.html                    # Entry point with Google Fonts
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite + React plugin config
├── tailwind.config.js            # Tailwind font config
├── .env                          # VITE_GOOGLE_MAPS_API_KEY
├── public/
│   ├── kolkata-metro-icon.svg    # App favicon
│   └── landmarks/                # Static landmark images
└── src/
    ├── App.jsx                   # Main 3-step wizard flow
    ├── main.jsx                  # React 18 createRoot entry
    ├── components/
    │   ├── IntroScreen/          # Video splash overlay
    │   ├── LanguageSwitcher/     # EN / BN / HI toggle
    │   ├── LiveLineStatus/       # Real-time line status grid
    │   ├── MetroMap/             # Google Map with polylines & markers
    │   ├── RouteDetails/         # Journey steps, fare cards, gates, landmarks
    │   ├── StationSearchInput/   # Autocomplete search with suggestions
    │   ├── Wizard/               # NearestStation & Destination steps
    │   └── shared/               # GlassCard, TopClock, Button, TypewriterText
    ├── context/
    │   └── LanguageContext.jsx   # i18n state & useTranslation hook
    ├── data/
    │   ├── lines/                # 6 metro line definitions (stations, gates, interchanges)
    │   ├── fareMatrices/         # Pre-computed fare lookup tables per line
    │   ├── travelMatrices/       # Distance (km) & time (min) matrices per line
    │   ├── landmarks.js          # 200+ curated Kolkata landmarks with lat/lng
    │   ├── stationGeo.js         # Station coordinates (WGS84)
    │   ├── stationCodes.js       # Station ID → 4-char fare code mapping
    │   ├── lineColors.js         # Brand hex colors per line
    │   ├── lineTimetables.js     # First/last train schedules by day & direction
    │   └── maintenanceLinks.js   # Auto/bus detour links for network gaps
    ├── hooks/
    │   ├── useGeolocation.js     # Browser GPS hook
    │   ├── useGoogleMap.js       # Map bounds & camera management
    │   ├── useLiveLineStatus.js  # 30-second timetable evaluator
    │   ├── useStationSearch.js   # Autocomplete filter (stations + landmarks)
    │   ├── useClock.js           # 1-second interval clock
    │   └── useTypewriter.js      # Character-by-character text animation
    ├── i18n/                     # Translation dictionaries (en, bn, hi)
    ├── lib/
    │   ├── routing.js            # BFS pathfinding & segment decomposition
    │   ├── fareCalculator.js     # Multi-segment fare engine
    │   ├── geo.js                # Haversine distance & landmark search
    │   ├── scheduleStatus.js     # Time/day-aware service status
    │   ├── travelEstimate.js     # Trip distance & duration aggregator
    │   ├── journeyTimeline.js    # Step generator for journey UI
    │   └── stationLookup.js      # Operational station list builder
    └── styles/
        └── globals.css           # Tailwind directives & CSS animations
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- A **Google Maps API key** with Maps JavaScript API enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/amar2512003/kolkata-metro-planner.git
cd kolkata-metro-planner

# Install dependencies
npm install

# Create environment file
echo "VITE_GOOGLE_MAPS_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 🔧 How It Works

### Route Planning Algorithm
The app models the metro network as a **graph** where:
- **Nodes** = operational metro stations
- **Edges** = adjacent stations on the same line + interchange connections + maintenance gap bridges

**Breadth-First Search (BFS)** finds the shortest path (minimum hops) between any two stations across the entire network.

### Landmark Resolution
When you search for a landmark (e.g. "Eden Gardens"), the app:
1. Fuzzy-matches against 200+ curated landmark entries
2. Uses the **Haversine formula** to calculate distance from the landmark to every operational station
3. Auto-selects the nearest station and shows walking distance

### Fare Calculation
Fares use **pre-computed 2D lookup matrices** keyed by 4-character station codes. For multi-line journeys, each line segment's fare is calculated independently and summed. Maintenance gap segments carry zero fare.

---

## 🤝 Contributing

Contributions are welcome! Here are some ways to help:

- **Add missing landmarks** — add entries to `src/data/landmarks.js` with verified Google Maps coordinates
- **Update timetables** — modify `src/data/lineTimetables.js` when KMRL updates schedules
- **Add translations** — create new language files in `src/i18n/`
- **Fix coordinates** — verify landmark locations against Google Maps and submit corrections

### Adding a Landmark

```javascript
// In src/data/landmarks.js, add:
{ name: 'Your Landmark Name', lat: 22.XXXX, lng: 88.XXXX, source: 'google_maps', verified: true },
```

> **Tip:** Always verify coordinates on [Google Maps](https://maps.google.com) before submitting. Right-click on the exact location → "What's here?" to get precise lat/lng.

---

## 📄 License

This project is open source. Built with ❤️ for Kolkata by **[Amar](https://v0-amarsinhaaa.vercel.app/)**.

---

<p align="center">
  <sub>🚇 Making Kolkata Metro accessible to everyone, one route at a time.</sub>
</p>
