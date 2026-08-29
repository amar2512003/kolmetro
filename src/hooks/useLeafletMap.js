import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { stationGeo } from '../data/stationGeo.js';

// Refits the map whenever the highlighted route or the user's location
// changes: prefers framing the full route, falls back to framing the
// user's position alongside their nearest station.
export function useLeafletMap({ route, userPosition, nearestStationId }) {
  const map = useMap();

  useEffect(() => {
    if (route && route.length > 1) {
      const routeLatLngs = route.map((id) => stationGeo[id]).filter(Boolean);
      if (routeLatLngs.length > 1) {
        map.fitBounds(routeLatLngs, { padding: [30, 30] });
        return;
      }
    }
    if (userPosition && nearestStationId) {
      const stationLatLng = stationGeo[nearestStationId];
      if (stationLatLng) {
        map.fitBounds([[userPosition.latitude, userPosition.longitude], stationLatLng], {
          padding: [50, 50],
        });
      }
    }
  }, [route, userPosition, nearestStationId, map]);

  return map;
}
