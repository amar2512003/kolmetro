import { lineColors } from '../lineColors.js';

export const orangeLine = {
  key: 'orange',
  name: 'Orange Line',
  color: lineColors.orange,
  stations: [
    { id: 'kavi_subhash', name: 'Kavi Subhash', interchange: ['blue'] },
    {
      id: 'satyajit_ray',
      name: 'Satyajit Ray',
      gates: { 1: 'Metropolis Mall / Hiland Park' },
    },
    {
      id: 'jyotirindra_nandi',
      name: 'Jyotirindra Nandi',
      gates: { 1: 'METRO Cash and Carry / Medisky' },
    },
    {
      id: 'kavi_sukanta',
      name: 'Kavi Sukanta',
      gates: { 1: 'Avishikta' },
    },
    {
      id: 'hemanta_mukhopadhyay',
      name: 'Hemanta Mukhopadhyay',
      gates: { 1: 'Ruby Hospital / Passport Seva Kendra' },
    },
    { id: 'vip_bazar', name: 'VIP Bazar' },
    { id: 'ritwik_ghatak', name: 'Ritwik Ghatak' },
    { id: 'barun_sengupta', name: 'Barun Sengupta' },
    { id: 'beleghata', name: 'Beleghata' },
    { id: 'gour_kishore_ghosh', name: 'Gour Kishore Ghosh', status: 'under-construction' },
    { id: 'nalban', name: 'Nalban', status: 'under-construction' },
    {
      id: 'saltlake_sector_v',
      name: 'IT Sector',
      interchange: ['green'],
      status: 'under-construction',
    },
    { id: 'nabadiganta', name: 'Nabadiganta', status: 'under-construction' },
    { id: 'nazrul_tirtha', name: 'Nazrul Tirtha', status: 'under-construction' },
    { id: 'swapnabhor', name: 'Swapnabhor', status: 'under-construction' },
    { id: 'convention_center', name: 'Convention Center', status: 'under-construction' },
    { id: 'sikhsha_tirtha', name: 'Sikhsha Tirtha', status: 'under-construction' },
    { id: 'mothers_wax_museum', name: "Mother's Wax Museum", status: 'under-construction' },
    { id: 'eco_park', name: 'Eco Park', status: 'under-construction' },
    { id: 'mangal_deep', name: 'Mangal Deep', status: 'under-construction' },
    { id: 'city_centre_2', name: 'City Centre 2', status: 'under-construction' },
    { id: 'chinar_park', name: 'Chinar Park', status: 'under-construction' },
    { id: 'vip_road', name: 'VIP Road', status: 'under-construction' },
    {
      id: 'jai_hind',
      name: 'Jai Hind',
      interchange: ['yellow'],
      status: 'under-construction',
    },
  ],
};
