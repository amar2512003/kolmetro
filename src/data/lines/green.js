import { lineColors } from '../lineColors.js';

export const greenLine = {
  key: 'green',
  name: 'Green Line',
  color: lineColors.green,
  stations: [
    { id: 'howrah_maidan', name: 'Howrah Maidan' },
    { id: 'howrah', name: 'Howrah' },
    { id: 'mahakaran', name: 'Mahakaran' },
    { id: 'esplanade', name: 'Esplanade', interchange: ['blue', 'purple'] },
    { id: 'sealdah', name: 'Sealdah' },
    { id: 'phoolbagan', name: 'Phoolbagan' },
    { id: 'saltlake_stadium', name: 'Salt Lake Stadium' },
    { id: 'bengal_chemical', name: 'Bengal Chemical' },
    { id: 'city_center', name: 'City Center' },
    { id: 'central_park', name: 'Central Park' },
    { id: 'karunamoyee', name: 'Karunamoyee' },
    {
      id: 'saltlake_sector_v',
      name: 'Salt Lake Sector V',
      interchange: ['orange'],
    },
  ],
};
