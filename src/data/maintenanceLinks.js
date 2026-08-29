// Generic replacement for the old hardcoded "kalighat <-> taratala" and
// "shahid_khudiram <-> satyajit_ray" special cases. Each entry describes
// a gap between two operational stations that isn't served by a running
// metro segment right now, and how riders bridge it in the meantime.
//
// lib/routing.js treats these as graph edges (so pathfinding can cross
// the gap), and components/RouteDetails/JourneySteps.jsx renders a
// generic "maintenance detour" step for any segment that matches one of
// these, instead of two separately-worded auto/bus blocks.
//
// mode: 'auto' | 'bus' — determines which detour copy/icon is shown.
// Add a new entry here (no code changes needed elsewhere) if another
// gap opens up in the future.
export const maintenanceLinks = [
  {
    id: 'kalighat-taratala',
    stations: ['kalighat', 'taratala'],
    mode: 'auto',
    reason: 'maintenance',
  },
  {
    id: 'shahid_khudiram-satyajit_ray',
    stations: ['shahid_khudiram', 'satyajit_ray'],
    mode: 'bus',
    reason: 'maintenance',
  },
];
