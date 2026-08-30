// Distance (km) and travel time (min) between every station pair
// on the Purple Line.
//
// Derived from cumulative distance/time from KJKA.
// travel(A, B) = |cumulative(A) - cumulative(B)|
//
// Station order:
// KJKA → KTKP → KSKB → KBCR → KBBR → KTRT → KMJH

export const purpleTravel = {
  KJKA: {
    KJKA: { km: 0, min: 0 },
    KTKP: { km: 1.5, min: 2.8 },
    KSKB: { km: 2.7, min: 5.3 },
    KBCR: { km: 4.13, min: 8.2 },
    KBBR: { km: 5.5, min: 11 },
    KTRT: { km: 6.5, min: 13.3 },
    KMJH: { km: 7.75, min: 16 },
  },

  KTKP: {
    KJKA: { km: 1.5, min: 2.8 },
    KTKP: { km: 0, min: 0 },
    KSKB: { km: 1.2, min: 2.5 },
    KBCR: { km: 2.63, min: 5.4 },
    KBBR: { km: 4, min: 8.2 },
    KTRT: { km: 5, min: 10.5 },
    KMJH: { km: 6.25, min: 13.2 },
  },

  KSKB: {
    KJKA: { km: 2.7, min: 5.3 },
    KTKP: { km: 1.2, min: 2.5 },
    KSKB: { km: 0, min: 0 },
    KBCR: { km: 1.43, min: 2.9 },
    KBBR: { km: 2.8, min: 5.7 },
    KTRT: { km: 3.8, min: 8 },
    KMJH: { km: 5.05, min: 10.7 },
  },

  KBCR: {
    KJKA: { km: 4.13, min: 8.2 },
    KTKP: { km: 2.63, min: 5.4 },
    KSKB: { km: 1.43, min: 2.9 },
    KBCR: { km: 0, min: 0 },
    KBBR: { km: 1.37, min: 2.8 },
    KTRT: { km: 2.37, min: 5.1 },
    KMJH: { km: 3.62, min: 7.8 },
  },

  KBBR: {
    KJKA: { km: 5.5, min: 11 },
    KTKP: { km: 4, min: 8.2 },
    KSKB: { km: 2.8, min: 5.7 },
    KBCR: { km: 1.37, min: 2.8 },
    KBBR: { km: 0, min: 0 },
    KTRT: { km: 1, min: 2.3 },
    KMJH: { km: 2.25, min: 5 },
  },

  KTRT: {
    KJKA: { km: 6.5, min: 13.3 },
    KTKP: { km: 5, min: 10.5 },
    KSKB: { km: 3.8, min: 8 },
    KBCR: { km: 2.37, min: 5.1 },
    KBBR: { km: 1, min: 2.3 },
    KTRT: { km: 0, min: 0 },
    KMJH: { km: 1.25, min: 2.7 },
  },

  KMJH: {
    KJKA: { km: 7.75, min: 16 },
    KTKP: { km: 6.25, min: 13.2 },
    KSKB: { km: 5.05, min: 10.7 },
    KBCR: { km: 3.62, min: 7.8 },
    KBBR: { km: 2.25, min: 5 },
    KTRT: { km: 1.25, min: 2.7 },
    KMJH: { km: 0, min: 0 },
  },
};