import { useTranslation } from '../../context/LanguageContext.jsx';
import { translateName } from '../../i18n/nameTranslations.js';
import { calculateFare, calculateSegmentFare } from '../../lib/fareCalculator.js';
import { splitRouteIntoLineSegments } from '../../lib/routing.js';

function generateTicketNumber() {
  return 'A' + Math.floor(100000000 + Math.random() * 900000000);
}

function formatDateTime(date) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

const appLink = 'https://play.google.com/store/apps/details?id=org.cris.kmmts&hl=en_IN';
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(appLink)}`;

function Ticket({ fare, source, destination, label }) {
  const now = new Date();
  const validUpto = new Date(now.getTime() + 45 * 60 * 1000); // 45 min validity window
  const ticketNumber = generateTicketNumber();

  return (
    <div className="relative w-full max-w-xs bg-[#fdfdfb] text-black font-mono rounded-md shadow-lg overflow-hidden">
      <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,#00000022_6px,#00000022_10px)]" />

      <div className="px-5 py-4 text-center">
        <h4 className="text-sm font-bold tracking-wide">{label || 'Metro Railway Kolkata'}</h4>
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
  );
}

// Groups a route's line segments by maintenance-gap boundaries. Every
// maintenance-gap hop (segment.line === null, no fare of its own) marks a
// point where the journey is NOT physically continuous track — just an
// auto/bus detour arranged between two disconnected legs. This is generic
// rather than tied to any one line: Purple<->Blue via Taratala/Kalighat,
// Orange<->Blue via Shahid Khudiram/Satyajit Ray, or any future pair
// joined the same way all hit this same split.
function groupSegmentsByMaintenanceGap(segments) {
  const groups = [];
  let current = [];
  segments.forEach((segment) => {
    if (!segment.line) {
      if (current.length > 0) groups.push(current);
      current = [];
    } else {
      current.push(segment);
    }
  });
  if (current.length > 0) groups.push(current);
  return groups;
}

function summarizeGroup(group, stationMap, lang) {
  let fare = 0;
  let calculated = true;
  group.forEach((segment) => {
    const result = calculateSegmentFare(segment);
    fare += result.fare;
    if (!result.calculated) calculated = false;
  });

  const first = group[0];
  const last = group[group.length - 1];
  const source = translateName(lang, stationMap.get(first.stations[0])?.name);
  const destination = translateName(lang, stationMap.get(last.stations[last.stations.length - 1])?.name);

  const lineNames = new Set(group.map((segment) => translateName(lang, segment.line.name)));
  const label = lineNames.size === 1 ? `Kolkata Metro — ${[...lineNames][0]}` : 'Metro Railway Kolkata';

  return { fare, calculated, source, destination, label };
}

export function FareCard({ route, stationMap, sourceName, destinationName }) {
  const { lang } = useTranslation();

  if (!route || route.length < 2 || !stationMap) return null;

  const segments = splitRouteIntoLineSegments(route);
  const groups = groupSegmentsByMaintenanceGap(segments);

  // No maintenance-gap split on this route: single ticket, same as before.
  if (groups.length <= 1) {
    const { fare, calculated } = calculateFare(route);
    if (!calculated || fare < 0) return null;

    return (
      <div className="mt-4 flex justify-center">
        <Ticket fare={fare} source={sourceName} destination={destinationName} />
      </div>
    );
  }

  const tickets = groups.map((group) => summarizeGroup(group, stationMap, lang));
  if (tickets.some((ticket) => !ticket.calculated)) return null;

  const totalFare = tickets.reduce((sum, ticket) => sum + ticket.fare, 0);

  return (
    <div className="mt-4 flex flex-col items-center gap-3">
      <p className="text-xs text-yellow-400/90 max-w-xs text-center px-2">
        Part of this journey is a maintenance detour between lines — you&apos;ll need {tickets.length} separate tickets for this journey.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start flex-wrap justify-center">
        {tickets.map((ticket, i) => (
          <Ticket key={i} fare={ticket.fare} source={ticket.source} destination={ticket.destination} label={ticket.label} />
        ))}
      </div>
      <p className="text-sm text-gray-300">
        Total fare needed : <span className="font-semibold text-white">Rs.{totalFare.toFixed(2)}</span>
      </p>
    </div>
  );
}