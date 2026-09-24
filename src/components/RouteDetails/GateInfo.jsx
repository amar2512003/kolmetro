import { useTranslation } from '../../context/LanguageContext.jsx';

export function GateInfo({ startStation, endStation }) {
  const { t, tn, tg, tgl } = useTranslation();

  if (!startStation?.gates && !endStation?.gates) return null;

  return (
    <div className="mt-4 text-left bg-indigo-950/60 p-4 rounded-lg border border-purple-800/50">
      <h4 className="text-lg font-semibold mb-3 text-purple-300">{t('gateInformation')}</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {startStation?.gates && (
          <div className="bg-indigo-950/50 border border-purple-800/60 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-purple-400 mb-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4M3 7l9-4 9 4v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" />
              </svg>
              {tn(startStation.name)} ({t('startLabel')})
            </div>
            <div className="flex flex-col gap-1.5">
              {Object.entries(startStation.gates).map(([gateNum, desc]) => (
                <div key={gateNum} className="flex items-baseline gap-2 text-sm">
                  <span className="font-mono text-purple-300 min-w-[1.5rem] shrink-0">{tgl(gateNum)}</span>
                  <span className="text-gray-400">{tg(desc)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {endStation?.gates && (
          <div className="bg-pink-950/30 border border-pink-800/50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-pink-400 mb-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {tn(endStation.name)} ({t('destinationLabelShort')})
            </div>
            <div className="flex flex-col gap-1.5">
              {Object.entries(endStation.gates).map(([gateNum, desc]) => (
                <div key={gateNum} className="flex items-baseline gap-2 text-sm">
                  <span className="font-mono text-pink-300 min-w-[1.5rem] shrink-0">{tgl(gateNum)}</span>
                  <span className="text-gray-400">{tg(desc)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}