import { lineFareMatrices } from '../data/fareMatrices/index.js';
import { stationIdToCode } from '../data/stationCodes.js';
import { splitRouteIntoLineSegments } from './routing.js';

// Looks up the fare for a single same-line segment. A maintenance-gap
// segment (segment.line is null) has no fare of its own and always
// reports calculated: true so it never blocks the overall total.
// Returns { fare, calculated }.
export function calculateSegmentFare(segment) {
  if (!segment.line) return { fare: 0, calculated: true };

  const lineKey = segment.line.key;
  const fareMatrix = lineFareMatrices[lineKey];
  const startCode = stationIdToCode[segment.stations[0]];
  const endCode = stationIdToCode[segment.stations[segment.stations.length - 1]];

  if (fareMatrix?.[startCode]?.[endCode] !== undefined) {
    return { fare: fareMatrix[startCode][endCode], calculated: true };
  }
  if (fareMatrix?.[endCode]?.[startCode] !== undefined) {
    return { fare: fareMatrix[endCode][startCode], calculated: true };
  }
  return { fare: 0, calculated: false };
}

// Returns { fare, calculated }. `calculated` is false if any segment's
// fare couldn't be looked up (missing code / matrix entry), matching the
// old fareCalculated flag so the UI can hide the fare card gracefully.
export function calculateFare(route) {
  if (!route || route.length < 2) return { fare: 0, calculated: false };

  const segments = splitRouteIntoLineSegments(route);
  if (segments.length === 0) return { fare: 0, calculated: false };

  let total = 0;
  let calculated = true;

  segments.forEach((segment) => {
    const result = calculateSegmentFare(segment);
    total += result.fare;
    if (!result.calculated) calculated = false;
  });

  return { fare: total, calculated };
}