import { lineTimetables } from '../data/lineTimetables.js';
import { metroData } from '../data/lines/index.js';

export function getDayType(date) {
  const dayName = date.toLocaleString('en-US', { weekday: 'long' });
  return { dayName, isSunday: dayName === 'Sunday', isSaturday: dayName === 'Saturday' };
}

export function getScheduleForDay(lineKey, date) {
  const line = lineTimetables[lineKey];
  if (!line) return { closed: false, entries: null, dayName: null };
  const { dayName, isSunday, isSaturday } = getDayType(date);
  if (line.closedOn.includes(dayName)) return { closed: true, entries: null, dayName };
  let key = 'weekday';
  if (isSunday) key = line.schedules.sunday ? 'sunday' : 'weekday';
  else if (isSaturday) key = line.schedules.saturday ? 'saturday' : 'weekday';
  return { closed: false, entries: line.schedules[key] || null, dayName };
}

function stationIndexInLine(lineKey, stationId) {
  const line = metroData[lineKey];
  if (!line) return -1;
  return line.stations.findIndex((s) => s.id === stationId);
}

// Picks the timetable entry that best matches the direction of travel
// between segStartId and segEndId along the given line.
export function pickScheduleEntry(entries, lineKey, segStartId, segEndId) {
  if (!entries || entries.length === 0) return null;
  const exact = entries.find((e) => e.from === segStartId && e.to === segEndId);
  if (exact) return exact;

  const startIdx = stationIndexInLine(lineKey, segStartId);
  const endIdx = stationIndexInLine(lineKey, segEndId);
  if (startIdx === -1 || endIdx === -1) return entries[0];

  const forward = startIdx < endIdx;
  const sameDirection = entries.filter((e) => {
    const fi = stationIndexInLine(lineKey, e.from);
    const ti = stationIndexInLine(lineKey, e.to);
    if (fi === -1 || ti === -1) return false;
    return forward ? fi < ti : fi > ti;
  });
  return sameDirection.length ? sameDirection[0] : entries[0];
}

// Computes live status for a line, optionally for a specific direction
// (segStartId -> segEndId). Falls back to the line's first/last stations
// when no direction is given (e.g. for the Live Line Status grid).
export function computeLineStatus(lineKey, date, segStartId, segEndId) {
  const line = lineTimetables[lineKey];
  const meta = metroData[lineKey];
  if (!line || !meta) return null;

  const { closed, entries, dayName } = getScheduleForDay(lineKey, date);
  if (closed) return { status: 'closed', lineName: line.name, dayName };

  const fromId = segStartId || meta.stations[0].id;
  const toId = segEndId || meta.stations[meta.stations.length - 1].id;
  const entry = pickScheduleEntry(entries, lineKey, fromId, toId);
  if (!entry) return { status: 'unknown', lineName: line.name, dayName };

  const nowStr = date.toTimeString().slice(0, 5);
  if (nowStr < entry.first) return { status: 'before-first', lineName: line.name, dayName, entry, nowStr };
  if (entry.last && nowStr > entry.last) return { status: 'after-last', lineName: line.name, dayName, entry, nowStr };
  return { status: 'available', lineName: line.name, dayName, entry, nowStr };
}

export function to12Hour(hhmm) {
  if (!hhmm) return '';
  const [h, m] = hhmm.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}
