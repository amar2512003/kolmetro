import { useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { useStationSearch } from '../../hooks/useStationSearch.js';
import { SuggestionsList } from './SuggestionsList.jsx';

const ICONS = {
  start: (
    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  end: (
    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
};

const ICON_WRAPPER_STYLES = {
  start: 'bg-purple-500/20 text-purple-400',
  end: 'bg-pink-500/20 text-pink-400',
};

// variant: 'start' | 'end' — picks icon color and (via labelKey) the field label.
// onSelect(stationId) fires whenever the user picks a station or a landmark
// (landmarks resolve to their nearest operational station).
export function StationSearchInput({ variant, labelKey, allStations, onSelect }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [landmarkNote, setLandmarkNote] = useState(null);

  const { stations, landmarkMatches } = useStationSearch(query, allStations);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setOpen(true);
    setLandmarkNote(null);
  };

  const handlePickStation = (station) => {
    setQuery(station.name);
    setLandmarkNote(null);
    setOpen(false);
    onSelect(station.id);
  };

  const handlePickLandmark = (landmark, station, distanceKm) => {
    if (!station) return;
    setQuery(landmark.name);
    setLandmarkNote(`📍 ${station.name} — ${t('approxAway', { d: distanceKm.toFixed(1) })}`);
    setOpen(false);
    onSelect(station.id);
  };

  // Delay closing so a suggestion's onMouseDown can register before blur hides the list.
  const handleBlur = () => {
    window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-4 bg-indigo-950/60 p-3 rounded-lg border border-purple-800/50">
        <div className={`p-2 rounded-full ${ICON_WRAPPER_STYLES[variant]}`}>{ICONS[variant]}</div>
        <div className="w-full">
          <label className="block text-xs font-medium text-gray-400">{t(labelKey)}</label>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() => query && setOpen(true)}
            onBlur={handleBlur}
            placeholder={t('searchPlaceholder')}
            autoComplete="off"
            className="w-full bg-transparent text-white text-lg font-medium focus:outline-none"
          />
        </div>
      </div>

      {landmarkNote && <div className="text-xs text-cyan-400 mt-1 pl-1">{landmarkNote}</div>}

      {open && (
        <SuggestionsList
          stations={stations}
          landmarkMatches={landmarkMatches}
          onSelectStation={handlePickStation}
          onSelectLandmark={handlePickLandmark}
        />
      )}
    </div>
  );
}
