import { useTranslation } from '../../context/LanguageContext.jsx';
import { calculateFare } from '../../lib/fareCalculator.js';

function generateTicketNumber() {
  return 'A' + Math.floor(100000000 + Math.random() * 900000000);
}

function formatDateTime(date) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function FareCard({ route, sourceName, destinationName }) {
  const { t } = useTranslation();
  const { fare, calculated } = calculateFare(route);

  if (!calculated || fare < 0) return null;

  const source = sourceName || 'Source Station';
  const destination = destinationName || 'Destination Station';

  const now = new Date();
  const validUpto = new Date(now.getTime() + 45 * 60 * 1000); // 45 min validity window
  const ticketNumber = generateTicketNumber();

  const appLink = 'https://play.google.com/store/apps/details?id=org.cris.kmmts&hl=en_IN';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(appLink)}`;

  return (
    <div className="mt-4 flex justify-center">
      <div className="relative w-full max-w-xs bg-[#fdfdfb] text-black font-mono rounded-md shadow-lg overflow-hidden">
        <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,#00000022_6px,#00000022_10px)]" />

        <div className="px-5 py-4 text-center">
          <h4 className="text-sm font-bold tracking-wide">Metro Railway Kolkata</h4>
          <p className="text-[10px] text-gray-600 mt-0.5">QR Ticket Number : {ticketNumber}</p>

          <div className="flex justify-center my-3">
            <a href={appLink} target="_blank" rel="noopener noreferrer" title="Scan or click to download the app">
              <img src={qrUrl} alt="Ticket QR - opens app download" className="w-36 h-36" />
            </a>
          </div>

          <div className="text-left text-[13px] leading-6 border-t border-dashed border-gray-400 pt-2 mt-1">
            <p>Fare : Rs.{fare.toFixed(2)}</p>
            <p>Source : {String(source).toUpperCase()}</p>
            <p>Destination : {String(destination).toUpperCase()}</p>
            <p>Valid For : One Passenger &amp; One Ride</p>
            <p>Entry Valid Upto : {formatDateTime(validUpto)}</p>
          </div>

          <div className="flex justify-between text-[11px] text-gray-600 mt-2 border-t border-dashed border-gray-400 pt-2">
            <span>KMRL</span>
            <span>{formatDateTime(now)}</span>
          </div>

          <p className="text-[10px] text-gray-500 mt-3 italic">
            This is a dummy ticket for illustration only — not valid for travel. Scan the QR to download the official app and book your real ticket.
          </p>
        </div>

        <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,#00000022_6px,#00000022_10px)]" />
      </div>
    </div>
  );
}