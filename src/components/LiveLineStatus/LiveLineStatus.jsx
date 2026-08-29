import { useTranslation } from '../../context/LanguageContext.jsx';
import { useLiveLineStatus } from '../../hooks/useLiveLineStatus.js';
import { GlassCard } from '../shared/GlassCard.jsx';
import { LineStatusCard } from './LineStatusCard.jsx';

export function LiveLineStatus() {
  const { t, lang } = useTranslation();
  const { now, statuses } = useLiveLineStatus();

  const localeMap = { en: 'en-IN', bn: 'bn-IN', hi: 'hi-IN' };
  const locale = localeMap[lang] || 'en-IN';

  return (
    <GlassCard className="p-5 w-full max-w-5xl mb-8">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h3 className="text-lg font-semibold text-white">{t('liveLineStatus')}</h3>
        <span className="text-xs text-gray-400">
          {t('asOfLocalTime')}{' '}
          {now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })} ·{' '}
          {now.toLocaleDateString(locale, { weekday: 'long' })}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {statuses.map(({ lineKey, result }) => (
          <LineStatusCard key={lineKey} lineKey={lineKey} result={result} />
        ))}
      </div>
    </GlassCard>
  );
}
