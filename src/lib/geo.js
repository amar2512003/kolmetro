import { stationGeo } from '../data/stationGeo.js';
import { landmarks } from '../data/landmarks.js';

export function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Finds the nearest operational station (from `stations`) to a given
// lat/lng. Used both for "Find Nearest Station" (device geolocation)
// and for resolving a landmark search to its nearest station.
export function findNearestStation(stations, lat, lng) {
  let nearest = null;
  let minDist = Infinity;
  stations.forEach((station) => {
    const geo = stationGeo[station.id];
    if (!geo) return;
    const d = haversineKm(lat, lng, geo[0], geo[1]);
    if (d < minDist) {
      minDist = d;
      nearest = station;
    }
  });
  return { station: nearest, distanceKm: minDist };
}

// Reverse of findNearestStation: given a station id, returns landmarks
// within radiusKm, nearest-first. Powers "landmarks near your
// destination" on the results screen.
export function findLandmarksNear(stationId, radiusKm = 1.5) {
  const stationLatLng = stationGeo[stationId];
  if (!stationLatLng) return [];
  const [stationLat, stationLng] = stationLatLng;

  return landmarks
    .map((landmark) => ({
      landmark,
      distanceKm: haversineKm(stationLat, stationLng, landmark.lat, landmark.lng),
    }))
    .filter((entry) => entry.distanceKm <= radiusKm)
    .sort((a, b) => a.distanceKm - b.distanceKm);
}
