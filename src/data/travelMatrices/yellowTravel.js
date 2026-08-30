// Distance (km) and travel time (min) between every station pair
// on the Yellow Line.
//
// Derived from cumulative distance/time from KNOA.
// travel(A, B) = |cumulative(A) - cumulative(B)|
//
// Station order:
// KNOA → KDCM → KJRO → KJHD

export const yellowTravel = {
  KNOA: {
    KNOA: { km: 0, min: 0 },
    KDCM: { km: 2.84, min: 3.7 },
    KJRO: { km: 5.12, min: 7.3 },
    KJHD: { km: 6.3, min: 10 },
  },

  KDCM: {
    KNOA: { km: 2.84, min: 3.7 },
    KDCM: { km: 0, min: 0 },
    KJRO: { km: 2.28, min: 3.6 },
    KJHD: { km: 3.46, min: 6.3 },
  },

  KJRO: {
    KNOA: { km: 5.12, min: 7.3 },
    KDCM: { km: 2.28, min: 3.6 },
    KJRO: { km: 0, min: 0 },
    KJHD: { km: 1.18, min: 2.7 },
  },

  KJHD: {
    KNOA: { km: 6.3, min: 10 },
    KDCM: { km: 3.46, min: 6.3 },
    KJRO: { km: 1.18, min: 2.7 },
    KJHD: { km: 0, min: 0 },
  },
};