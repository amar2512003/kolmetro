// components/shared/TopClock.jsx
import { useClock } from '../../hooks/useClock.js';

export function TopClock() {
  const now = useClock();

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const secondDeg = seconds * 6;               // 360 / 60
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;   // 360 / 12

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="fixed top-14 right-3 z-50 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 select-none pointer-events-none drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="acFace" cx="50%" cy="42%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e7e7ea" />
          </radialGradient>
          <linearGradient id="acBezel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#52525b" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#52525b" />
          </linearGradient>
        </defs>

        {/* metal bezel + inset ring + face */}
        <circle cx="100" cy="100" r="96" fill="url(#acBezel)" />
        <circle cx="100" cy="100" r="88" fill="#0a0a0c" />
        <circle cx="100" cy="100" r="82" fill="url(#acFace)" stroke="#111" strokeWidth="2" />

        {/* minute/hour ticks */}
        {Array.from({ length: 60 }).map((_, i) => {
          const isHour = i % 5 === 0;
          const angle = (i * 6 * Math.PI) / 180;
          const outer = 78;
          const inner = isHour ? 67 : 73;
          const x1 = 100 + outer * Math.sin(angle);
          const y1 = 100 - outer * Math.cos(angle);
          const x2 = 100 + inner * Math.sin(angle);
          const y2 = 100 - inner * Math.cos(angle);
          return (
            <line
              key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#111" strokeWidth={isHour ? 2.6 : 1.1} strokeLinecap="round"
            />
          );
        })}

        {/* numerals */}
        {numbers.map((n) => {
          const angle = (n * 30 * Math.PI) / 180;
          const r = 58;
          const x = 100 + r * Math.sin(angle);
          const y = 100 - r * Math.cos(angle);
          return (
            <text
              key={n} x={x} y={y + 7} textAnchor="middle"
              fontSize="20" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" fill="#111"
            >
              {n}
            </text>
          );
        })}

        {/* small metro logo mark, like the station clock */}
        <circle cx="100" cy="123" r="7" fill="none" stroke="#333" strokeWidth="1.3" />
        <line x1="94" y1="123" x2="106" y2="123" stroke="#333" strokeWidth="1.1" />
        <text
          x="100" y="140" textAnchor="middle" fontSize="7.5" fontWeight="700"
          letterSpacing="1.5" fontFamily="Arial, Helvetica, sans-serif" fill="#333"
        >
          METRO
        </text>

        {/* hour hand */}
        <g transform={`rotate(${hourDeg} 100 100)`}>
          <rect x="97" y="54" width="6" height="50" rx="3" fill="#111" />
        </g>
        {/* minute hand */}
        <g transform={`rotate(${minuteDeg} 100 100)`}>
          <rect x="98" y="32" width="4" height="72" rx="2" fill="#111" />
        </g>
        {/* second hand */}
        <g
          transform={`rotate(${secondDeg} 100 100)`}
          style={{ transition: 'transform 0.2s cubic-bezier(0.4,2.2,0.6,1)' }}
        >
          <line x1="100" y1="118" x2="100" y2="24" stroke="#dc2626" strokeWidth="2" />
          <circle cx="100" cy="118" r="5" fill="#dc2626" />
        </g>

        {/* center pivot */}
        <circle cx="100" cy="100" r="4.5" fill="#111" />
        <circle cx="100" cy="100" r="1.6" fill="#dc2626" />
      </svg>
    </div>
  );
}