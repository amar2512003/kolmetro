// ─── Station gate translations ───────────────────────────────────────
// Gate descriptions (station.gates[n] in data/lines/*.js) are free-text
// strings such as 'Lal Bazar / Indian Coffee House', so they are keyed by
// the exact English string used in the data files.
//
// Usage:
//   translateGate(lang, 'Kyd Street')      // → 'কিড স্ট্রিট' (bn)
//   translateGateLabel(lang, '1 & 2')      // → '1 ও 2' (bn)
//
// Unknown strings (or lang === 'en') fall back to the original English.

const gateDescriptions = {
  // ─── Blue Line ────────────────────────────────────────
  // Belgachia
  'Duttabagan Milk Colony':                  { hi: 'दत्तबागान मिल्क कॉलोनी',                     bn: 'দত্তবাগান মিল্ক কলোনি' },
  'CTC (WBTC)':                              { hi: 'सीटीसी (डब्ल्यूबीटीसी)',                    bn: 'সিটিসি (ডব্লিউবিটিসি)' },
  'WB University of Animal & Fishery Sciences': { hi: 'पश्चिम बंगाल पशु एवं मत्स्य विज्ञान विश्वविद्यालय', bn: 'পশ্চিমবঙ্গ প্রাণী ও মৎস্য বিজ্ঞান বিশ্ববিদ্যালয়' },

  // Shyambazar
  'Shyambazar 5 point':                      { hi: 'श्यामबाज़ार 5 पॉइंट',                       bn: 'শ্যামবাজার পাঁচ মাথার মোড়' },
  'RG Kar Medical College Hospital':         { hi: 'आर जी कर मेडिकल कॉलेज अस्पताल',            bn: 'আর জি কর মেডিকেল কলেজ হাসপাতাল' },
  'MMC college':                             { hi: 'एमएमसी कॉलेज',                             bn: 'এমএমসি কলেজ' },
  'Bhupen Bose Avenue':                      { hi: 'भूपेन बोस एवेन्यू',                         bn: 'ভূপেন বসু অ্যাভিনিউ' },

  // Shobhabazar Sutanuti
  'Aurobindo Sarani':                        { hi: 'अरविंद सरणी',                              bn: 'অরবিন্দ সরণি' },
  'Jaipuria College Gate':                   { hi: 'जयपुरिया कॉलेज गेट',                        bn: 'জয়পুরিয়া কলেজ গেট' },
  'BK Paul Avenue Gate':                     { hi: 'बी के पॉल एवेन्यू गेट',                     bn: 'বি কে পাল অ্যাভিনিউ গেট' },

  // Girish Park / MG Road / Park Street / Netaji Bhawan
  'Vivekananda Road':                        { hi: 'विवेकानंद रोड',                            bn: 'বিবেকানন্দ রোড' },
  'Main Gate':                               { hi: 'मुख्य गेट',                                bn: 'প্রধান গেট' },
  'Netaji Park':                             { hi: 'नेताजी पार्क',                              bn: 'নেতাজি পার্ক' },

  // Central
  'Air India':                               { hi: 'एयर इंडिया',                               bn: 'এয়ার ইন্ডিয়া' },
  'Lal Bazar / Indian Coffee House':         { hi: 'लालबाज़ार / इंडियन कॉफ़ी हाउस',              bn: 'লালবাজার / ইন্ডিয়ান কফি হাউস' },
  'RITES Building / Hind Cinema':            { hi: 'राइट्स बिल्डिंग / हिंद सिनेमा',              bn: 'রাইটস বিল্ডিং / হিন্দ সিনেমা' },
  'Yogayog Bhawan':                          { hi: 'योगायोग भवन',                              bn: 'যোগাযোগ ভবন' },
  'Poddar Court':                            { hi: 'पोद्दार कोर्ट',                             bn: 'পোদ্দার কোর্ট' },
  'Medical College / Ganesh Chandra Avenue': { hi: 'मेडिकल कॉलेज / गणेश चंद्र एवेन्यू',           bn: 'মেডিকেল কলেজ / গণেশ চন্দ্র অ্যাভিনিউ' },

  // Esplanade
  'NewMarket Area / Jawaharlal Nehru Road':  { hi: 'न्यू मार्केट क्षेत्र / जवाहरलाल नेहरू रोड',    bn: 'নিউ মার্কেট এলাকা / জওহরলাল নেহরু রোড' },
  'SN Banerjee Road / Newmarket area':       { hi: 'एस एन बनर्जी रोड / न्यू मार्केट क्षेत्र',      bn: 'এস এন ব্যানার্জি রোড / নিউ মার্কেট এলাকা' },
  'Chowringee Place / NewMarket Area':       { hi: 'चौरंगी प्लेस / न्यू मार्केट क्षेत्र',          bn: 'চৌরঙ্গী প্লেস / নিউ মার্কেট এলাকা' },
  'Dufferin Road Maidan':                    { hi: 'डफरिन रोड मैदान',                          bn: 'ডাফরিন রোড ময়দান' },
  'Rani Rashmoni Gate of Curzon Park':       { hi: 'कर्ज़न पार्क का रानी रासमणि गेट',            bn: 'কার্জন পার্কের রানি রাসমণি গেট' },

  // Park Street
  'Indian Museum':                           { hi: 'भारतीय संग्रहालय',                          bn: 'ভারতীয় জাদুঘর' },
  'Towards Lal Bazar':                       { hi: 'लालबाज़ार की ओर',                          bn: 'লালবাজারের দিকে' },
  'Kyd Street':                              { hi: 'किड स्ट्रीट',                               bn: 'কিড স্ট্রিট' },

  // Maidan
  'Victoria Memorial / Brigade Parade Ground': { hi: 'विक्टोरिया मेमोरियल / ब्रिगेड परेड ग्राउंड', bn: 'ভিক্টোরিয়া মেমোরিয়াল / ব্রিগেড প্যারেড গ্রাউন্ড' },
  'Jeevandeep / Middleton St':               { hi: 'जीवनदीप / मिडलटन स्ट्रीट',                  bn: 'জীবনদীপ / মিডলটন স্ট্রিট' },
  'Kanak Building / Chowringhee Road':       { hi: 'कनक बिल्डिंग / चौरंगी रोड',                 bn: 'কনক বিল্ডিং / চৌরঙ্গী রোড' },

  // Rabindra Sadan
  'Exide Gate / Shyama Prasad Mukherjee Road': { hi: 'एक्साइड गेट / श्यामा प्रसाद मुखर्जी रोड',   bn: 'এক্সাইড গেট / শ্যামাপ্রসাদ মুখার্জি রোড' },

  // Netaji Bhawan
  'Ramrik Hospital':                         { hi: 'रामरिक अस्पताल',                           bn: 'রামরিক হাসপাতাল' },
  'Main Gate / Ashutosh Mukherjee Road':     { hi: 'मुख्य गेट / आशुतोष मुखर्जी रोड',             bn: 'প্রধান গেট / আশুতোষ মুখার্জি রোড' },
  'Chakraberia Road':                        { hi: 'चक्रबेड़िया रोड',                            bn: 'চক্রবেড়িয়া রোড' },
  'Jadubabur Bazar':                         { hi: 'जदुबाबू का बाज़ार',                         bn: 'যদুবাবুর বাজার' },

  // Jatin Das Park
  'Ashutosh College':                        { hi: 'आशुतोष कॉलेज',                             bn: 'আশুতোষ কলেজ' },
  'Chittaranjan Seba Sadan / Hazra':         { hi: 'चित्तरंजन सेवा सदन / हाज़रा',                bn: 'চিত্তরঞ্জন সেবা সদন / হাজরা' },
  'Jogesh Mime Academy / Paramount Hospital': { hi: 'जोगेश माइम अकादमी / पैरामाउंट अस्पताल',      bn: 'যোগেশ মাইম অ্যাকাডেমি / প্যারামাউন্ট হাসপাতাল' },
  'Uttam Mancha':                            { hi: 'उत्तम मंच',                                bn: 'উত্তম মঞ্চ' },
  'Kalighat Temple / Basushree Cinema Hall': { hi: 'कालीघाट मंदिर / बसुश्री सिनेमा हॉल',         bn: 'কালীঘাট মন্দির / বসুশ্রী সিনেমা হল' },

  // Kalighat
  'Kali Temple / Catholic Church / Kalighat Tram Depot': { hi: 'काली मंदिर / कैथोलिक चर्च / कालीघाट ट्राम डिपो', bn: 'কালী মন্দির / ক্যাথলিক চার্চ / কালীঘাট ট্রাম ডিপো' },
  'Tollygunge PS / Southern Avenue':         { hi: 'टॉलीगंज थाना / सदर्न एवेन्यू',                bn: 'টালিগঞ্জ থানা / সাদার্ন অ্যাভিনিউ' },
  'Lake Market / Deshapriya Park / Rashbehari Avenue': { hi: 'लेक मार्केट / देशप्रिय पार्क / रासबिहारी एवेन्यू', bn: 'লেক মার্কেট / দেশপ্রিয় পার্ক / রাসবিহারী অ্যাভিনিউ' },

  // Mahanayak Uttam Kumar
  'Towards Shyama Prasad Mukherjee Road':    { hi: 'श्यामा प्रसाद मुखर्जी रोड की ओर',            bn: 'শ্যামাপ্রসাদ মুখার্জি রোডের দিকে' },
  'Tollygunge Railway Station':              { hi: 'टॉलीगंज रेलवे स्टेशन',                      bn: 'টালিগঞ্জ রেলওয়ে স্টেশন' },
  'Bhavani Cinema / Charu Market / Tollygunge Phari': { hi: 'भवानी सिनेमा / चारु मार्केट / टॉलीगंज फाँड़ी', bn: 'ভবানী সিনেমা / চারু মার্কেট / টালিগঞ্জ ফাঁড়ি' },
  'Swiss Park / Prince Anwar Shah Road (South City Mall)': { hi: 'स्विस पार्क / प्रिंस अनवर शाह रोड (साउथ सिटी मॉल)', bn: 'সুইস পার্ক / প্রিন্স আনোয়ার শাহ রোড (সাউথ সিটি মল)' },

  // Netaji / Masterda Surya Sen
  'Kudghat Area':                            { hi: 'कुदघाट क्षेत्र',                             bn: 'কুদঘাট এলাকা' },
  'Bansdroni':                               { hi: 'बाँसद्रोणी',                                bn: 'বাঁশদ্রোণী' },

  // ─── Orange Line ──────────────────────────────────────
  'Metropolis Mall / Hiland Park':            { hi: 'मेट्रोपोलिस मॉल / हाईलैंड पार्क',             bn: 'মেট্রোপলিস মল / হাইল্যান্ড পার্ক' },
  'METRO Cash and Carry / Medisky':          { hi: 'मेट्रो कैश एंड कैरी / मेडिस्काई',            bn: 'মেট্রো ক্যাশ অ্যান্ড ক্যারি / মেডিস্কাই' },
  'Avishikta':                               { hi: 'अभिषिक्त',                                 bn: 'অভিষিক্ত' },
  'Ruby Hospital / Passport Seva Kendra':    { hi: 'रूबी अस्पताल / पासपोर्ट सेवा केंद्र',          bn: 'রুবি হাসপাতাল / পাসপোর্ট সেবা কেন্দ্র' },
};

// Words used when a gate number label joins several gates ('1 & 3').
const gateConjunction = { hi: 'और', bn: 'ও' };

/**
 * Localises a gate description (the value in station.gates).
 * @param {string} lang  'en' | 'hi' | 'bn'
 * @param {string} englishDesc  Exactly as it appears in the data files.
 */
export function translateGate(lang, englishDesc) {
  if (!englishDesc || lang === 'en') return englishDesc;
  return gateDescriptions[englishDesc]?.[lang] ?? englishDesc;
}

/**
 * Localises a gate number label (the key in station.gates), e.g. '1 & 3'.
 * Plain numbers pass through unchanged.
 */
export function translateGateLabel(lang, label) {
  const str = String(label);
  const word = gateConjunction[lang];
  return word ? str.replaceAll('&', word) : str;
}
