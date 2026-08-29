import { useMemo, useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { findLandmarksNear } from '../../lib/geo.js';
import { landmarkImageCandidates } from '../../lib/landmarkImage.js';

// Small gray placeholder with a pin icon — shown when no photo file exists
// yet for a landmark (or none of its candidate extensions loaded).
const PLACEHOLDER_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#27272a"/><text x="100" y="112" font-size="48" text-anchor="middle">📍</text></svg>'
  );

// Tries each candidate image path in order (jpg -> jpeg -> png -> webp);
// falls back to the placeholder if none of them load. Fills its parent
// card at a fixed square aspect ratio so photos read clearly in a grid.
function LandmarkThumbnail({ name }) {
  const candidates = useMemo(() => landmarkImageCandidates(name), [name]);
  const [attempt, setAttempt] = useState(0);

  const src = attempt < candidates.length ? candidates[attempt] : PLACEHOLDER_IMG;

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setAttempt((a) => a + 1)}
      className="w-full aspect-square object-cover bg-zinc-800"
    />
  );
}

export function NearbyLandmarks({ stationId }) {
  const { t } = useTranslation();
  const nearby = useMemo(() => (stationId ? findLandmarksNear(stationId) : []), [stationId]);

  if (nearby.length === 0) return null;

  return (
    <div className="mt-4 text-left bg-black/40 p-4 rounded-xl border border-purple-900/40">
      <h4 className="text-lg font-semibold mb-3 text-purple-300">{t('nearbyLandmarks')}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {nearby.map(({ landmark, distanceKm }) => (
          <div
            key={landmark.name}
            className="flex flex-col rounded-lg overflow-hidden border border-purple-900/30 bg-zinc-900/60"
          >
            <LandmarkThumbnail name={landmark.name} />
            <div className="p-2">
              <p className="text-xs sm:text-sm text-zinc-200 leading-snug line-clamp-2">{landmark.name}</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">{distanceKm.toFixed(1)} km</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}