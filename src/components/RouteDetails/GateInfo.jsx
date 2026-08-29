import { useTranslation } from '../../context/LanguageContext.jsx';

export function GateInfo({ startStation, endStation }) {
  const { t } = useTranslation();

  if (!startStation?.gates && !endStation?.gates) return null;

  return (
    <div className="mt-4 text-left bg-indigo-950/60 p-4 rounded-lg border border-purple-800/50">
      <h4 className="text-lg font-semibold mb-2 text-purple-300">{t('gateInformation')}</h4>

      {startStation?.gates && (
        <div className="mb-2">
          <strong className="text-purple-400">
            {startStation.name} ({t('startLabel')}):
          </strong>
          <ul className="list-disc list-inside text-gray-400 text-sm pl-2">
            {Object.entries(startStation.gates).map(([gateNum, desc]) => (
              <li key={gateNum}>
                {t('gateLabel')} {gateNum}: {desc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {endStation?.gates && (
        <div>
          <strong className="text-pink-400">
            {endStation.name} ({t('destinationLabelShort')}):
          </strong>
          <ul className="list-disc list-inside text-gray-400 text-sm pl-2">
            {Object.entries(endStation.gates).map(([gateNum, desc]) => (
              <li key={gateNum}>
                {t('gateLabel')} {gateNum}: {desc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
