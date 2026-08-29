import { useTranslation } from '../../context/LanguageContext.jsx';
import { getLineForSegment, getMaintenanceLink } from '../../lib/routing.js';

export function JourneySteps({ route, stationMap }) {
  const { t } = useTranslation();

  if (!route || route.length < 2) return null;

  const startStation = stationMap.get(route[0]);
  const endStation = stationMap.get(route[route.length - 1]);
  const parts = [];

  const firstSegmentLine = getLineForSegment(route[0], route[1]);
  if (firstSegmentLine) {
    parts.push(
      <span key="start">
        {t('board')} <strong style={{ color: firstSegmentLine.color }}>{firstSegmentLine.name}</strong>{' '}
        {t('from')} <strong>{startStation.name}</strong>.
      </span>
    );
  }

  for (let i = 1; i < route.length - 1; i++) {
    const prevId = route[i - 1];
    const currentId = route[i];
    const nextId = route[i + 1];

    // Generic maintenance-gap detour (replaces the old hardcoded
    // kalighat<->taratala / shahid_khudiram<->satyajit_ray special cases).
    const link = getMaintenanceLink(currentId, nextId);
    if (link) {
      const nextLine = getLineForSegment(nextId, route[i + 2]);
      const modeLabel = link.mode === 'bus' ? t('maintenanceDetourBus') : t('maintenanceDetourAuto');

      parts.push(
        <span key={`travel-${currentId}`}>
          {t('travelTo')} <strong>{stationMap.get(currentId).name}</strong>.
        </span>
      );
      parts.push(
        <span key={`detour-${currentId}-${nextId}`} className="text-yellow-400 font-semibold">
          {t('maintenanceDetour', { mode: modeLabel })} {stationMap.get(nextId).name}
        </span>
      );
      if (nextLine) {
        parts.push(
          <span key={`board-next-${nextId}`}>
            {' '}
            {t('toBoard')} <strong style={{ color: nextLine.color }}>{nextLine.name}</strong>.
          </span>
        );
      }
      i++; // this segment consumed both currentId and nextId
      continue;
    }

    const prevSegmentLine = getLineForSegment(prevId, currentId);
    const nextSegmentLine = getLineForSegment(currentId, nextId);
    if (prevSegmentLine && nextSegmentLine && prevSegmentLine.name !== nextSegmentLine.name) {
      parts.push(
        <span key={`change-${currentId}`}>
          {t('atStation')} <strong>{stationMap.get(currentId).name}</strong>, {t('changeToThe')}{' '}
          <strong style={{ color: nextSegmentLine.color }}>{nextSegmentLine.name}</strong>.
        </span>
      );
    }
  }

  parts.push(
    <span key="end">
      {t('continueToDestination')} <strong>{endStation.name}</strong>.
    </span>
  );

  return (
    <div className="bg-gray-900/70 p-4 rounded-lg mt-2">
      <p className="text-gray-300 text-left md:text-center leading-relaxed text-base md:text-lg space-x-1">
        {parts}
      </p>
    </div>
  );
}
