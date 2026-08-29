import { lineColors } from '../lineColors.js';

export const pinkLine = {
  key: 'pink',
  name: 'Pink Line',
  color: lineColors.pink,
  stations: [
    {
      id: 'baranagar',
      name: 'Baranagar',
      interchange: ['blue'],
      status: 'under-construction',
    },
    { id: 'krishna_kali', name: 'Krishna Kali', status: 'under-construction' },
    {
      id: 'acharya_prafulla_chandra',
      name: 'Acharya Prafulla Chandra',
      status: 'under-construction',
    },
    { id: 'gandhi_ashram', name: 'Gandhi Ashram', status: 'under-construction' },
    { id: 'sarat_chandra', name: 'Sarat Chandra', status: 'under-construction' },
    { id: 'subhash_nagar', name: 'Subhash Nagar', status: 'under-construction' },
    { id: 'rishi_bankim', name: 'Rishi Bankim', status: 'under-construction' },
    {
      id: 'dr_rajendra_prasad',
      name: 'Dr Rajendra Prasad',
      status: 'under-construction',
    },
    {
      id: 'shaw_nawaz_khan',
      name: 'Shaw Nawaz Khan',
      status: 'under-construction',
    },
    { id: 'talpukur', name: 'Talpukur', status: 'under-construction' },
    { id: 'barrackpore', name: 'Barrackpore', status: 'under-construction' },
  ],
};
