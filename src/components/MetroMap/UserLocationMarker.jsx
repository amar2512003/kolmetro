import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTranslation } from '../../context/LanguageContext.jsx';

// Matches the old .metro-user-marker CSS class (cyan dot, white ring,
// glow) — defined in styles/globals.css.
const userIcon = L.divIcon({
  className: 'metro-user-marker',
  iconSize: [14, 14],
});

export function UserLocationMarker({ position }) {
  const { t } = useTranslation();

  if (!position) return null;

  return (
    <Marker position={[position.latitude, position.longitude]} icon={userIcon}>
      <Popup>{t('youAreHere')}</Popup>
    </Marker>
  );
}
