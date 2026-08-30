// Distance (km) and travel time (min) between every station pair
// on the Orange Line.
//
// Derived from cumulative distance/time from KBGA.
// travel(A, B) = |cumulative(A) - cumulative(B)|
//
// Station order:
// KBGA → KBST → KRWG → KVIB → KHMD → KKSK → KJNN → KSJR → KKVS

export const orangeTravel = {
  KBGA: {
    KBGA: { km: 0, min: 0 },
    KBST: { km: 0.9, min: 6.8 },
    KRWG: { km: 2.2, min: 8.7 },
    KVIB: { km: 3.11, min: 9.3 },
    KHMD: { km: 4.4, min: 13.7 },
    KKSK: { km: 5.42, min: 14.5 },
    KJNN: { km: 6.5, min: 18.5 },
    KSJR: { km: 8, min: 19.7 },
    KKVS: { km: 9.8, min: 23 },
  },

  KBST: {
    KBGA: { km: 0.9, min: 6.8 },
    KBST: { km: 0, min: 0 },
    KRWG: { km: 1.3, min: 1.9 },
    KVIB: { km: 2.21, min: 2.5 },
    KHMD: { km: 3.5, min: 6.9 },
    KKSK: { km: 4.52, min: 7.7 },
    KJNN: { km: 5.6, min: 11.7 },
    KSJR: { km: 7.1, min: 12.9 },
    KKVS: { km: 8.9, min: 16.2 },
  },

  KRWG: {
    KBGA: { km: 2.2, min: 8.7 },
    KBST: { km: 1.3, min: 1.9 },
    KRWG: { km: 0, min: 0 },
    KVIB: { km: 0.91, min: 0.6 },
    KHMD: { km: 2.2, min: 5 },
    KKSK: { km: 3.22, min: 5.8 },
    KJNN: { km: 4.3, min: 9.8 },
    KSJR: { km: 5.8, min: 11 },
    KKVS: { km: 7.6, min: 14.3 },
  },

  KVIB: {
    KBGA: { km: 3.11, min: 9.3 },
    KBST: { km: 2.21, min: 2.5 },
    KRWG: { km: 0.91, min: 0.6 },
    KVIB: { km: 0, min: 0 },
    KHMD: { km: 1.29, min: 4.4 },
    KKSK: { km: 2.31, min: 5.2 },
    KJNN: { km: 3.39, min: 9.2 },
    KSJR: { km: 4.89, min: 10.4 },
    KKVS: { km: 6.69, min: 13.7 },
  },

  KHMD: {
    KBGA: { km: 4.4, min: 13.7 },
    KBST: { km: 3.5, min: 6.9 },
    KRWG: { km: 2.2, min: 5 },
    KVIB: { km: 1.29, min: 4.4 },
    KHMD: { km: 0, min: 0 },
    KKSK: { km: 1.02, min: 0.8 },
    KJNN: { km: 2.1, min: 4.8 },
    KSJR: { km: 3.6, min: 6 },
    KKVS: { km: 5.4, min: 9.3 },
  },

  KKSK: {
    KBGA: { km: 5.42, min: 14.5 },
    KBST: { km: 4.52, min: 7.7 },
    KRWG: { km: 3.22, min: 5.8 },
    KVIB: { km: 2.31, min: 5.2 },
    KHMD: { km: 1.02, min: 0.8 },
    KKSK: { km: 0, min: 0 },
    KJNN: { km: 1.08, min: 4 },
    KSJR: { km: 2.58, min: 5.2 },
    KKVS: { km: 4.38, min: 8.5 },
  },

  KJNN: {
    KBGA: { km: 6.5, min: 18.5 },
    KBST: { km: 5.6, min: 11.7 },
    KRWG: { km: 4.3, min: 9.8 },
    KVIB: { km: 3.39, min: 9.2 },
    KHMD: { km: 2.1, min: 4.8 },
    KKSK: { km: 1.08, min: 4 },
    KJNN: { km: 0, min: 0 },
    KSJR: { km: 1.5, min: 1.2 },
    KKVS: { km: 3.3, min: 4.5 },
  },

  KSJR: {
    KBGA: { km: 8, min: 19.7 },
    KBST: { km: 7.1, min: 12.9 },
    KRWG: { km: 5.8, min: 11 },
    KVIB: { km: 4.89, min: 10.4 },
    KHMD: { km: 3.6, min: 6 },
    KKSK: { km: 2.58, min: 5.2 },
    KJNN: { km: 1.5, min: 1.2 },
    KSJR: { km: 0, min: 0 },
    KKVS: { km: 1.8, min: 3.3 },
  },

  KKVS: {
    KBGA: { km: 9.8, min: 23 },
    KBST: { km: 8.9, min: 16.2 },
    KRWG: { km: 7.6, min: 14.3 },
    KVIB: { km: 6.69, min: 13.7 },
    KHMD: { km: 5.4, min: 9.3 },
    KKSK: { km: 4.38, min: 8.5 },
    KJNN: { km: 3.3, min: 4.5 },
    KSJR: { km: 1.8, min: 3.3 },
    KKVS: { km: 0, min: 0 },
  },
};