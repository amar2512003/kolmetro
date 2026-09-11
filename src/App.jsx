import { useMemo, useState } from 'react';
import { LanguageProvider, useTranslation } from './context/LanguageContext.jsx';
import { IntroScreen } from './components/IntroScreen/IntroScreen.jsx';
import { useIntroTimer } from './components/IntroScreen/useIntroTimer.js';
import { LanguageSwitcher } from './components/LanguageSwitcher/LanguageSwitcher.jsx';
import { TopClock } from './components/shared/TopClock.jsx';
import { LiveLineStatus } from './components/LiveLineStatus/LiveLineStatus.jsx';
import { NearestStationStep } from './components/Wizard/NearestStationStep.jsx';
import { DestinationStep } from './components/Wizard/DestinationStep.jsx';
import { MetroMap } from './components/MetroMap/MetroMap.jsx';
import { RouteDetails } from './components/RouteDetails/RouteDetails.jsx';
import { GlassCard } from './components/shared/GlassCard.jsx';
import { buildStationMap, buildOperationalStationList } from './lib/stationLookup.js';
import { findShortestRoute } from './lib/routing.js';
import { findNearestStation } from './lib/geo.js';
import { useGeolocation } from './hooks/useGeolocation.js';

// 'nearest'    -> step 1: pick/locate the starting station
// 'destination' -> step 2: pick the destination station
// 'results'    -> step 3: fare, timing, gates, map, nearby landmarks
function MainContent() {
  const { t } = useTranslation();

  // Built once — metroData never changes at runtime.
  const stationMap = useMemo(() => buildStationMap(), []);
  const allStations = useMemo(() => buildOperationalStationList(stationMap), [stationMap]);

  const [step, setStep] = useState('nearest');
  const [startId, setStartId] = useState(null);
  const [route, setRoute] = useState(undefined);

  const geo = useGeolocation();

  const nearestResult = useMemo(() => {
    if (!geo.position) return null;
    return findNearestStation(allStations, geo.position.latitude, geo.position.longitude);
  }, [geo.position, allStations]);

  const handleSelectStart = (stationId) => {
    setStartId(stationId);
    setStep('destination');
  };

  const handleSelectDestination = (stationId) => {
    setRoute(findShortestRoute(startId, stationId, stationMap));
    setStep('results');
  };

  const handleBackToStart = () => setStep('nearest');

  const handleReset = () => {
    setStartId(null);
    setRoute(undefined);
    setStep('nearest');
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-end px-4 pt-3">
        <LanguageSwitcher />
      </div>

      {step === 'nearest' && (
        <NearestStationStep
          allStations={allStations}
          onSelectStation={handleSelectStart}
          geo={geo}
          nearestResult={nearestResult}
        />
      )}

      {step === 'destination' && (
        <DestinationStep
          allStations={allStations}
          onSelectStation={handleSelectDestination}
          onBack={handleBackToStart}
        />
      )}

      {step === 'results' && (
        <div className="w-full max-w-5xl flex flex-col items-center px-4 pb-10">
          <header className="w-full text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t('appTitle')}</h1>
          </header>

          <LiveLineStatus />

          <GlassCard className="p-2 sm:p-4 w-full">
            <MetroMap route={route} userPosition={geo.position} nearestStationId={nearestResult?.station?.id} />
            <RouteDetails route={route} stationMap={stationMap} onReset={handleReset} />
          </GlassCard>
        </div>
      )}

      <footer className="w-full max-w-5xl text-center mt-8 mb-4 text-sm text-zinc-500 flex items-center justify-center gap-2">
        <span>Built by Amar</span>
        <a
          href="https://v0-amarsinhaaa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors"
          aria-label="GitHub Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block align-middle">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </footer>
    </div>
  );
}

export default function App() {
  const { introVisible, appVisible } = useIntroTimer();

  return (
    <LanguageProvider>
      <IntroScreen visible={introVisible} />
      {appVisible && (
        <>
          <TopClock />
          <MainContent />
        </>
      )}
    </LanguageProvider>
  );
}
