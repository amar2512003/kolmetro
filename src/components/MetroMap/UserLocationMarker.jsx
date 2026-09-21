import { Marker, InfoWindow } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';

export function UserLocationMarker({ position }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // Matches the old .metro-user-marker CSS class (cyan dot, white ring) —
  // re-created as an SVG marker icon since Google Marker icons can't
  // reference arbitrary CSS classes the way Leaflet's L.divIcon could.
  // Built lazily (not at module scope) so it only runs once the Google
  // Maps script — and window.google.maps.SymbolPath — has actually loaded.
  const userIcon = useMemo(
    () => ({
      path: window.google.maps.SymbolPath.CIRCLE,
      scale: 7,
      fillColor: '#22d3ee',
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2,
    }),
    []
  );

  if (!position) return null;

  const latLng = { lat: position.latitude, lng: position.longitude };

  return (
    <Marker
      position={latLng}
      icon={userIcon}
      zIndex={1000}
      onClick={() => setOpen(true)}
    >
      {open && (
        <InfoWindow position={latLng} onCloseClick={() => setOpen(false)}>
          <span style={{ color: '#1e1b4b' }}>{t('youAreHere')}</span>
        </InfoWindow>
      )}
    </Marker>
  );
}
