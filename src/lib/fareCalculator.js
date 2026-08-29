import { lineFareMatrices } from '../data/fareMatrices/index.js';
import { stationIdToCode } from '../data/stationCodes.js';
import { splitRouteIntoLineSegments } from './routing.js';

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
    // A maintenance-gap hop (e.g. the Kalighat<->Taratala auto/bus detour)
    // has no metro line and therefore no fare of its own — skip it rather
    // than failing the whole calculation, so the two priceable metro legs
    // on either side still show a fare.
    if (!segment.line) return;

    const lineKey = segment.line.key;
    const fareMatrix = lineFareMatrices[lineKey];
    const startCode = stationIdToCode[segment.stations[0]];
    const endCode = stationIdToCode[segment.stations[segment.stations.length - 1]];

    if (fareMatrix?.[startCode]?.[endCode] !== undefined) {
      total += fareMatrix[startCode][endCode];
    } else if (fareMatrix?.[endCode]?.[startCode] !== undefined) {
      total += fareMatrix[endCode][startCode];
    } else {
      calculated = false;
    }
  });

  return { fare: total, calculated };
}
