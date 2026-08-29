import { MapContainer, TileLayer, CircleMarker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { metroData } from '../../data/lines/index.js';
import { stationGeo } from '../../data/stationGeo.js';
import { useLeafletMap } from '../../hooks/useLeafletMap.js';
import { UserLocationMarker } from './UserLocationMarker.jsx';

const KOLKATA_CENTER = [22.56, 88.38];
const DEFAULT_ZOOM = 11;

// Thin wrapper so useLeafletMap (which needs useMap()) runs inside
// <MapContainer> without MetroMap itself having to be a Leaflet child.
function FitBounds({ route, userPosition, nearestStationId }) {
  useLeafletMap({ route, userPosition, nearestStationId });
  return null;
}

export function MetroMap({ route, userPosition, nearestStationId }) {
  const routeLatLngs = route ? route.map((id) => stationGeo[id]).filter(Boolean) : [];

  return (
    <div className="w-full rounded-lg overflow-hidden" style={{ height: 600 }}>
      <MapContainer
        center={KOLKATA_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom
        style={{ width: '100%', height: '100%', background: '#1e1b4b' }}
      >
        {/* Standard OSM tiles (full street/label detail) darkened via a CSS
            filter — see .map-tiles-dark in globals.css — instead of a
            separate dark tile provider, so we keep OSM's detail level. */}
        <TileLayer
          className="map-tiles-dark"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* One polyline per line, dashed where the line is partly under construction */}
        {Object.entries(metroData).map(([lineKey, line]) => {
          const latlngs = line.stations.map((s) => stationGeo[s.id]).filter(Boolean);
          const isPartlyUC = line.stations.some((s) => s.status === 'under-construction');
          if (latlngs.length < 2) return null;
          return (
            <Polyline
              key={lineKey}
              positions={latlngs}
              pathOptions={{
                color: line.color,
                weight: 4,
                opacity: 0.8,
                dashArray: isPartlyUC ? '6 6' : null,
              }}
            />
          );
        })}

        {/* One marker per station-on-line (interchanges get one marker per line they belong to) */}
        {Object.entries(metroData).map(([lineKey, line]) =>
          line.stations.map((station) => {
            const geo = stationGeo[station.id];
            if (!geo) return null;
            const isUC = station.status === 'under-construction';
            return (
              <CircleMarker
                key={`${lineKey}-${station.id}`}
                center={geo}
                radius={5}
                pathOptions={{
                  color: '#ffffff',
                  weight: 1.5,
                  fillColor: line.color,
                  fillOpacity: isUC ? 0.4 : 1,
                }}
              >
                <Popup>
                  <strong>{station.name}</strong>
                  <br />
                  {line.name}
                  {isUC ? ' (under construction)' : ''}
                </Popup>
              </CircleMarker>
            );
          })
        )}

        {routeLatLngs.length > 1 && (
          <Polyline positions={routeLatLngs} pathOptions={{ color: '#f472b6', weight: 6, opacity: 0.95 }} />
        )}

        <UserLocationMarker position={userPosition} />

        <FitBounds route={route} userPosition={userPosition} nearestStationId={nearestStationId} />
      </MapContainer>
    </div>
  );
}