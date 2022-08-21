/** Pressure, MPa * */
const p8 = 1;

/** Temperature, K * */
const t8 = 1;

/** Numerical values of the coefficients of the dimensionless saturation equations * */
const n = [
  NaN,
  0.116_705_214_527_67 * 10 ** 4,
  -0.724_213_167_032_06 * 10 ** 6,
  -0.170_738_469_400_92 * 10 ** 2,
  0.120_208_247_024_70 * 10 ** 5,
  -0.323_255_503_223_33 * 10 ** 7,
  0.149_151_086_135_30 * 10 ** 2,
  -0.482_326_573_615_91 * 10 ** 4,
  0.405_113_405_420_57 * 10 ** 6,
  -0.238_555_575_678_49,
  0.650_175_348_447_98 * 10 ** 3,
];

/**
 * @param {number} ts Saturation temperature, K
 * @returns {number} ps Saturation pressure, MPa
 * */
export const getPsFromTs = (ts) => {
  if (ts <= 273.15 || ts >= 647.096) {
    throw Error('Температура меньше 273.15 K или больше 647.096 K');
  }

  /** Transformed temperature, MPa * */
  const v = (ts / t8) + (n[9] / ((ts / t8) - n[10]));

  const A = (v ** 2) + (n[1] * v) + n[2];

  const B = (n[3] * v ** 2) + (n[4] * v) + n[5];

  const C = (n[6] * v ** 2) + (n[7] * v) + n[8];

  const precision = 5;

  return Number((p8 * ((2 * C) / (-B + Math.sqrt((B * B) - 4 * A * C))) ** 4).toPrecision(precision));
};
