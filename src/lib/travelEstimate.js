import { lineTravelMatrices } from '../data/travelMatrices/index.js';
import { stationIdToCode } from '../data/stationCodes.js';
import { splitRouteIntoLineSegments } from './routing.js';

// Returns { distanceKm, minutes, calculated }. `calculated` is false if any
// segment's distance/time couldn't be looked up. A maintenance-gap segment
// (auto/bus detour, no metro line) is skipped rather than failing the whole
// calculation — same behavior as calculateFare in fareCalculator.js.
export function calculateTravel(route) {
  if (!route || route.length < 2) return { distanceKm: 0, minutes: 0, calculated: false };

  const segments = splitRouteIntoLineSegments(route);
  if (segments.length === 0) return { distanceKm: 0, minutes: 0, calculated: false };

  let totalKm = 0;
  let totalMin = 0;
  let calculated = true;

  segments.forEach((segment) => {
    // Maintenance-gap hop has no metro travel data — skip it, don't fail
    // the whole calculation (same reasoning as fareCalculator.js).
    if (!segment.line) return;

    const lineKey = segment.line.key;
    const travelMatrix = lineTravelMatrices[lineKey];
    const startCode = stationIdToCode[segment.stations[0]];
    const endCode = stationIdToCode[segment.stations[segment.stations.length - 1]];

    const cell = travelMatrix?.[startCode]?.[endCode] ?? travelMatrix?.[endCode]?.[startCode];

    if (cell) {
      totalKm += cell.km;
      totalMin += cell.min;
    } else {
      calculated = false;
    }
  });

  return { distanceKm: totalKm, minutes: totalMin, calculated };
}