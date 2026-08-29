import { useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { GlassCard } from '../shared/GlassCard.jsx';
import { StationSearchInput } from '../StationSearchInput/StationSearchInput.jsx';

export function RoutePlannerForm({ allStations, onFindRoute }) {
  const { t } = useTranslation();
  const [startId, setStartId] = useState(null);
  const [endId, setEndId] = useState(null);
  const [error, setError] = useState(null);

  const handleFindRoute = () => {
    if (!startId || !endId) {
      setError(t('pleaseSelectValid'));
      return;
    }
    if (startId === endId) {
      setError(t('sameStation'));
      return;
    }
    setError(null);
    onFindRoute(startId, endId);
  };

  return (
    <GlassCard className="p-6 w-full max-w-5xl mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 items-center">
        <StationSearchInput
          variant="start"
          labelKey="startingFrom"
          allStations={allStations}
          onSelect={setStartId}
        />
        <StationSearchInput
          variant="end"
          labelKey="destination"
          allStations={allStations}
          onSelect={setEndId}
        />
      </div>

      {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}

      <div className="mt-6">
        <button
          type="button"
          onClick={handleFindRoute}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3.5 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 transform hover:scale-[1.02] transition-all duration-300"
        >
          <span>{t('showRoute')}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </GlassCard>
  );
}
