import { useMemo } from 'react';
import { landmarks } from '../data/landmarks.js';
import { findNearestStation } from '../lib/geo.js';

// Given the raw query text and the operational station list, returns
// matching stations plus matching landmarks (each landmark resolved to
// its nearest operational station).
export function useStationSearch(query, allStations) {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { stations: [], landmarkMatches: [] };

    const stations = allStations.filter((s) => s.name.toLowerCase().includes(q));

    const landmarkMatches = landmarks
      .filter((lm) => lm.name.toLowerCase().includes(q))
      .map((lm) => {
        const { station, distanceKm } = findNearestStation(allStations, lm.lat, lm.lng);
        return { landmark: lm, station, distanceKm };
      })
      .filter((match) => match.station);

    return { stations, landmarkMatches };
  }, [query, allStations]);
}
