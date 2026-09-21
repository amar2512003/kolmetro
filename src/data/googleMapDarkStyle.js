// Custom Google Maps style replacing the old CSS `invert()` filter trick
// that darkened the OSM tiles. Passed as `options.styles` on <GoogleMap>.
export const googleMapDarkStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1e1b4b' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1e1b4b' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#9ca3af' }] },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#38364f' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#26314a' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#2d2b55' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1e1b4b' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#3d3a6e' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2d2b55' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#111034' }],
  },
];
