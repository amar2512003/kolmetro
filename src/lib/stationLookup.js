import { metroData } from '../data/lines/index.js';

// An interchange station is operational if ANY of its instances (across
// lines) are operational. Populate stationMap with ALL stations first
// (for routing logic), preferring the operational version when a station
// id appears on more than one line.
export function buildStationMap() {
  const stationMap = new Map();
  for (const lineKey in metroData) {
    metroData[lineKey].stations.forEach((station) => {
      const existing = stationMap.get(station.id);
      if (!existing || (existing.status === 'under-construction' && station.status !== 'under-construction')) {
        stationMap.set(station.id, station);
      }
    });
  }
  return stationMap;
}

// The list used for the search bar: only operational stations, sorted by name.
export function buildOperationalStationList(stationMap) {
  return Array.from(stationMap.values())
    .filter((station) => station.status !== 'under-construction')
    .sort((a, b) => a.name.localeCompare(b.name));
}
