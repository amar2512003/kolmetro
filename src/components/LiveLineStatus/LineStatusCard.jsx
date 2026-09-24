import { useTranslation } from '../../context/LanguageContext.jsx';
import { metroData } from '../../data/lines/index.js';
import { lineTimetables } from '../../data/lineTimetables.js';
import { to12Hour } from '../../lib/scheduleStatus.js';

// Maps a computeLineStatus() result to a translated label + Tailwind
// color classes. Kept local to this component since it's purely
// presentational (badge wording/color), not routing/schedule logic.
function useStatusBadge(result) {
  const { t } = useTranslation();

  if (!result) {
    return { label: t('unknownLabel'), cls: 'bg-gray-600/30 text-gray-300 border-gray-500/40' };
  }

  switch (result.status) {
    case 'closed':
      return {
        label: `${t('closedTodayLabel')} (${result.dayName})`,
        cls: 'bg-red-500/10 text-red-300 border-red-500/30',
      };
    case 'before-first':
      return {
        label: `${t('notStartedYetShort')} ${to12Hour(result.entry.first)}`,
        cls: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
      };
    case 'after-last':
      return {
        label: `${t('serviceEndedShort')} ${to12Hour(result.entry.last)}${
          result.entry.lastNote ? ' · ' + result.entry.lastNote : ''
        }`,
        cls: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
      };
    case 'available':
      return {
        label: `${t('metroAvailableShort')} ${to12Hour(result.entry.last)}`,
        cls: 'bg-green-500/10 text-green-300 border-green-500/30',
      };
    default:
      return { label: t('statusUnavailable'), cls: 'bg-gray-600/30 text-gray-300 border-gray-500/40' };
  }
}

export function LineStatusCard({ lineKey, result }) {
  const { tn } = useTranslation();
  const meta = metroData[lineKey];
  const badge = useStatusBadge(result);

  return (
    <div className={`rounded-lg border p-3 ${badge.cls}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: meta.color }} />
        <span className="text-sm font-semibold text-white">{tn(lineTimetables[lineKey].name)}</span>
      </div>
      <div className="text-xs leading-snug">{badge.label}</div>
    </div>
  );
}
