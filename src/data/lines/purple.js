import { lineColors } from '../lineColors.js';

export const purpleLine = {
  key: 'purple',
  name: 'Purple Line',
  color: lineColors.purple,
  stations: [
    {
      id: 'esplanade',
      name: 'Esplanade',
      interchange: ['blue', 'green'],
      status: 'under-construction',
    },
    {
      id: 'park_street',
      name: 'Park Street',
      interchange: ['blue'],
      status: 'under-construction',
    },
    { id: 'victoria', name: 'Victoria', status: 'under-construction' },
    { id: 'khidirpur', name: 'Khidirpur', status: 'under-construction' },
    { id: 'mominpur', name: 'Mominpur', status: 'under-construction' },
    { id: 'majerhat', name: 'Majerhat' },
    { id: 'taratala', name: 'Taratala' },
    { id: 'behala_bazar', name: 'Behala Bazar' },
    { id: 'behala_chowrasta', name: 'Behala Chowrasta' },
    { id: 'sakher_bazar', name: 'Sakher Bazar' },
    { id: 'thakur_pukur', name: 'Thakur Pukur' },
    { id: 'joka', name: 'Joka' },
    { id: 'iim_calcutta', name: 'IIM Calcutta', status: 'under-construction' },
    { id: 'diamond_park', name: 'Diamond Park', status: 'under-construction' },
  ],
};
