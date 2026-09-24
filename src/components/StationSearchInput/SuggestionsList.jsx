import { useTranslation } from '../../context/LanguageContext.jsx';

export function SuggestionsList({ stations, landmarkMatches, onSelectStation, onSelectLandmark }) {
  const { tn } = useTranslation();

  if (stations.length === 0 && landmarkMatches.length === 0) return null;

  return (
    <div className="absolute z-10 w-full mt-1 bg-indigo-900 border border-purple-800/50 rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {stations.map((station) => (
        // onMouseDown (not onClick) so this fires before the input's onBlur closes the list.
        <div
          key={station.id}
          className="p-3 hover:bg-gray-700 cursor-pointer text-gray-100"
          onMouseDown={() => onSelectStation(station)}
        >
          {tn(station.name)}
        </div>
      ))}

      {landmarkMatches.map(({ landmark, station, distanceKm }) => (
        <div
          key={landmark.name}
          className="p-3 hover:bg-indigo-800/60 cursor-pointer border-t border-purple-900/40"
          onMouseDown={() => onSelectLandmark(landmark, station, distanceKm)}
        >
          <div className="flex items-center gap-2 text-gray-100">
            <span>📍</span>
            <span>{tn(landmark.name)}</span>
          </div>
          {station ? (
            <div className="absolute z-10 w-full mt-1 bg-zinc-950 border border-purple-800/50 rounded-lg shadow-xl shadow-black/60 max-h-60 overflow-y-auto">
              → {tn(station.name)} ({distanceKm.toFixed(1)} km)
            </div>
          ) : (
            <div className="text-xs text-gray-500 pl-6 mt-0.5">No nearby station found</div>
          )}
        </div>
      ))}
    </div>
  );
}
