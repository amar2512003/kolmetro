import { createPortal } from 'react-dom';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { ServiceAlerts } from './ServiceAlerts.jsx';
import { JourneySteps } from './JourneySteps.jsx';
import { FareCard } from './FareCard.jsx';
import { GateInfo } from './GateInfo.jsx';
import { NearbyLandmarks } from './NearbyLandmarks.jsx';

// Large button pinned to the top-left of the viewport (mirrors the clock's
// fixed top-right placement). Rendered via a portal to document.body so it
// always mounts outside any transformed ancestor (e.g. Leaflet's map panes,
// or a Framer Motion wrapper), which would otherwise turn `fixed` into
// "fixed relative to that ancestor" instead of the real viewport.
function SearchAgainButton({ onReset }) {
  const { t } = useTranslation();

  if (!onReset) return null;

  return createPortal(
    <button
      type="button"
      onClick={onReset}
      className="fixed top-3 left-3 z-50 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-semibold text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl shadow-lg shadow-purple-950/60 border border-purple-400/30 transition-colors"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      {t('newSearch')}
    </button>,
    document.body
  );
}

// route: undefined = nothing searched yet, null = searched but no path found,
// array = a valid station-id path.
// onReset: optional — when provided, shows the fixed "Search Again" button
// that lets the wizard flow start over from step 1.
export function RouteDetails({ route, stationMap, onReset }) {
  const { t } = useTranslation();

  if (route === undefined) {
    return (
      <>
        <SearchAgainButton onReset={onReset} />
        <div className="mt-2 text-center p-2">
          <p className="text-zinc-400 text-lg">{t('selectJourney')}</p>
        </div>
      </>
    );
  }

  if (route === null || route.length < 2) {
    return (
      <>
        <SearchAgainButton onReset={onReset} />
        <div className="mt-2 text-center p-2">
          <p className="text-red-400 font-semibold">{t('noRouteFound')}</p>
        </div>
      </>
    );
  }

  const startStation = stationMap.get(route[0]);
  const endStation = stationMap.get(route[route.length - 1]);

  return (
    <>
      <SearchAgainButton onReset={onReset} />
      <div className="mt-2 text-center p-2">
        <h3 className="text-xl font-semibold text-white mb-3">{t('yourJourneySimplified')}</h3>
        <ServiceAlerts route={route} />
        <JourneySteps route={route} stationMap={stationMap} />
        <FareCard route={route} sourceName={startStation.name} destinationName={endStation.name} />
        <GateInfo startStation={startStation} endStation={endStation} />
        <NearbyLandmarks stationId={endStation?.id} />
      </div>
    </>
  );
}