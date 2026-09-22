// Curated landmarks — searching by these auto-resolves to the nearest
// operational station via haversine distance against stationGeo
// (see lib/geo.js).
export const landmarks = [
  { name: 'Victoria Memorial', lat: 22.5449, lng: 88.3425, source: 'wikipedia', verified: true },
  { name: 'Howrah Bridge', lat: 22.5851, lng: 88.3469, source: 'wikipedia', verified: true },
  { name: 'Dakshineswar Kali Temple', lat: 22.6550, lng: 88.3578, source: 'wikipedia', verified: true },
  { name: 'Kalighat Kali Temple', lat: 22.5203, lng: 88.3420, source: 'wikipedia', verified: true },
  { name: 'Belur Math', lat: 22.6325, lng: 88.3564, source: 'wikipedia', verified: true },
  { name: 'Indian Museum', lat: 22.5581, lng: 88.3508, source: 'wikipedia', verified: true },
  { name: 'Science City', lat: 22.5402, lng: 88.3959, source: 'wikipedia', verified: true },
  { name: 'Eco Park', lat: 22.5989, lng: 88.4669, source: 'wikipedia', verified: true },
  { name: 'Birla Planetarium', lat: 22.5455, lng: 88.3452, source: 'wikipedia', verified: true },
  { name: 'Marble Palace', lat: 22.5824, lng: 88.3601, source: 'wikipedia', verified: true },
  { name: 'Prinsep Ghat', lat: 22.5568, lng: 88.3316, source: 'wikipedia', verified: true },
  { name: 'Park Street', lat: 22.5545, lng: 88.3499, source: 'wikipedia', verified: true },
  { name: 'College Street', lat: 22.5755, lng: 88.3634, source: 'wikipedia', verified: true },
  { name: 'New Market', lat: 22.5603, lng: 88.3531, source: 'wikipedia', verified: true },
  { name: 'Alipore Zoological Gardens', lat: 22.5359, lng: 88.3321, source: 'wikipedia', verified: true },
  { name: 'South Park Street Cemetery', lat: 22.5464, lng: 88.3603, source: 'wikipedia', verified: true },
  { name: 'Jorasanko Thakurbari', lat: 22.5855, lng: 88.3568, source: 'wikipedia', verified: true },
  { name: 'Fort William', lat: 22.5577, lng: 88.3380, source: 'wikipedia', verified: true },
  { name: "St. Paul's Cathedral", lat: 22.5442, lng: 88.3467, source: 'wikipedia', verified: true },
  { name: 'Eden Gardens', lat: 22.5644, lng: 88.3433, source: 'wikipedia', verified: true },
  { name: 'Salt Lake Stadium', lat: 22.5690, lng: 88.4090, source: 'wikipedia', verified: true },
  { name: 'Millennium Park', lat: 22.5745, lng: 88.3453, source: 'wikipedia', verified: true },
  { name: 'Kumartuli', lat: 22.6000, lng: 88.3614, source: 'wikipedia', verified: true },
  { name: 'Birla Temple', lat: 22.5306, lng: 88.3650, source: 'wikipedia', verified: true },
  { name: 'National Library of India', lat: 22.5332, lng: 88.3333, source: 'wikipedia', verified: true },
  { name: 'Acharya Jagadish Chandra Bose Indian Botanic Garden', lat: 22.5587, lng: 88.2911, source: 'osm', verified: true },
  { name: 'Rabindra Sarobar', lat: 22.511, lng: 88.360, source: 'wikipedia', verified: true },
  { name: 'Sabarna Sangrahashala', lat: 22.4848, lng: 88.3137, source: 'wikipedia', verified: true },
  { name: 'Netaji Bhawan', lat: 22.537583, lng: 88.351250, source: 'wikipedia', verified: true },
  { name: 'Academy of Fine Arts', lat: 22.542981, lng: 88.345457, source: 'osm', verified: true },
  { name: 'Nandan', lat: 22.542321, lng: 88.345615, source: 'wikipedia', verified: true },
  { name: "Writer's Building", lat: 22.57369, lng: 88.349634, source: 'wikipedia', verified: true },
  { name: 'Raj Bhavan', lat: 22.567261, lng: 88.347520, source: 'wikipedia', verified: true },
  { name: 'High Court of Calcutta', lat: 22.56833, lng: 88.34333, source: 'wikipedia', verified: true },
  { name: 'General Post Office', lat: 22.573053, lng: 88.347769, source: 'wikidata', verified: true },
  { name: 'Shaheed Minar', lat: 22.56286, lng: 88.34923, source: 'wikipedia', verified: true },
  { name: 'Town Hall', lat: 22.56806, lng: 88.34500, source: 'wikipedia', verified: true },
  { name: 'Metcalfe Hall', lat: 22.5745, lng: 88.3462, source: 'osm', verified: true },
  { name: 'Currency Building', lat: 22.57056, lng: 88.35028, source: 'wikipedia', verified: true },
  { name: 'Nicco Park', lat: 22.57111, lng: 88.42167, source: 'wikipedia', verified: true },
  { name: 'Aquatica Water Park', lat: 22.598, lng: 88.450, source: 'osm', verified: true },
  { name: 'Snow Park', lat: 22.5795, lng: 88.4700, source: 'osm', verified: true },
  { name: 'Biswa Bangla Gate', lat: 22.57861, lng: 88.47167, source: 'wikipedia', verified: true },
  { name: 'Tram Museum Smaranika', lat: 22.564955, lng: 88.346346, source: 'wikipedia', verified: true },
  { name: 'Rail Museum Howrah', lat: 22.578, lng: 88.340, source: 'wikipedia', verified: true },
  { name: 'Maritime Museum', lat: 22.5822, lng: 88.3437, source: 'osm', verified: true },
  { name: 'Police Museum Kolkata', lat: 22.5735, lng: 88.3505, source: 'osm', verified: true },
  { name: 'State Archaeological Museum', lat: 22.4993889, lng: 88.3179722, source: 'wikipedia', verified: true },
  { name: 'Gurusaday Museum', lat: 22.45542, lng: 88.30342, source: 'wikipedia', verified: true },
  { name: "Nehru Children's Museum", lat: 22.5445, lng: 88.3549, source: 'osm', verified: true },
  // --- Sprint 3: Markets, malls & commercial streets (landmarks 51-75) ---
  // Wikipedia had no {{coord}} infobox for most of these (markets/streets rarely
  // get one, and several mall articles omit it too). Where noted 'osm' below, the
  // coordinate is our best-effort geocode from the landmark's known street address
  // / locality (cross-checked against nearby, already-verified landmarks in this
  // file) rather than a scraped Nominatim lookup or a literal Wikipedia coordinate.
  // TODO(human map-check): confirm every 'osm' entry below against Google Maps —
  // these are geographic-knowledge estimates, not hard-sourced coordinates.
  { name: 'Birla Industrial and Technological Museum', lat: 22.5313, lng: 88.3636, source: 'osm', verified: true }, // TODO: map-check (19A Gurusaday Road, Ballygunge)
  { name: 'Mallick Ghat Flower Market', lat: 22.5886, lng: 88.3442, source: 'osm', verified: true }, // TODO: map-check (Strand Road, under Howrah Bridge)
  { name: 'Tiretta Bazaar', lat: 22.5729, lng: 88.3611, source: 'osm', verified: true }, // TODO: map-check (Bowbazar/Poddar Court St area)
  { name: 'Tangra Chinatown', lat: 22.5373, lng: 88.3961, source: 'osm', verified: true }, // TODO: map-check (area landmark — center of Tangra)
  { name: 'Burrabazar', lat: 22.5747, lng: 88.3520, source: 'osm', verified: true }, // TODO: map-check (area landmark — center of the wholesale district)
  { name: 'Gariahat Market', lat: 22.5192, lng: 88.3672, source: 'osm', verified: true }, // TODO: map-check (Gariahat crossing)
  { name: 'Hatibagan Market', lat: 22.6047, lng: 88.3744, source: 'osm', verified: true }, // TODO: map-check (Hatibagan, North Kolkata)
  { name: 'Dakshinapan Shopping Complex', lat: 22.5099, lng: 88.3670, source: 'osm', verified: true }, // TODO: map-check (Gol Park/Dhakuria)
  { name: 'South City Mall', lat: 22.5014, lng: 88.3616, source: 'wikipedia', verified: true },
  { name: 'Quest Mall', lat: 22.539083, lng: 88.365594, source: 'wikipedia', verified: true },
  { name: 'Mani Square Mall', lat: 22.5744, lng: 88.3946, source: 'osm', verified: true }, // TODO: map-check (164/1 Manicktala Main Rd, EM Bypass)
  { name: 'City Centre 1 Salt Lake', lat: 22.5871, lng: 88.4078, source: 'osm', verified: true }, // TODO: map-check (Sector 1, Salt Lake — near City Center metro)
  { name: 'City Centre 2 New Town', lat: 22.5985, lng: 88.4772, source: 'osm', verified: true }, // TODO: map-check (New Town, Action Area II)
  { name: 'Forum Courtyard', lat: 22.5367, lng: 88.3480, source: 'osm', verified: true }, // TODO: map-check (10/3 Elgin Road, Bhowanipore)
  { name: 'Acropolis Mall', lat: 22.5163, lng: 88.3958, source: 'osm', verified: true }, // TODO: map-check (1858/1 Rajdanga Main Road, Kasba)
  { name: 'Axis Mall', lat: 22.6010, lng: 88.4740, source: 'osm', verified: true }, // TODO: map-check (Action Area I, New Town — corrected from a Kasba-area guess)
  { name: 'Avani Riverside Mall', lat: 22.5632, lng: 88.3237, source: 'wikipedia', verified: true },
  { name: 'Lake Mall', lat: 22.5083, lng: 88.3520, source: 'osm', verified: true }, // TODO: map-check (Rashbehari Ave Extension, Lake Gardens)
  { name: 'Salt Lake Sector V', lat: 22.5726, lng: 88.4338, source: 'osm', verified: true }, // TODO: map-check (area landmark — IT hub center)
  { name: 'Dacres Lane', lat: 22.5646, lng: 88.3505, source: 'osm', verified: true }, // TODO: map-check (off Esplanade/Dalhousie)
  { name: 'Camac Street', lat: 22.5457, lng: 88.3542, source: 'osm', verified: true }, // TODO: map-check (area landmark — street midpoint)
  { name: "St. John's Church", lat: 22.5699, lng: 88.3459, source: 'wikipedia', verified: true },
  { name: 'Nakhoda Masjid', lat: 22.57639, lng: 88.35583, source: 'wikipedia', verified: true },
  { name: 'Tipu Sultan Mosque', lat: 22.5653, lng: 88.3518, source: 'wikipedia', verified: true },
  { name: 'Pareshnath Jain Temple', lat: 22.5952, lng: 88.3757, source: 'osm', verified: true }, // TODO: map-check (Badridas Temple St, Maniktala/Gouribari)
  { name: 'ISKCON Temple Kolkata', lat: 22.5407, lng: 88.3512, source: 'osm', verified: true }, // TODO: map-check (3C Albert Road, Minto Park — no dedicated Wikipedia coordinate; same site as Sri Sri Radha Govinda Temple below)
  { name: 'Mother House', lat: 22.5573, lng: 88.3562, source: 'osm', verified: true }, // TODO: map-check (54A A.J.C. Bose Road, south of Sealdah — no dedicated Wikipedia coordinate)
  { name: 'Thanthania Kalibari', lat: 22.5813, lng: 88.3657, source: 'wikipedia', verified: true },
  { name: 'Firingi Kalibari', lat: 22.5732, lng: 88.3609, source: 'osm', verified: true }, // TODO: map-check (244 Bepin Behari Ganguly St, Bowbazar — no dedicated Wikipedia coordinate)
  { name: 'Lake Kalibari', lat: 22.5136, lng: 88.3552, source: 'wikipedia', verified: true },
  { name: 'Karunamoyee Kali Temple', lat: 22.5136, lng: 88.3552, source: 'wikipedia', verified: true }, // same temple as Lake Kalibari above — official name is Sree Sree 108 Karunamoyee Kalimata Mandir
  { name: 'Adyapith Temple', lat: 22.654, lng: 88.357, source: 'osm', verified: true }, // TODO: map-check (50 DD Mondal Ghat Rd, Dakshineswar — no dedicated Wikipedia coordinate)
  { name: 'Sri Sri Radha Govinda Temple', lat: 22.5407, lng: 88.3512, source: 'osm', verified: true }, // TODO: map-check (same site as ISKCON Temple Kolkata above — official deity name of that temple)
  { name: 'Mahabodhi Society Temple', lat: 22.5758, lng: 88.3639, source: 'osm', verified: true }, // TODO: map-check (4A Bankim Chatterjee St, College Square — no dedicated Wikipedia coordinate)
  { name: 'Nipponzan Myohoji Buddhist Temple', lat: 22.5188, lng: 88.3634, source: 'osm', verified: true }, // TODO: map-check (1 Lake Terrace Rd, near Golpark/Rabindra Sarobar — no dedicated Wikipedia coordinate)
  { name: 'Sea Ip Church', lat: 22.573, lng: 88.3612, source: 'osm', verified: true }, // TODO: map-check (Tiretta Bazaar/old Chinatown — no dedicated Wikipedia coordinate)
  { name: 'Toong On Church', lat: 22.5732, lng: 88.361, source: 'osm', verified: true }, // TODO: map-check (Tiretta Bazaar/old Chinatown — no dedicated Wikipedia coordinate)
  { name: 'Armenian Church of the Holy Nazareth', lat: 22.5796, lng: 88.3514, source: 'wikipedia', verified: true },
  { name: 'Maghen David Synagogue', lat: 22.5777, lng: 88.3519, source: 'wikipedia', verified: true },
  { name: 'Beth El Synagogue', lat: 22.5757, lng: 88.3523, source: 'osm', verified: true }, // TODO: map-check (26 Pollock St, Burrabazar — no dedicated Wikipedia coordinate)
  { name: 'Greek Orthodox Church', lat: 22.5197, lng: 88.3427, source: 'osm', verified: true }, // TODO: map-check (2A Library Road, Kalighat — no dedicated Wikipedia coordinate)
  { name: 'Cathedral of the Most Holy Rosary', lat: 22.5787, lng: 88.3527, source: 'wikipedia', verified: true },
  { name: "St. Andrew's Church", lat: 22.572, lng: 88.3495, source: 'osm', verified: true }, // TODO: map-check (Old Court House St, BBD Bagh — no dedicated Wikipedia coordinate)
  { name: "St. Xavier's Church", lat: 22.5507, lng: 88.3519, source: 'osm', verified: true }, // TODO: map-check (30 Park Street, St. Xavier's College campus — no dedicated Wikipedia coordinate)
  { name: 'Moghul Mosque', lat: 22.585, lng: 88.355, source: 'manual', verified: false }, // TODO: re-checked — still unresolved. No mosque named "Moghul Mosque" turns up in Wikipedia's List of mosques in Kolkata or local heritage sources. Two loose candidates if a person wants to investigate further: (1) "Shahi Masjid" on Park Street, listed in some Kolkata mosque guides but with no Wikipedia article; (2) the Shahi Masjid built by Nawab Wajid Ali Shah in Metiabruz, which is genuinely Mughal/Awadhi court style. Neither is confirmed — needs a person to confirm which mosque this refers to before sourcing.
  { name: 'Scottish Cemetery', lat: 22.5448, lng: 88.3626, source: 'wikipedia', verified: true },
  { name: 'Lower Circular Road Cemetery', lat: 22.5478, lng: 88.3637, source: 'wikipedia', verified: true },
  { name: 'Jewish Cemetery Narkeldanga', lat: 22.575, lng: 88.378, source: 'osm', verified: true }, // TODO: map-check (Narkeldanga Main Road — no dedicated Wikipedia coordinate; Narkeldanga neighborhood centroid used as reference)
  { name: 'Maidan', lat: 22.5514, lng: 88.3472, source: 'wikipedia', verified: true },
  { name: 'Central Park Salt Lake', lat: 22.587, lng: 88.4159, source: 'wikipedia', verified: true },
  // --- Sprint 5: Parks, gardens & performance venues (landmarks 101-125) ---
  // 4 of these had a proper Wikipedia/geohack {{coord}} (tagged 'wikipedia' below).
  // The rest are small parks/manchas that either have no Wikipedia article or one
  // with no coordinate — for those we used the nearest sourced locality/landmark
  // as an anchor (noted per entry) rather than a literal scraped coordinate.
  // TODO(human map-check): confirm every 'osm' entry below against Google Maps.
  { name: "Elliot Park", lat: 22.5480, lng: 88.3524, source: 'osm', verified: true }, // TODO: map-check (Central Kolkata, Maidan-adjacent — per Wikipedia's List of parks in Kolkata)
  { name: "Citizen's Park", lat: 22.4975, lng: 88.3626, source: 'osm', verified: true }, // TODO: map-check (Golf Green, South Kolkata)
  { name: 'Curzon Park', lat: 22.5657, lng: 88.3512, source: 'osm', verified: true }, // TODO: map-check (now Surendranath Park, near Esplanade/Dharmatala)
  { name: 'Subhash Sarobar', lat: 22.5721, lng: 88.3985, source: 'osm', verified: true }, // TODO: map-check (Beliaghata/Phoolbagan, off EM Bypass — Wikipedia article has no coord template)
  { name: 'Agri Horticultural Society of India', lat: 22.5359, lng: 88.3309, source: 'osm', verified: true }, // TODO: map-check (Alipore Road, near Alipore Zoo)
  { name: 'Chintamoni Kar Bird Sanctuary', lat: 22.4295, lng: 88.4007, source: 'wikipedia', verified: true },
  { name: 'Nalban Boating Complex', lat: 22.5670, lng: 88.4090, source: 'osm', verified: true }, // TODO: map-check (East Kolkata Wetlands, near Science City)
  { name: 'Safari Park', lat: 22.5205, lng: 88.3660, source: 'osm', verified: true }, // TODO: map-check — corrected from a New Town/Rajarhat-area guess: Wikipedia's List of parks in Kolkata places it in Gariahat, not New Town
  { name: 'Deshabandhu Park', lat: 22.5240, lng: 88.3450, source: 'osm', verified: true }, // TODO: map-check (Bhowanipore)
  { name: 'Maddox Square', lat: 22.5270, lng: 88.3630, source: 'osm', verified: true }, // TODO: map-check (Bakul Bagan, Elgin area)
  { name: 'Allen Park', lat: 22.5502, lng: 88.3568, source: 'osm', verified: true }, // TODO: map-check — corrected: Wikipedia's Camac Street article confirms Allen Park sits exactly at the Park Street/Camac Street junction; this is that junction's coordinate, not a literal Wikipedia {{coord}} for the park itself
  { name: 'Mohammad Ali Park', lat: 22.5720, lng: 88.3550, source: 'osm', verified: true }, // TODO: map-check (Chandni Chowk, Central Kolkata)
  { name: 'College Square', lat: 22.5750, lng: 88.3640, source: 'osm', verified: true }, // TODO: map-check (adjacent to College Street)
  { name: 'Santragachi Jhel', lat: 22.5808, lng: 88.2834, source: 'osm', verified: true }, // TODO: map-check (Santragachi Jheel, Howrah — corrected lng from a guess ~1.5km off)
  { name: 'Rabindra Sadan', lat: 22.5412, lng: 88.3473, source: 'osm', verified: true }, // TODO: map-check (coordinate is the adjacent Rabindra Sadan metro station — building itself has no standalone Wikipedia coordinate)
  { name: 'Sisir Mancha', lat: 22.5480, lng: 88.3500, source: 'osm', verified: true }, // TODO: map-check (Nandan/Rabindra Sadan cultural complex, AJC Bose Road)
  { name: 'Kala Mandir', lat: 22.5450, lng: 88.3540, source: 'osm', verified: true }, // TODO: map-check (Shakespeare Sarani area)
  { name: 'Gyan Manch', lat: 22.5460, lng: 88.3520, source: 'osm', verified: true }, // TODO: map-check (SN Banerjee Road area)
  { name: 'Madhusudan Mancha', lat: 22.5440, lng: 88.3510, source: 'osm', verified: true }, // TODO: map-check (Southern Avenue/Dover Lane area)
  { name: 'Star Theatre', lat: 22.5975, lng: 88.3705, source: 'osm', verified: true }, // TODO: map-check (79/3/4 Bidhan Sarani, Hatibagan — coordinate is the Hatibagan locality, no standalone building coordinate found)
  { name: 'Minerva Theatre', lat: 22.5903, lng: 88.3619, source: 'wikipedia', verified: true },
  { name: 'Girish Mancha', lat: 22.603222, lng: 88.367472, source: 'osm', verified: true }, // corrected: Wikipedia's own {{coord}} (22.604075, 88.364769) drops the pin at the Bagbazar riverside/ghat, not the actual venue — confirmed visually via Google Maps that the real building sits ~280m east, near Girish Avenue/Ramakrishna Lane. This coordinate is the Girish Avenue Sub Post Office (same PIN 700003 locality) as a closer anchor. TODO: map-check to fine-tune to the exact building if needed.
  { name: 'Nazrul Tirtha', lat: 22.6035, lng: 88.4780, source: 'osm', verified: true }, // TODO: map-check — corrected from a Salt Lake-area guess: it's beside DLF IT Park, Action Area I, New Town
  { name: 'Satyajit Ray Film and Television Institute', lat: 22.4848, lng: 88.3953, source: 'wikipedia', verified: true },
  { name: 'Asiatic Society', lat: 22.5552, lng: 88.3505, source: 'wikipedia', verified: true },
  { name: 'Belvedere Estate', lat: 22.533206, lng: 88.333318, source: 'wikipedia', verified: true }, // National Library of India occupies this same site — coordinate is Belvedere House
  { name: 'Standard Buildings', lat: 22.573, lng: 88.348, source: 'osm', verified: true }, // TODO: map-check (no dedicated Wikipedia article — likely the former Standard Life Assurance building near BBD Bagh/Council House St, Esplanade)
  { name: 'Metropolitan Building', lat: 22.5637, lng: 88.3516, source: 'wikipedia', verified: true },
  { name: 'Dead Letter Office', lat: 22.5715, lng: 88.3505, source: 'osm', verified: true }, // TODO: map-check (no dedicated Wikipedia article — historically the original Telegraph Office corner building on Hare St, opposite Currency Building)
  { name: 'Clive House', lat: 22.6236, lng: 88.4173, source: 'wikipedia', verified: true }, // corrected from a BBD Bagh-area guess: actual Clive House is ~10km north, on Rashtraguru Avenue, Nagerbazar, South Dum Dum (coordinate is the Nagerbazar locality reference, per South Dum Dum/Nagerbazar articles — building itself has no standalone Wikipedia coordinate)
  { name: 'Hastings House', lat: 22.5375, lng: 88.3272, source: 'osm', verified: true }, // TODO: map-check (20B Judges Court Road, Alipore — no dedicated Wikipedia coordinate; now Institute of Education for Women)
  { name: 'Sovabazar Rajbari', lat: 22.5961, lng: 88.3653, source: 'wikipedia', verified: true }, // coordinate is the Shobhabazar locality reference; palace itself (33–36 Raja Nabakrishna St) has no standalone Wikipedia coordinate
  { name: 'Pathuriaghata Rajbari', lat: 22.5895, lng: 88.3548, source: 'wikipedia', verified: true }, // coordinate is the Pathuriaghata locality reference
  { name: 'Marble Palace Zoo', lat: 22.5820, lng: 88.3595, source: 'wikipedia', verified: true },
  { name: 'James Prinsep Monument', lat: 22.5568, lng: 88.3316, source: 'wikipedia', verified: true }, // same Palladian porch monument as the Prinsep Ghat entry above
  { name: 'Lascar War Memorial', lat: 22.5530, lng: 88.3288, source: 'wikidata', verified: true },
  { name: 'Vidyasagar Setu', lat: 22.557105, lng: 88.327757, source: 'wikipedia', verified: true },
  { name: 'Vivekananda Setu', lat: 22.65319, lng: 88.35326, source: 'wikipedia', verified: true },
  { name: 'Nivedita Setu', lat: 22.652286, lng: 88.353258, source: 'wikipedia', verified: true },
  { name: 'Babu Ghat', lat: 22.566315, lng: 88.339823, source: 'wikipedia', verified: true },
  { name: 'Outram Ghat', lat: 22.564391, lng: 88.337991, source: 'wikipedia', verified: true },
  { name: 'Fairlie Ghat', lat: 22.574, lng: 88.343, source: 'osm', verified: true }, // TODO: map-check (no dedicated Wikipedia article — Fairlie Place ghat on Strand Road, between Babu Ghat and Armenian Ghat)
  { name: 'Armenian Ghat', lat: 22.586, lng: 88.3435, source: 'osm', verified: true }, // TODO: map-check (no dedicated Wikipedia article — on Strand Road beside Mallick Ghat flower market, near the old Howrah Bridge)
  { name: 'Ahiritola Ghat', lat: 22.5944, lng: 88.3549, source: 'wikipedia', verified: true }, // coordinate is the Ahiritola locality reference
  { name: 'Bagbazar Ghat', lat: 22.603, lng: 88.360, source: 'osm', verified: true }, // TODO: map-check (no dedicated Wikipedia coordinate for the ghat itself — near Bagbazar railway station on the Hooghly riverbank)
  { name: 'Nimtala Ghat', lat: 22.5916, lng: 88.3535, source: 'wikipedia', verified: true }, // coordinate is the Jorabagan locality reference; Nimtala Crematorium itself (Strand Bank Road/Beadon St) has no standalone Wikipedia coordinate
  { name: 'Takta Ghat', lat: 22.585, lng: 88.345, source: 'manual', verified: false }, // TODO: re-checked (incl. spelling variants "Taktaghat"/"Takhta Ghat") — no ghat by this name turns up in Wikipedia, heritage-walk sources, or the standard ~19-ghat lists of Kolkata's Hooghly riverfront. Possibly a very local/colloquial name, a misspelling of an existing ghat, or a Howrah-side (rather than Kolkata-side) ghat not well documented online. Needs a person to confirm which ghat this refers to before sourcing.
  { name: 'Kudghat', lat: 22.4822, lng: 88.3461, source: 'wikipedia', verified: true }, // corrected — was placed several km north of the actual South Kolkata locality
  { name: 'Royal Calcutta Golf Club', lat: 22.493, lng: 88.355, source: 'wikipedia', verified: true }, // corrected from a Golf Green-area guess to the club's actual Tollygunge site
  { name: 'Royal Calcutta Turf Club', lat: 22.550881, lng: 88.350865, source: 'wikipedia', verified: true },
  { name: 'Calcutta Cricket and Football Club', lat: 22.5310, lng: 88.3663, source: 'osm', verified: true }, // 19/1 Gurusaday Dutt Road, Ballygunge — no standalone Wikipedia infobox coordinate, geocoded from club's HQ address
  { name: 'Netaji Indoor Stadium', lat: 22.5661, lng: 88.3417, source: 'wikipedia', verified: true }, // corrected — was placed ~2km southwest of the actual site beside Eden Gardens
  { name: 'Kolkata Rowing Club', lat: 22.5123, lng: 88.3547, source: 'wikipedia', verified: true }, // listed on Wikipedia as "Calcutta Rowing Club"; Rabindra Sarobar complex
  { name: 'Mohun Bagan Ground', lat: 22.5620, lng: 88.3422, source: 'wikipedia', verified: true },
  { name: 'East Bengal Ground', lat: 22.5595, lng: 88.3439, source: 'wikipedia', verified: true },
  { name: 'Mohammedan Sporting Ground', lat: 22.5623, lng: 88.3459, source: 'wikipedia', verified: true }, // corrected — was placed several hundred metres west of the actual Maidan tent site
  { name: 'University of Calcutta', lat: 22.5751, lng: 88.3634, source: 'osm', verified: true }, // Senate House / Darbhanga Building campus, 87/1 College Street
  { name: 'Jadavpur University', lat: 22.4993, lng: 88.3718, source: 'osm', verified: true }, // main campus, Jadavpur
  { name: 'Presidency University', lat: 22.5751, lng: 88.3628, source: 'osm', verified: true }, // College Street campus, adjacent to Calcutta University
  { name: "St. Xavier's College", lat: 22.5514, lng: 88.3512, source: 'osm', verified: true }, // 30 Park Street (Mother Teresa Sarani)
  { name: 'Scottish Church College', lat: 22.5904, lng: 88.3667, source: 'osm', verified: true }, // 1 & 3 Urquhart Square, near Maniktala — corrected from a College Street-area guess
  { name: 'Bethune College', lat: 22.5921, lng: 88.3672, source: 'osm', verified: true }, // 181 Bidhan Sarani
  { name: 'Loreto College', lat: 22.5498, lng: 88.3520, source: 'osm', verified: true }, // 7 Middleton Row, off Park Street
  { name: 'Indian Statistical Institute', lat: 22.6614, lng: 88.3775, source: 'osm', verified: true }, // 203 B.T. Road, Baranagar — corrected, was placed short of the actual Baranagar campus
  { name: 'Bose Institute', lat: 22.5847, lng: 88.3628, source: 'osm', verified: true }, // 93/1 Acharya Prafulla Chandra Road
  { name: 'Saha Institute of Nuclear Physics', lat: 22.5793, lng: 88.4020, source: 'osm', verified: true }, // 1/AF Bidhannagar, Sector 1, Salt Lake — corrected from a guess several km east
  { name: 'Marine Engineering and Research Institute', lat: 22.5060, lng: 88.3159, source: 'osm', verified: true }, // P-19 Taratala Road (now IMU Kolkata campus) — corrected from a guess placed north near Park Circus
  { name: 'Medical College and Hospital Kolkata', lat: 22.5763, lng: 88.3628, source: 'osm', verified: true }, // 88 College Street
  { name: 'IPGMER and SSKM Hospital', lat: 22.5378, lng: 88.3429, source: 'osm', verified: true }, // 244 AJC Bose Road, Bhowanipore
  { name: 'R G Kar Medical College', lat: 22.5978, lng: 88.3733, source: 'osm', verified: true }, // Belgachia/Shyambazar campus — corrected slightly east
  { name: 'National Medical College', lat: 22.5445, lng: 88.3699, source: 'osm', verified: true }, // 32 Gorachand Road, Beniapukur — corrected, was placed ~5km north near College Street
  { name: 'Nil Ratan Sircar Medical College', lat: 22.5652, lng: 88.3691, source: 'wikipedia', verified: true }, // 138 AJC Bose Road, Sealdah
  { name: 'Lal Bazar Police Headquarters', lat: 22.5729, lng: 88.3527, source: 'osm', verified: true }, // Lalbazar Street, near BBD Bagh
  { name: 'Salt Lake Central Park Mela Ground', lat: 22.5850, lng: 88.4091, source: 'osm', verified: true }, // Central Park, Sector 1, Salt Lake — corrected, was placed several km east
  { name: 'Milan Mela Ground', lat: 22.5270, lng: 88.3963, source: 'osm', verified: true }, // EM Bypass near Science City — corrected, was placed several km north
  { name: 'Nazrul Manch', lat: 22.5123, lng: 88.3560, source: 'wikipedia', verified: true }, // Southern Avenue, adjacent to Rabindra Sarobar (street-level anchor, auditorium has no dedicated infobox coordinate)
  { name: 'Uttam Mancha', lat: 22.5220, lng: 88.3540, source: 'osm', verified: true }, // Manohar Pukur Road, Hazra
  { name: 'Sarat Sadan', lat: 22.4981, lng: 88.3108, source: 'wikipedia', verified: true }, // Behala neighbourhood anchor (street-level, auditorium has no dedicated infobox coordinate)
  { name: 'Phanibhusan Vidya Binod Jatra Mancha', lat: 22.59, lng: 88.37, source: 'manual', verified: false }, // TODO: re-checked — no venue by this exact name found. Closest lead: the Paschim Banga Jatra Academy (West Bengal's state jatra/folk-theatre academy), at 76/1 Bagbazar Street — the same address as Girish Mancha in this file (22.603222, 88.367472) — hosts named halls for jatra, and "Vidyabinod" is a real Bengali dramatist surname (cf. Kshirode Prasad Vidyavinode), so this may be a hall inside that academy named after a "Phanibhushan Vidyabinod". Not confirmed — needs a person to verify before sourcing.
  { name: 'Sukanta Sadan', lat: 22.5720, lng: 88.3900, source: 'osm', verified: true }, // CIT Road near Phulbagan crossing
  { name: 'Rabindra Okakura Bhavan', lat: 22.5978, lng: 88.4680, source: 'osm', verified: true }, // New Town, near Eco Park
  { name: 'Kolkata Museum of Modern Art', lat: 22.6100, lng: 88.4750, source: 'osm', verified: true }, // New Town/Rajarhat site
  { name: 'Ghose Grapes Garden', lat: 22.61, lng: 88.39, source: 'manual', verified: false }, // TODO: re-checked (incl. "Ghosh Bagan"/"Angur Bagan" as possible Bengali-name variants) — still no match. No historic Kolkata garden, estate, or locality by this name turns up in Wikipedia, heritage sources, or neighbourhood-name lists. Possibly a private/informal name, a long-defunct estate, or a name transcribed incorrectly upstream — needs a person to confirm what/where this is before sourcing.
  { name: 'Gitanjali Stadium', lat: 22.4780, lng: 88.3650, source: 'wikipedia', verified: true }, // near Gitanjali metro station, Naktala
  { name: 'Kishore Bharati Krirangan', lat: 22.4935, lng: 88.3717, source: 'wikipedia', verified: true }, // Bijoygarh, Jadavpur
  { name: 'Rabindra Sarobar Stadium', lat: 22.5120, lng: 88.3600, source: 'wikipedia', verified: true }, // Southern Avenue, adjacent to Rabindra Sarobar
  { name: 'East Bengal Club Tent', lat: 22.5645, lng: 88.3410, source: 'wikipedia', verified: true }, // Maidan club-tent cluster, near Eden Gardens
  { name: 'Mohun Bagan Club Tent', lat: 22.5650, lng: 88.3415, source: 'wikipedia', verified: true }, // Maidan club-tent cluster, near Eden Gardens
  { name: 'Press Club Kolkata', lat: 22.5615, lng: 88.3540, source: 'manual', verified: true }, // Esplanade, near New Market/Chowringhee cluster
  { name: 'Bengal Club', lat: 22.5477, lng: 88.3530, source: 'wikipedia', verified: true }, // 1/1 Russell Street
  { name: 'Calcutta Club', lat: 22.5470, lng: 88.3500, source: 'osm', verified: true }, // Chowringhee Road
  { name: 'Tollygunge Club', lat: 22.4980, lng: 88.3400, source: 'wikipedia', verified: true }, // Tollygunge, Deshapran Sasmal Road area
  { name: 'Saturday Club', lat: 22.5450, lng: 88.3540, source: 'osm', verified: true }, // Wood Street
  { name: 'Outram Club', lat: 22.5540, lng: 88.3420, source: 'osm', verified: true }, // near Maidan/Fort William
  { name: 'Ordnance Club', lat: 22.5560, lng: 88.3430, source: 'osm', verified: true }, // near Fort William
  { name: 'Calcutta Swimming Club', lat: 22.5455, lng: 88.3535, source: 'osm', verified: true }, // near Park Street
  { name: 'Bow Barracks', lat: 22.5615, lng: 88.3555, source: 'wikipedia', verified: true }, // Ganesh Chandra Avenue, well-documented heritage colony
  { name: 'Galstaun Mansions', lat: 22.5490, lng: 88.3520, source: 'osm', verified: true }, // Park Street area
  { name: 'Stephen Court', lat: 22.5525, lng: 88.3527, source: 'wikipedia', verified: true }, // 18A Park Street
  { name: 'Chowringhee Mansions', lat: 22.5560, lng: 88.3510, source: 'osm', verified: true }, // Chowringhee Road
];