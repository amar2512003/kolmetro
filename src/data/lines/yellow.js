import { lineColors } from '../lineColors.js';

export const yellowLine = {
  key: 'yellow',
  name: 'Yellow Line',
  color: lineColors.yellow,
  stations: [
    { id: 'noapara', name: 'Noapara', interchange: ['blue'] },
    { id: 'dumdum_cantonment', name: 'Dum Dum Cantonment' },
    { id: 'jessore_road', name: 'Jessore Road' },
    { id: 'jai_hind', name: 'Jai Hind', interchange: ['orange'] },
    { id: 'birati', name: 'Birati', status: 'under-construction' },
    { id: 'michael_nagar', name: 'Michael Nagar', status: 'under-construction' },
    { id: 'new_barrackpore', name: 'New Barrackpore', status: 'under-construction' },
    { id: 'madhyamgram', name: 'Madhyamgram', status: 'under-construction' },
    { id: 'hridaypur', name: 'Hridaypur', status: 'under-construction' },
    { id: 'barasat', name: 'Barasat', status: 'under-construction' },
  ],
};
