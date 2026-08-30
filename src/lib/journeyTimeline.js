import { splitRouteIntoLineSegments, getMaintenanceLink } from './routing.js';
import { computeLineStatus } from './scheduleStatus.js';
import { lineTimetables } from '../data/lineTimetables.js';

// Builds the flat list of timeline steps for JourneySteps.jsx to render.
// Each step is one of:
//   'board'        - first leg, or re-boarding the metro after a maintenance gap
//   'change'       - interchange to another line without leaving the metro
//   'maintenance'  - a gap bridged by auto/bus (see data/maintenanceLinks.js)
//   'arrive'       - final destination
//
// A 'board'/'change' step carries `scheduleStatus` (the raw result from
// computeLineStatus, or null if that line has no timetable) so the UI can
// render a live-status badge right on the step it applies to, instead of a
// separate alerts block.
export function buildTimelineSteps(route, stationMap, now = new Date()) {
  if (!route || route.length < 2) return [];

  const segments = splitRouteIntoLineSegments(route);
  const steps = [];
  let previousWasGap = false;

  segments.forEach((segment, i) => {
    const segStartId = segment.stations[0];
    const segEndId = segment.stations[segment.stations.length - 1];
    const startName = stationMap.get(segStartId)?.name ?? segStartId;
    const endName = stationMap.get(segEndId)?.name ?? segEndId;

    if (!segment.line) {
      const link = getMaintenanceLink(segStartId, segEndId);
      steps.push({
        key: `gap-${segStartId}-${segEndId}`,
        kind: 'maintenance',
        dotColor: '#71717a',
        stationName: endName,
        mode: link?.mode ?? 'auto',
      });
      previousWasGap = true;
      return;
    }

    const lineKey = segment.line.key;
    let scheduleStatus = null;
    if (lineTimetables[lineKey]) {
      scheduleStatus = computeLineStatus(lineKey, now, segStartId, segEndId) ?? null;
    }

    steps.push({
      key: `${lineKey}-${segStartId}-${segEndId}`,
      // Re-boarding after a gap reads as "board" again, not "change" —
      // you left the metro system entirely for the auto/bus leg.
      kind: i === 0 || previousWasGap ? 'board' : 'change',
      dotColor: segment.line.color,
      lineName: segment.line.name,
      stationName: startName,
      scheduleStatus,
    });
    previousWasGap = false;
  });

  const lastRealSegment = [...segments].reverse().find((s) => s.line);
  const destStation = stationMap.get(route[route.length - 1]);
  steps.push({
    key: 'arrive',
    kind: 'arrive',
    dotColor: lastRealSegment ? lastRealSegment.line.color : '#a1a1aa',
    stationName: destStation?.name ?? '',
  });

  return steps;
}