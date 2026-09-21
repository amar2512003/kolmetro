import { useMemo, useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { stationGeo } from '../../data/stationGeo.js';
import { findLandmarksNear } from '../../lib/geo.js';
import { landmarkImageCandidates } from '../../lib/landmarkImage.js';

// Small gray placeholder with a pin icon — shown when no photo file exists
// yet for a landmark (or none of its candidate extensions loaded).
const PLACEHOLDER_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#d4d4d8"/><text x="100" y="112" font-size="48" text-anchor="middle">📍</text></svg>'
  );

// Alternates a slight left/right tilt per card, like photos scattered on a
// table — straightens out on hover for a little life.
const TILTS = ['-rotate-2', 'rotate-2', 'rotate-1', '-rotate-3', 'rotate-3', '-rotate-1'];

// Tries each candidate image path in order (jpg -> jpeg -> png -> webp);
// falls back to the placeholder if none of them load.
function LandmarkPhoto({ name }) {
  const candidates = useMemo(() => landmarkImageCandidates(name), [name]);
  const [attempt, setAttempt] = useState(0);

  const src = attempt < candidates.length ? candidates[attempt] : PLACEHOLDER_IMG;

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setAttempt((a) => a + 1)}
      className="w-full aspect-square object-cover bg-zinc-300"
    />
  );
}

export function NearbyLandmarks({ stationId }) {
  const { t } = useTranslation();
  const nearby = useMemo(() => (stationId ? findLandmarksNear(stationId) : []), [stationId]);

  if (nearby.length === 0) return null;

  return (
    <div className="mt-4 text-left bg-black/40 p-4 sm:p-6 rounded-xl border border-purple-900/40">
      <h4 className="text-lg font-semibold mb-4 text-purple-300">{t('nearbyLandmarks')}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
        {nearby.map(({ landmark, distanceKm }, i) => (
          <div
            key={landmark.name}
            className={`relative bg-white p-2.5 pb-3 rounded-sm shadow-lg shadow-black/50 ${TILTS[i % TILTS.length]} hover:rotate-0 hover:scale-105 hover:z-10 transition-transform duration-300 ease-out group`}
          >
            <div className="relative">
              <LandmarkPhoto name={landmark.name} />
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=${stationGeo[stationId][0]},${stationGeo[stationId][1]}&destination=${landmark.lat},${landmark.lng}&travelmode=walking`}
                target="_blank"
                rel="noreferrer"
                title="Get Directions"
                className="absolute top-2 right-2 w-8 h-8 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="pt-2.5 text-center">
              <p
                className="text-neutral-800 leading-tight truncate"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1.35rem', fontWeight: 700 }}
              >
                {landmark.name}
              </p>
              <p
                className="text-neutral-500 -mt-1"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem' }}
              >
                {distanceKm.toFixed(1)} km away
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}