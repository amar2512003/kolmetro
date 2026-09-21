// Real-world approximate lat/lng for each station (WGS84), used to plot
// stations on the actual Google Map (see MetroMap.jsx). These are close
// approximations for a working demo, not survey-grade coordinates — a
// few (mainly on the Blue, Green and Purple lines, which are real/open
// lines) are close to their real-world positions, but most, especially
// on lines with invented station names, are placeholder points spaced
// along a plausible route. Verify/replace with exact coordinates
// (e.g. from Google's Geocoding API or OpenStreetMap Nominatim) station
// by station if you need pinpoint accuracy against the live Google
// basemap.
//
// Note: the old inline `stationCoords` object (a schematic x/y grid for
// a hand-drawn SVG map) has been dropped here since the app now only
// renders the real Google Map. Re-add a schematicCoords.js file if you
// want to bring back a non-geographic diagram view.
export const stationGeo = {
  // Blue Line (Dakshineswar -> Kavi Subhash)
  dakshineswar: [22.653971, 88.363724], baranagar: [22.6535, 88.3788], noapara: [22.639673, 88.393978],
  dumdum: [22.621027, 88.392818], belgachia: [22.60599, 88.38637], shyambazar: [22.6013, 88.3726],
  shobhabazar: [22.59602, 88.36528], girish_park: [22.58714, 88.36308], mg_road: [22.58085, 88.3614],
  central: [22.57247, 88.358788], chandni_chowk: [22.567, 88.3542], esplanade: [22.56361, 88.3512],
  park_street: [22.55445, 88.34985], maidan: [22.54936, 88.34906], rabindra_sadan: [22.54122, 88.34727],
  netaji_bhawan: [22.53297, 88.34571], jatin_das_park: [22.52426, 88.34648], kalighat: [22.5167, 88.3461],
  rabindra_sarobar: [22.5072, 88.3456], mahanayak_uttam_kumar: [22.49445, 88.34515], netaji: [22.48097, 88.346],
  masterda_surya_sen: [22.473521, 88.360871], gitanjali: [22.4694, 88.3699], kavi_nazrul: [22.46417, 88.38055],
  shahid_khudiram: [22.46621, 88.39153], kavi_subhash: [22.47217, 88.39796],

  // Green Line (Howrah Maidan -> Salt Lake Sector V)
  howrah_maidan: [22.5838, 88.3307], howrah: [22.58337, 88.34035], mahakaran: [22.57207, 88.35052],
  sealdah: [22.5664, 88.37], phoolbagan: [22.57212, 88.39024], saltlake_stadium: [22.57311, 88.40308],
  bengal_chemical: [22.58006, 88.40129], city_center: [22.5871, 88.4079], central_park: [22.59035, 88.41559],
  karunamoyee: [22.58638, 88.42153], saltlake_sector_v: [22.58131, 88.42982],

  // Orange Line (Kavi Subhash -> Airport, via EM Bypass) — later stretch is under-construction
  satyajit_ray: [22.4846, 88.3926], jyotirindra_nandi: [22.4956, 88.3987], kavi_sukanta: [22.5053, 88.401],
  hemanta_mukhopadhyay: [22.5148, 88.4014], vip_bazar: [22.5255, 88.3959], ritwik_ghatak: [22.5329, 88.3958],
  barun_sengupta: [22.5439, 88.4001], beleghata: [22.5507, 88.4041], gour_kishore_ghosh: [22.5636, 88.416],
  nalban: [22.5714, 88.4227], nabadiganta: [22.5841, 88.4357], nazrul_tirtha: [22.5932, 88.4418],
  swapnabhor: [22.5985, 88.4464], convention_center: [22.6049, 88.4527], sikhsha_tirtha: [22.6102, 88.4571],
  mothers_wax_museum: [22.6146, 88.4608], eco_park: [22.6186, 88.4642], mangal_deep: [22.6225, 88.4674],
  city_centre_2: [22.6276, 88.4716], chinar_park: [22.6358, 88.4578], vip_road: [22.6412, 88.4485],

  // Yellow Line (Noapara -> Barasat, via Jai Hind/Airport)
  dumdum_cantonment: [22.6420, 88.4130], jessore_road: [22.6520, 88.4230], jai_hind: [22.64619, 88.43591],
  birati: [22.6650, 88.4520], michael_nagar: [22.6740, 88.4570], new_barrackpore: [22.6850, 88.4630],
  madhyamgram: [22.6970, 88.4700], hridaypur: [22.7080, 88.4770], barasat: [22.7220, 88.4820],

  // Purple Line (Joka -> Esplanade)
  victoria: [22.5445, 88.342], khidirpur: [22.535, 88.328], mominpur: [22.523, 88.318],
  majerhat: [22.5191, 88.3234], taratala: [22.5081, 88.3205], behala_bazar: [22.4989, 88.3173],
  behala_chowrasta: [22.4875, 88.3134], sakher_bazar: [22.4749, 88.31], thakur_pukur: [22.4642, 88.3075],
  joka: [22.45224, 88.30175], iim_calcutta: [22.4445, 88.3001], diamond_park: [22.4375, 88.298],
};
