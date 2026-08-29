// stationId -> fare-matrix code. Only used to look values up in
// data/fareMatrices/*, kept separate so the fare tables themselves
// can stay purely numeric grids.
export const stationIdToCode = {
  dakshineswar: 'KDSW', baranagar: 'KBAR', noapara: 'KNAP', dumdum: 'KDMI',
  belgachia: 'KBEL', shyambazar: 'KSHY', shobhabazar: 'KSHO', girish_park: 'KGPK',
  mg_road: 'KMHR', central: 'KCEN', chandni_chowk: 'KCWC', esplanade: 'KESP',
  park_street: 'KPSK', maidan: 'KMDI', rabindra_sadan: 'KRSD', netaji_bhawan: 'KNBN',
  jatin_das_park: 'KJPK', kalighat: 'KKHG', rabindra_sarobar: 'KRSB',
  mahanayak_uttam_kumar: 'KMUK', netaji: 'KNTJ', masterda_surya_sen: 'KMSN',
  gitanjali: 'KGTN', kavi_nazrul: 'KKNZ', shahid_khudiram: 'KSKD', kavi_subhash: 'KKVS',
  saltlake_sector_v: 'SVSA', karunamoyee: 'KESA', central_park: 'CPSA',
  city_center: 'CCSC', bengal_chemical: 'BCSD', saltlake_stadium: 'SSSA',
  phoolbagan: 'PBGB', sealdah: 'SDHM', howrah_maidan: 'HWMM', howrah: 'HWHM',
  mahakaran: 'MKNA', joka: 'KJKA', thakur_pukur: 'KTKP', sakher_bazar: 'KSKB',
  behala_chowrasta: 'KBCR', behala_bazar: 'KBBR', taratala: 'KTRT', majerhat: 'KMJH',
  satyajit_ray: 'KSJR', jyotirindra_nandi: 'KJNN', kavi_sukanta: 'KKSK',
  hemanta_mukhopadhyay: 'KHMD', vip_bazar: 'KVIB', ritwik_ghatak: 'KRWG',
  barun_sengupta: 'KBST', beleghata: 'KBGA', dumdum_cantonment: 'KDDC',
  jessore_road: 'KJSR', jai_hind: 'KJAI',
};
