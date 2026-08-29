// Real-world approximate lat/lng for each station (WGS84), used to plot
// stations on the actual OpenStreetMap/Leaflet map. These are close
// approximations for a working demo — swap in survey-accurate
// coordinates later if you need pinpoint precision.
//
// Note: the old inline `stationCoords` object (a schematic x/y grid for
// a hand-drawn SVG map) has been dropped here since the app now only
// renders the real Leaflet map. Re-add a schematicCoords.js file if you
// want to bring back a non-geographic diagram view.
export const stationGeo = {
  // Blue Line (Dakshineswar -> Kavi Subhash)
  dakshineswar: [22.6547, 88.3629], baranagar: [22.6461, 88.3719], noapara: [22.6288, 88.3796],
  dumdum: [22.6154, 88.4207], belgachia: [22.6041, 88.3796], shyambazar: [22.5975, 88.3746],
  shobhabazar: [22.5934, 88.3688], girish_park: [22.5895, 88.3627], mg_road: [22.5825, 88.3595],
  central: [22.5754, 88.3593], chandni_chowk: [22.5701, 88.3574], esplanade: [22.5626, 88.3529],
  park_street: [22.5511, 88.3520], maidan: [22.5453, 88.3438], rabindra_sadan: [22.5395, 88.3505],
  netaji_bhawan: [22.5340, 88.3512], jatin_das_park: [22.5288, 88.3479], kalighat: [22.5192, 88.3444],
  rabindra_sarobar: [22.5090, 88.3568], mahanayak_uttam_kumar: [22.4989, 88.3492], netaji: [22.4880, 88.3572],
  masterda_surya_sen: [22.4790, 88.3610], gitanjali: [22.4700, 88.3650], kavi_nazrul: [22.4630, 88.3690],
  shahid_khudiram: [22.4570, 88.3720], kavi_subhash: [22.4611, 88.3958],

  // Green Line (Howrah Maidan -> Salt Lake Sector V)
  howrah_maidan: [22.5850, 88.3260], howrah: [22.5804, 88.3426], mahakaran: [22.5726, 88.3465],
  sealdah: [22.5675, 88.3707], phoolbagan: [22.5680, 88.3830], saltlake_stadium: [22.5697, 88.4010],
  bengal_chemical: [22.5720, 88.4080], city_center: [22.5760, 88.4160], central_park: [22.5800, 88.4230],
  karunamoyee: [22.5820, 88.4290], saltlake_sector_v: [22.5726, 88.4338],

  // Orange Line (Kavi Subhash -> Airport, via EM Bypass) — later stretch is under-construction
  satyajit_ray: [22.4820, 88.3980], jyotirindra_nandi: [22.4900, 88.3970], kavi_sukanta: [22.4970, 88.3990],
  hemanta_mukhopadhyay: [22.5090, 88.4030], vip_bazar: [22.5180, 88.4080], ritwik_ghatak: [22.5300, 88.4070],
  barun_sengupta: [22.5400, 88.4090], beleghata: [22.5580, 88.4020], gour_kishore_ghosh: [22.5720, 88.4060],
  nalban: [22.5750, 88.4180], nabadiganta: [22.5850, 88.4330], nazrul_tirtha: [22.5950, 88.4380],
  swapnabhor: [22.6020, 88.4400], convention_center: [22.6080, 88.4370], sikhsha_tirtha: [22.6150, 88.4320],
  mothers_wax_museum: [22.6220, 88.4270], eco_park: [22.6187, 88.4308], mangal_deep: [22.6250, 88.4250],
  city_centre_2: [22.6300, 88.4380], chinar_park: [22.6380, 88.4480], vip_road: [22.6450, 88.4550],

  // Yellow Line (Noapara -> Barasat, via Jai Hind/Airport)
  dumdum_cantonment: [22.6420, 88.4130], jessore_road: [22.6520, 88.4230], jai_hind: [22.6547, 88.4467],
  birati: [22.6650, 88.4520], michael_nagar: [22.6740, 88.4570], new_barrackpore: [22.6850, 88.4630],
  madhyamgram: [22.6970, 88.4700], hridaypur: [22.7080, 88.4770], barasat: [22.7220, 88.4820],

  // Purple Line (Joka -> Esplanade)
  victoria: [22.5445, 88.3420], khidirpur: [22.5350, 88.3280], mominpur: [22.5230, 88.3180],
  majerhat: [22.5024, 88.3312], taratala: [22.4950, 88.3200], behala_bazar: [22.4870, 88.3130],
  behala_chowrasta: [22.4820, 88.3080], sakher_bazar: [22.4760, 88.3040], thakur_pukur: [22.4670, 88.3030],
  joka: [22.4573, 88.3097], iim_calcutta: [22.4520, 88.3010], diamond_park: [22.4480, 88.2950],
};
