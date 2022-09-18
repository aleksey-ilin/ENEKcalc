import { t8, p8, n } from '../constants/region4';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {string} ts Saturation temperature, K
 * */
export const getTsFromPs = (ps) => {
  if (ps < 611.213 * 10 ** -6) {
    throw Error('Давление должно быть больше или равно 611.213 Pa');
  }

  if (ps > 22.064) {
    throw Error('Давление должно быть меньше или равно 22.064 MPa');
  }

  /** Transformed pressure* */
  const b = (ps / p8) ** (1 / 4);

  const G = (n[2] * b ** 2) + (n[5] * b) + n[8];

  const F = (n[1] * b ** 2) + (n[4] * b) + n[7];

  const E = (b ** 2) + (n[3] * b) + n[6];

  const D = (2 * G) / (-F - Math.sqrt(F ** 2 - (4 * E * G)));

  const ts = t8 * ((n[10] + D - Math.sqrt(((n[10] + D) ** 2) - 4 * (n[9] + n[10] * D))) / 2);

  return ts;
};
