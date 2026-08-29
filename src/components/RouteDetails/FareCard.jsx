import { useTranslation } from '../../context/LanguageContext.jsx';
import { calculateFare } from '../../lib/fareCalculator.js';

export function FareCard({ route }) {
  const { t } = useTranslation();
  const { fare, calculated } = calculateFare(route);

  if (!calculated || fare < 0) return null;

  return (
    <div className="mt-4 text-center bg-indigo-950/60 p-4 rounded-lg border border-purple-800/50">
      <h4 className="text-lg font-semibold mb-1 text-purple-300">{t('estimatedFare')}</h4>
      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        ₹ {fare.toFixed(2)}
      </p>
      <div className="mt-4 pt-4 border-t border-purple-800/40 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <svg
            className="w-5 h-5 text-cyan-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h.01M15 12h.01M3 9a2 2 0 012-2h14a2 2 0 012 2v1.5a1.5 1.5 0 000 3V15a2 2 0 01-2 2H5a2 2 0 01-2-2v-1.5a1.5 1.5 0 000-3V9z"
            />
          </svg>
          <span>{t('bookTicketApp')}</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=org.cris.kmmts&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-900/70 hover:bg-indigo-800/80 border border-purple-700/50 text-gray-200 text-sm font-medium py-2 px-3 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3.6v16.8c0 .5.3.9.7 1.1l9.7-9.5L3.7 2.5c-.4.2-.7.6-.7 1.1zM17.6 9.6L14.9 8 5.2 2.5l8.8 8.6 3.6-1.5zM5.2 21.5L14.9 16l2.7-1.6-3.6-3.5-8.8 8.6zM19.6 10.4L18 11.3v1.4l1.6.9c.9-.5 1.4-1.1 1.4-1.8s-.5-1.3-1.4-1.4z" />
            </svg>
            Google Play
          </a>
          <a
            href="https://apps.apple.com/in/app/aamar-kolkata-metro/id6469577611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-900/70 hover:bg-indigo-800/80 border border-purple-700/50 text-gray-200 text-sm font-medium py-2 px-3 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.83-.87 3.14-.79 1.57.13 2.75.74 3.52 1.85-3.13 1.87-2.54 5.98.47 7.2-.55 1.42-1.27 2.83-2.21 3.91zM12.03 7.25c-.15-2.23 1.66-4.09 3.74-4.25.29 2.32-2.09 4.13-3.74 4.25z" />
            </svg>
            App Store
          </a>
        </div>
      </div>
    </div>
  );
}
