import { useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { StationSearchInput } from '../StationSearchInput/StationSearchInput.jsx';
import { TypewriterText } from '../shared/TypewriterText.jsx';
import { StepProgress } from './StepProgress.jsx';
import { stationGeo } from '../../data/stationGeo.js';

export function NearestStationStep({ allStations, onSelectStation, geo, nearestResult }) {
  const { t } = useTranslation();
  const { status, errorType, locate } = geo;

  const [titleDone, setTitleDone] = useState(false);
  const reveal = (delayMs) => ({
    opacity: 0,
    animation: titleDone ? `fadeInUp 0.5s ease ${delayMs}ms forwards` : 'none',
  });

  let geoMessage = null;
  if (status === 'locating') {
    geoMessage = t('locating');
  } else if (status === 'error') {
    geoMessage = errorType === 'not-supported' ? t('geoNotSupported') : t('couldNotGetLocation');
  }

  return (
    <div className="w-full max-w-xl flex flex-col items-center text-center px-4 py-10">
      <StepProgress step={1} />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight min-h-[1.2em]">
        <TypewriterText text={t('nearestStationTitle')} onDone={() => setTitleDone(true)} />
      </h1>

      <p className="text-zinc-400 mb-8" style={reveal(0)}>
        {t('nearestStationSubtitle')}
      </p>

      <div className="relative z-30 w-full" style={reveal(120)}>
        <StationSearchInput
          variant="start"
          labelKey="startingFrom"
          allStations={allStations}
          onSelect={onSelectStation}
        />
      </div>

      <div className="flex items-center gap-3 w-full my-6" style={reveal(220)}>
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="text-xs text-zinc-500 uppercase tracking-widest">{t('or')}</span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <button
        type="button"
        onClick={locate}
        disabled={status === 'locating'}
        style={reveal(320)}
        className="flex items-center gap-2 justify-center w-full py-3.5 px-4 rounded-xl border border-purple-700/50 bg-purple-500/10 hover:bg-purple-500/20 disabled:opacity-50 text-purple-200 font-semibold transition-colors"
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        {t('locateMeButton')}
      </button>

      {geoMessage && <p className="text-sm text-cyan-400 mt-3">{geoMessage}</p>}

      {status === 'success' && nearestResult?.station && (
        <div
          className="w-full mt-4 p-4 rounded-xl border border-purple-700/40 bg-purple-500/5 text-left"
          style={{ animation: 'fadeInUp 0.4s ease forwards' }}
        >
          <p className="text-xs text-zinc-500 uppercase tracking-wide">{t('nearestStationLabel')}</p>
          <p className="text-lg font-semibold text-white mt-0.5">{nearestResult.station.name}</p>
          <p className="text-xs text-zinc-500 mb-3">
            {t('approxAway', { d: nearestResult.distanceKm.toFixed(1) })}
          </p>
          {geo.position &&
            (() => {
              const destGeo = stationGeo[nearestResult.station.id];
              if (!destGeo) return null;
              const origin = `${geo.position.latitude},${geo.position.longitude}`;
              const destination = `${destGeo[0]},${destGeo[1]}`;
              const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`;
              return (
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-purple-700/50 bg-transparent hover:bg-purple-500/10 text-purple-200 font-semibold transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  {t('getDirections')}
                </a>
              );
            })()}
          <button
            type="button"
            onClick={() => onSelectStation(nearestResult.station.id)}
            className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors"
          >
            {t('useThisStation')}
          </button>
        </div>
      )}
    </div>
  );
}