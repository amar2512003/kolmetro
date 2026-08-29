import { useTranslation } from '../../context/LanguageContext.jsx';
import { lineTimetables } from '../../data/lineTimetables.js';
import { splitRouteIntoLineSegments } from '../../lib/routing.js';
import { computeLineStatus, to12Hour } from '../../lib/scheduleStatus.js';

export function ServiceAlerts({ route }) {
  const { t } = useTranslation();
  const now = new Date();
  const segments = splitRouteIntoLineSegments(route);

  const alerts = segments
    .map((seg) => {
      if (!seg.line || !lineTimetables[seg.line.key]) return null;
      const segStartId = seg.stations[0];
      const segEndId = seg.stations[seg.stations.length - 1];
      const result = computeLineStatus(seg.line.key, now, segStartId, segEndId);
      if (!result) return null;
      return { key: `${seg.line.key}-${segStartId}-${segEndId}`, result };
    })
    .filter(Boolean);

  if (alerts.length === 0) return null;

  return (
    <div className="space-y-2 mb-2">
      {alerts.map(({ key, result }) => {
        if (result.status === 'closed') {
          return (
            <div key={key} className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg text-red-300">
              <strong>{t('serviceAlert')}</strong> {t('serviceEndedLabel')} {result.lineName}{' '}
              {t('doesNotRunOn')} {result.dayName}
              {t('onDaySuffix')}
            </div>
          );
        }
        if (result.status === 'before-first') {
          return (
            <div key={key} className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-yellow-300">
              <strong>{t('timingAlert')}</strong> {result.lineName} {t('hasntStarted')}{' '}
              {to12Hour(result.entry.first)}.
            </div>
          );
        }
        if (result.status === 'after-last') {
          return (
            <div key={key} className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-yellow-300">
              <strong>{t('timingAlert')}</strong> {t('serviceEndedLabel')} {result.lineName}{' '}
              {t('forThisStretchEnded')} {to12Hour(result.entry.last)}
              {result.entry.lastNote ? ` (${result.entry.lastNote})` : ''}.
            </div>
          );
        }
        if (result.status === 'available') {
          return (
            <div key={key} className="bg-green-500/10 border border-green-500/30 p-3 rounded-lg text-green-300">
              <strong>{t('metroAvailableLabel')}</strong> {result.lineName} {t('isRunningNow')}{' '}
              {to12Hour(result.entry.last)}
              {result.entry.lastNote ? `, ${result.entry.lastNote}` : ''}).
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
