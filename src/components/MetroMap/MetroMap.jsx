import { GoogleMap, useJsApiLoader, Polyline, Marker, InfoWindow } from '@react-google-maps/api';
import { useCallback, useMemo, useRef, useState } from 'react';
import { metroData } from '../../data/lines/index.js';
import { stationGeo } from '../../data/stationGeo.js';
import { googleMapDarkStyle } from '../../data/googleMapDarkStyle.js';
import { useGoogleMap } from '../../hooks/useGoogleMap.js';
import { UserLocationMarker } from './UserLocationMarker.jsx';

const KOLKATA_CENTER = { lat: 22.56, lng: 88.38 };
const DEFAULT_ZOOM = 11;

const MAP_CONTAINER_STYLE = { width: '100%', height: '100%' };

const MAP_OPTIONS = {
  styles: googleMapDarkStyle,
  disableDefaultUI: false,
  clickableIcons: false,
  backgroundColor: '#1e1b4b',
  mapTypeId: 'hybrid',
  mapTypeControl: false,
};

function toLatLng([lat, lng]) {
  return { lat, lng };
}

export function MetroMap({ route, userPosition, nearestStationId }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'kolmetro-google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef(null);
  const [activeStation, setActiveStation] = useState(null);

  useGoogleMap(mapRef, { route, userPosition, nearestStationId });

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  })();

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  })();

  const routeLatLngs = useMemo(
    () => (route ? route.map((id) => stationGeo[id]).filter(Boolean).map(toLatLng) : []),
    [route]
  );

  // Flatten every line's stations into one array of markers, de-duped by
  // station id (interchange stations appear on multiple lines but should
  // only get a single pin — take the first line's color for it).
  const stationMarkers = (() => {
    const seen = new Map();
    for (const line of Object.values(metroData)) {
      for (const station of line.stations) {
        if (seen.has(station.id)) continue;
        const geo = stationGeo[station.id];
        if (!geo) continue;
        seen.set(station.id, {
          ...station,
          lineColor: line.color,
          lineName: line.name,
          isUC: station.status === 'under-construction',
        });
      }
    }
    return Array.from(seen.values());
  })();

  if (loadError) {
    return (
      <div className="w-full rounded-lg flex items-center justify-center bg-indigo-950 text-red-300 text-sm p-4" style={{ height: 600 }}>
        Couldn't load Google Maps. Check that VITE_GOOGLE_MAPS_API_KEY is set in .env and the
        "Maps JavaScript API" is enabled for that key.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full rounded-lg flex items-center justify-center bg-indigo-950 text-gray-400 text-sm" style={{ height: 600 }}>
        Loading map…
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg overflow-hidden" style={{ height: 600 }}>
      <GoogleMap key="force-reload-1"
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={KOLKATA_CENTER}
        zoom={DEFAULT_ZOOM}
        options={MAP_OPTIONS}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* One polyline per line, dashed where the line is partly under construction */}
        {Object.entries(metroData).map(([lineKey, line]) => {
          const latlngs = line.stations.map((s) => stationGeo[s.id]).filter(Boolean).map(toLatLng);
          const isPartlyUC = line.stations.some((s) => s.status === 'under-construction');
          if (latlngs.length < 2) return null;
          return (
            <Polyline
              key={lineKey}
              path={latlngs}
              options={{
                strokeColor: line.color,
                strokeWeight: 4,
                strokeOpacity: isPartlyUC ? 0 : 0.85,
                // Google Polyline has no native dash pattern for solid
                // strokes, so under-construction stretches use repeated
                // line-symbol icons instead of the old strokeDasharray.
                icons: isPartlyUC
                  ? [
                      {
                        icon: { path: 'M 0,-1 0,1', strokeOpacity: 0.85, scale: 3 },
                        offset: '0',
                        repeat: '12px',
                      },
                    ]
                  : undefined,
              }}
            />
          );
        })}

        {/* One marker per (de-duped) station */}
        {stationMarkers.map((station) => {
          const geo = stationGeo[station.id];
          return (
            <Marker
              key={station.id}
              position={toLatLng(geo)}
              onClick={() => setActiveStation(station.id)}
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: station.lineColor,
                fillOpacity: station.isUC ? 0.4 : 1,
                strokeColor: '#ffffff',
                strokeWeight: 1.5,
              }}
            >
              {activeStation === station.id && (
                <InfoWindow position={toLatLng(geo)} onCloseClick={() => setActiveStation(null)}>
                  <div style={{ color: '#1e1b4b' }}>
                    <strong>{station.name}</strong>
                    <br />
                    {station.lineName}
                    {station.isUC ? ' (under construction)' : ''}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}

        {routeLatLngs.length > 1 && (
          <Polyline
            path={routeLatLngs}
            options={{ strokeColor: '#f472b6', strokeWeight: 6, strokeOpacity: 0.95, zIndex: 10 }}
          />
        )}

        <UserLocationMarker position={userPosition} />
      </GoogleMap>
    </div>
  );
}
