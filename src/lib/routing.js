import { metroData } from '../data/lines/index.js';
import { maintenanceLinks } from '../data/maintenanceLinks.js';

// Flat lookup: stationId -> maintenanceLink entry it participates in (if any).
const maintenanceLinksByStation = new Map();
maintenanceLinks.forEach((link) => {
  link.stations.forEach((id) => maintenanceLinksByStation.set(id, link));
});

// Returns the maintenanceLink connecting a and b, if one exists.
export function getMaintenanceLink(aId, bId) {
  return maintenanceLinks.find(
    (link) => link.stations.includes(aId) && link.stations.includes(bId)
  );
}

export function getNeighbors(stationId, stationMap) {
  const neighbors = new Set();

  // Generic maintenance-gap connections (replaces the old two hardcoded
  // kalighat/satyajit_ray special cases).
  const link = maintenanceLinksByStation.get(stationId);
  if (link) {
    link.stations.forEach((id) => {
      if (id !== stationId) neighbors.add(id);
    });
  }

  for (const lineKey in metroData) {
    const line = metroData[lineKey];
    const stationIndex = line.stations.findIndex((s) => s.id === stationId);
    if (stationIndex === -1) continue;

    if (stationIndex > 0) neighbors.add(line.stations[stationIndex - 1].id);
    if (stationIndex < line.stations.length - 1) neighbors.add(line.stations[stationIndex + 1].id);

    const station = line.stations[stationIndex];
    if (station.interchange) {
      station.interchange.forEach((interchangeLineKey) => {
        const interchangeLine = metroData[interchangeLineKey];
        const interchangeIndex = interchangeLine.stations.findIndex((s) => s.id === stationId);
        if (interchangeIndex === -1) return;
        if (interchangeIndex > 0) neighbors.add(interchangeLine.stations[interchangeIndex - 1].id);
        if (interchangeIndex < interchangeLine.stations.length - 1) {
          neighbors.add(interchangeLine.stations[interchangeIndex + 1].id);
        }
      });
    }
  }

  // Only operational neighbors.
  return Array.from(neighbors).filter((id) => stationMap.get(id)?.status !== 'under-construction');
}

export function findShortestRoute(startId, endId, stationMap) {
  let queue = [[startId, [startId]]];
  const visited = new Set([startId]);
  while (queue.length > 0) {
    const [currentId, path] = queue.shift();
    if (currentId === endId) return path;
    getNeighbors(currentId, stationMap).forEach((neighborId) => {
      if (!visited.has(neighborId)) {
        visited.add(neighborId);
        queue.push([neighborId, [...path, neighborId]]);
      }
    });
  }
  return null;
}

// Which line runs the operational segment directly between two adjacent stations.
export function getLineForSegment(station1Id, station2Id) {
  for (const lineKey in metroData) {
    const line = metroData[lineKey];
    for (let i = 0; i < line.stations.length - 1; i++) {
      const a = line.stations[i];
      const b = line.stations[i + 1];
      const matches =
        (a.id === station1Id && b.id === station2Id) || (a.id === station2Id && b.id === station1Id);
      if (matches && a.status !== 'under-construction' && b.status !== 'under-construction') {
        return metroData[lineKey];
      }
    }
  }
  return null;
}

// Splits a full route into contiguous per-line segments, e.g. for
// direction-aware schedule lookups and fare calculation.
export function splitRouteIntoLineSegments(route) {
  if (!route || route.length < 2) return [];
  const segments = [];
  let current = { line: getLineForSegment(route[0], route[1]), stations: [route[0]] };
  for (let i = 1; i < route.length; i++) {
    const segLine = getLineForSegment(route[i - 1], route[i]);
    if (segLine === current.line) {
      current.stations.push(route[i]);
    } else {
      segments.push(current);
      current = { line: segLine, stations: [route[i - 1], route[i]] };
    }
  }
  segments.push(current);
  return segments;
}
