import { lineColors } from '../lineColors.js';

export const blueLine = {
  key: 'blue',
  name: 'Blue Line',
  color: lineColors.blue,
  stations: [
    { id: 'dakshineswar', name: 'Dakshineshwar' },
    { id: 'baranagar', name: 'Baranagar', interchange: ['pink'] },
    { id: 'noapara', name: 'Noapara', interchange: ['yellow'] },
    { id: 'dumdum', name: 'Dum Dum' },
    {
      id: 'belgachia',
      name: 'Belgachia',
      gates: {
        1: 'Duttabagan Milk Colony',
        2: 'CTC (WBTC)',
        3: 'WB University of Animal & Fishery Sciences',
      },
    },
    {
      id: 'shyambazar',
      name: 'Shyambazar',
      gates: {
        1: 'Shyambazar 5 point',
        2: 'RG Kar Medical College Hospital',
        3: 'MMC college',
        4: 'Bhupen Bose Avenue',
      },
    },
    {
      id: 'shobhabazar',
      name: 'Shobhabazar Sutanuti',
      gates: {
        1: 'Aurobindo Sarani',
        2: 'Jaipuria College Gate',
        3: 'BK Paul Avenue Gate',
      },
    },
    {
      id: 'girish_park',
      name: 'Girish Park',
      gates: { '1 & 2': 'Main Gate', 3: 'Vivekananda Road' },
    },
    {
      id: 'mg_road',
      name: 'MG Road',
      gates: { 1: 'Main Gate', 2: 'Netaji Park' },
    },
    {
      id: 'central',
      name: 'Central',
      gates: {
        1: 'Air India',
        2: 'Lal Bazar / Indian Coffee House',
        3: 'RITES Building / Hind Cinema',
        4: 'Yogayog Bhawan',
        5: 'Poddar Court',
        6: 'Medical College / Ganesh Chandra Avenue',
      },
    },
    { id: 'chandni_chowk', name: 'Chandni Chowk' },
    {
      id: 'esplanade',
      name: 'Esplanade',
      interchange: ['green', 'purple'],
      gates: {
        '1 & 3': 'Rani Rashmoni Gate of Curzon Park',
        2: 'NewMarket Area / Jawaharlal Nehru Road',
        4: 'SN Banerjee Road / Newmarket area',
        6: 'Chowringee Place / NewMarket Area',
        7: 'Dufferin Road Maidan',
      },
    },
    {
      id: 'park_street',
      name: 'Park Street',
      interchange: ['purple'],
      gates: {
        1: 'Indian Museum',
        2: 'Towards Lal Bazar',
        3: 'Main Gate',
        6: 'Kyd Street',
      },
    },
    {
      id: 'maidan',
      name: 'Maidan',
      gates: {
        1: 'Victoria Memorial / Brigade Parade Ground',
        2: 'Jeevandeep / Middleton St',
        3: 'Kanak Building / Chowringhee Road',
      },
    },
    {
      id: 'rabindra_sadan',
      name: 'Rabindra Sadan',
      gates: { 1: 'Exide Gate / Shyama Prasad Mukherjee Road' },
    },
    {
      id: 'netaji_bhawan',
      name: 'Netaji Bhawan',
      gates: {
        1: 'Ramrik Hospital',
        2: 'Main Gate / Ashutosh Mukherjee Road',
        3: 'Chakraberia Road',
        4: 'Jadubabur Bazar',
      },
    },
    {
      id: 'jatin_das_park',
      name: 'Jatin Das Park',
      gates: {
        1: 'Ashutosh College',
        3: 'Chittaranjan Seba Sadan / Hazra',
        4: 'Jogesh Mime Academy / Paramount Hospital',
        5: 'Uttam Mancha',
        6: 'Kalighat Temple / Basushree Cinema Hall',
      },
    },
    {
      id: 'kalighat',
      name: 'Kalighat',
      gates: {
        1: 'Kali Temple / Catholic Church / Kalighat Tram Depot',
        3: 'Tollygunge PS / Southern Avenue',
        '4 & 5': 'Lake Market / Deshapriya Park / Rashbehari Avenue',
      },
    },
    { id: 'rabindra_sarobar', name: 'Rabindra Sarobar' },
    {
      id: 'mahanayak_uttam_kumar',
      name: 'Mahanayak Uttam Kumar',
      gates: {
        1: 'Towards Shyama Prasad Mukherjee Road',
        2: 'Tollygunge Railway Station',
        5: 'Bhavani Cinema / Charu Market / Tollygunge Phari',
        6: 'Swiss Park / Prince Anwar Shah Road (South City Mall)',
      },
    },
    { id: 'netaji', name: 'Netaji', gates: { 1: 'Kudghat Area' } },
    {
      id: 'masterda_surya_sen',
      name: 'Masterda Surya Sen',
      gates: { 1: 'Bansdroni' },
    },
    { id: 'gitanjali', name: 'Gitanjali' },
    { id: 'kavi_nazrul', name: 'Kavi Nazrul' },
    { id: 'shahid_khudiram', name: 'Shahid Khudiram' },
    { id: 'kavi_subhash', name: 'Kavi Subhash', interchange: ['orange'] },
  ],
};
