import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import { buildTimelineSteps } from '../../lib/journeyTimeline.js';
import { calculateTravel } from '../../lib/travelEstimate.js';
import { to12Hour } from '../../lib/scheduleStatus.js';

const TYPE_SPEED_MS = 28;
const PAUSE_BEFORE_LINE_MS = 200;
const LINE_GROW_MS = 550;

function stepText(step, t) {
  switch (step.kind) {
    case 'board':
      return `${t('board')} ${step.lineName} ${t('from')} ${step.stationName}.`;
    case 'change':
      return `${t('atStation')} ${step.stationName}, ${t('changeToThe')} ${step.lineName}.`;
    case 'maintenance': {
      const modeLabel = step.mode === 'bus' ? t('maintenanceDetourBus') : t('maintenanceDetourAuto');
      return `${t('maintenanceDetour', { mode: modeLabel })} ${step.stationName}.`;
    }
    case 'arrive':
      return `${t('continueToDestination')} ${step.stationName}.`;
    default:
      return '';
  }
}

// Maps a computeLineStatus() result to a small inline badge. Reuses the
// same translation keys as LiveLineStatus's LineStatusCard, so wording
// stays consistent across the app.
function statusBadge(scheduleStatus, t) {
  if (!scheduleStatus) return null;
  switch (scheduleStatus.status) {
    case 'closed':
      return {
        label: `${t('closedTodayLabel')} (${scheduleStatus.dayName})`,
        bg: 'rgba(239,68,68,0.15)',
        fg: '#fca5a5',
      };
    case 'before-first':
      return {
        label: `${t('notStartedYetShort')} ${to12Hour(scheduleStatus.entry.first)}`,
        bg: 'rgba(234,179,8,0.15)',
        fg: '#fde047',
      };
    case 'after-last':
      return {
        label: `${t('serviceEndedShort')} ${to12Hour(scheduleStatus.entry.last)}`,
        bg: 'rgba(234,179,8,0.15)',
        fg: '#fde047',
      };
    case 'available':
      return {
        label: `${t('metroAvailableShort')} ${to12Hour(scheduleStatus.entry.last)}`,
        bg: 'rgba(34,197,94,0.15)',
        fg: '#86efac',
      };
    default:
      return null;
  }
}

export function JourneySteps({ route, stationMap }) {
  const { t } = useTranslation();

  const steps = useMemo(() => buildTimelineSteps(route, stationMap), [route, stationMap]);
  const stepTexts = useMemo(() => steps.map((s) => stepText(s, t)), [steps, t]);
  const travel = useMemo(() => calculateTravel(route), [route]);

  // typed[i]: the currently-revealed substring of stepTexts[i].
  // lineGrown[i]: whether the connector below step i has finished drawing.
  // sequenceDone: true once the final step has fully typed out — used to
  // reveal the trip-summary line as a natural closing beat.
  const [typed, setTyped] = useState([]);
  const [lineGrown, setLineGrown] = useState([]);
  const [sequenceDone, setSequenceDone] = useState(false);

  // Runs the whole type -> grow-line -> type-next sequence from scratch
  // whenever the route (or the translated text, e.g. on a language
  // switch) changes.
  useEffect(() => {
    let cancelled = false;
    let charTimer;
    let lineTimer;
    let pauseTimer;

    setTyped(stepTexts.map(() => ''));
    setLineGrown(steps.map(() => false));
    setSequenceDone(false);

    function typeStep(i) {
      if (cancelled || i >= stepTexts.length) return;
      const full = stepTexts[i];
      let pos = 0;
      charTimer = setInterval(() => {
        pos += 1;
        setTyped((prev) => {
          const next = [...prev];
          next[i] = full.slice(0, pos);
          return next;
        });
        if (pos >= full.length) {
          clearInterval(charTimer);
          if (i < stepTexts.length - 1) {
            pauseTimer = setTimeout(() => growLine(i), PAUSE_BEFORE_LINE_MS);
          } else {
            setSequenceDone(true);
          }
        }
      }, TYPE_SPEED_MS);
    }

    function growLine(i) {
      if (cancelled) return;
      setLineGrown((prev) => {
        const next = [...prev];
        next[i] = true;
        return next;
      });
      lineTimer = setTimeout(() => typeStep(i + 1), LINE_GROW_MS);
    }

    typeStep(0);

    return () => {
      cancelled = true;
      clearInterval(charTimer);
      clearTimeout(lineTimer);
      clearTimeout(pauseTimer);
    };
  }, [steps, stepTexts]);

  if (steps.length === 0) return null;

  return (
    <div className="bg-black/40 border border-purple-900/30 rounded-xl p-4 sm:p-5 mt-2 text-left">
      {steps.map((step, i) => {
        const fullText = stepTexts[i] ?? '';
        const shownText = typed[i] ?? '';
        const isTyping = shownText.length < fullText.length;
        const badge = shownText === fullText ? statusBadge(step.scheduleStatus, t) : null;
        const isLast = i === steps.length - 1;

        return (
          <div key={step.key} className="flex gap-3">
            <div className="flex flex-col items-center w-3 shrink-0">
              <span className="w-3 h-3 rounded-full shrink-0 mt-1" style={{ background: step.dotColor }} />
              {!isLast && (
                <span className="w-0.5 flex-1 mt-1 bg-zinc-800 relative overflow-hidden rounded-full">
                  <span
                    className="absolute top-0 left-0 w-full"
                    style={{
                      background: step.dotColor,
                      height: lineGrown[i] ? '100%' : '0%',
                      transition: `height ${LINE_GROW_MS}ms ease`,
                    }}
                  />
                </span>
              )}
            </div>

            <div className={isLast ? 'pb-1 flex-1' : 'pb-5 flex-1'}>
              <p className="text-white text-sm sm:text-base font-medium leading-snug min-h-[1.4em]">
                {shownText}
                {isTyping && (
                  <span
                    className="inline-block w-[2px] h-[0.9em] bg-purple-400 ml-0.5 align-middle"
                    style={{ animation: 'blink 0.9s steps(1) infinite' }}
                  />
                )}
              </p>
              {badge && (
                <span
                  className="inline-flex items-center mt-1.5 px-2 py-0.5 rounded text-[11px] font-medium"
                  style={{ background: badge.bg, color: badge.fg, animation: 'fadeInUp 0.3s ease forwards' }}
                >
                  {badge.label}
                </span>
              )}
            </div>
          </div>
        );
      })}

      {sequenceDone && travel.calculated && (
        <div
          className="flex items-center gap-2 mt-1 pl-6 text-sm text-purple-300"
          style={{ opacity: 0, animation: 'fadeInUp 0.4s ease forwards' }}
        >
          <svg className="w-4 h-4 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
          <span>
            {travel.distanceKm.toFixed(1)} km · {Math.round(travel.minutes)} min
          </span>
        </div>
      )}
    </div>
  );
}