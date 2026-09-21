import { useEffect } from 'react';
import { stationGeo } from '../data/stationGeo.js';

// Refits the map whenever the highlighted route or the user's location
// changes: prefers framing the full route, falls back to framing the
// user's position alongside their nearest station. `mapRef` holds the
// live google.maps.Map instance (set via <GoogleMap onLoad>).
export function useGoogleMap(mapRef, { route, userPosition, nearestStationId }) {
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !window.google) return;

    const bounds = new window.google.maps.LatLngBounds();

    if (route && route.length > 1) {
      const routeLatLngs = route.map((id) => stationGeo[id]).filter(Boolean);
      if (routeLatLngs.length > 1) {
        routeLatLngs.forEach(([lat, lng]) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds, 30);
        return;
      }
    }

    if (userPosition && nearestStationId) {
      const stationLatLng = stationGeo[nearestStationId];
      if (stationLatLng) {
        bounds.extend({ lat: userPosition.latitude, lng: userPosition.longitude });
        bounds.extend({ lat: stationLatLng[0], lng: stationLatLng[1] });
        map.fitBounds(bounds, 50);
      }
    }
  }, [route, userPosition, nearestStationId, mapRef]);
}
