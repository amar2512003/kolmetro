// Direction-aware, day-type-aware timetables.
// Each schedule entry describes one direction of travel (from -> to)
// with its first/last train time (24h "HH:MM") plus an optional note
// (e.g. late-night extended specials). "closedOn" lists weekday names
// (as returned by Date.toLocaleString('en-US',{weekday:'long'})) on
// which the line does not run at all that day.
export const lineTimetables = {
  blue: {
    name: 'Blue Line',
    closedOn: [],
    schedules: {
      weekday: [
        // Monday–Saturday (Saturday follows the same pattern as weekdays)
        { from: 'dumdum', to: 'kavi_subhash', first: '06:50', last: '21:40', lastNote: 'Extended late-night special departs 22:00' },
        { from: 'kavi_subhash', to: 'dakshineswar', first: '06:50', last: '21:30', lastNote: 'Extended late-night special departs 22:00' },
        { from: 'dumdum', to: 'dakshineswar', first: '06:55', last: '21:30', lastNote: 'Extended late-night special departs 22:00' },
        { from: 'dakshineswar', to: 'kavi_subhash', first: '07:00', last: '21:28', lastNote: 'Extended late-night special departs 22:00' },
      ],
      sunday: [
        { from: 'dumdum', to: 'kavi_subhash', first: '09:00', last: '21:40', lastNote: 'Extended late-night special departs 22:00' },
        { from: 'kavi_subhash', to: 'dakshineswar', first: '09:00', last: '21:30', lastNote: 'Extended late-night special departs 22:00' },
        { from: 'dumdum', to: 'dakshineswar', first: '09:00', last: '21:30', lastNote: 'Extended late-night special departs 22:00' },
        { from: 'dakshineswar', to: 'kavi_subhash', first: '09:00', last: '21:28', lastNote: 'Extended late-night special departs 22:00' },
      ],
    },
  },
  green: {
    name: 'Green Line',
    closedOn: [],
    schedules: {
      weekday: [
        // Monday–Saturday
        { from: 'saltlake_sector_v', to: 'howrah_maidan', first: '06:39', last: '21:55' },
        { from: 'howrah_maidan', to: 'saltlake_sector_v', first: '06:45', last: '21:55', lastNote: 'Extended service to Central Park departs 22:05' },
      ],
      sunday: [
        { from: 'saltlake_sector_v', to: 'howrah_maidan', first: '09:02', last: '21:40' },
        { from: 'howrah_maidan', to: 'saltlake_sector_v', first: '09:00', last: '21:50' },
      ],
    },
  },
  orange: {
    name: 'Orange Line',
    closedOn: ['Saturday', 'Sunday'],
    schedules: {
      weekday: [
        // Monday–Friday only
        { from: 'kavi_subhash', to: 'beleghata', first: '07:40', last: '20:20' },
        { from: 'beleghata', to: 'kavi_subhash', first: '08:10', last: '20:45' },
      ],
    },
  },
  purple: {
    name: 'Purple Line',
    closedOn: ['Sunday'],
    schedules: {
      weekday: [
        // Monday–Friday
        { from: 'joka', to: 'majerhat', first: '06:40', last: '21:05' },
        { from: 'majerhat', to: 'joka', first: '07:03', last: '21:26' },
      ],
      saturday: [
        { from: 'joka', to: 'majerhat', first: '13:25', last: '20:11' },
        { from: 'majerhat', to: 'joka', first: '13:49', last: '20:32' },
      ],
    },
  },
  yellow: {
    name: 'Yellow Line',
    closedOn: [],
    schedules: {
      weekday: [
        // Monday–Friday
        { from: 'noapara', to: 'jai_hind', first: '07:18', last: '20:58' },
        { from: 'jai_hind', to: 'noapara', first: '07:40', last: '21:18' },
      ],
      saturday: [
        { from: 'noapara', to: 'jai_hind', first: '07:18', last: '20:58' },
        { from: 'jai_hind', to: 'noapara', first: '07:40', last: '21:18' },
      ],
      sunday: [
        { from: 'noapara', to: 'jai_hind', first: '09:18', last: '20:58' },
        { from: 'jai_hind', to: 'noapara', first: '09:40', last: '21:18' },
      ],
    },
  },
};
