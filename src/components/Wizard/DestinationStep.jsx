import { useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { StationSearchInput } from '../StationSearchInput/StationSearchInput.jsx';
import { TypewriterText } from '../shared/TypewriterText.jsx';
import { StepProgress } from './StepProgress.jsx';

export function DestinationStep({ allStations, onSelectStation, onBack }) {
  const { t } = useTranslation();

  const [titleDone, setTitleDone] = useState(false);
  const reveal = (delayMs) => ({
    opacity: 0,
    animation: titleDone ? `fadeInUp 0.5s ease ${delayMs}ms forwards` : 'none',
  });

  return (
    <div className="w-full max-w-xl flex flex-col items-center text-center px-4 py-10">
      <StepProgress step={2} />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight min-h-[1.2em]">
        <TypewriterText text={t('destinationTitle')} onDone={() => setTitleDone(true)} />
      </h1>

      <p className="text-zinc-400 mb-8" style={reveal(0)}>
        {t('destinationSubtitle')}
      </p>

      <div className="w-full" style={reveal(120)}>
        <StationSearchInput
          variant="end"
          labelKey="destination"
          allStations={allStations}
          onSelect={onSelectStation}
        />
      </div>

      <button
        type="button"
        onClick={onBack}
        style={reveal(220)}
        className="mt-6 text-sm text-zinc-500 hover:text-purple-300 transition-colors"
      >
        ← {t('backLabel')}
      </button>
    </div>
  );
}