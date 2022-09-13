import { formatResult } from './format-result';
import { t8, p8, n } from '../constants/region4';

/**
 * @param {number} ts Saturation temperature, K
 * @returns {string} ps Saturation pressure, MPa
 * */
export const getPsFromTs = (ts) => {
  if (ts <= 273.15) {
    throw Error('Температура должна быть больше меньше 273.15 K');
  }

  if (ts >= 647.096) {
    throw Error('Температура должна быть меньше 647.096 K');
  }

  /** Transformed temperature * */
  const v = (ts / t8) + (n[9] / ((ts / t8) - n[10]));

  const A = (v ** 2) + (n[1] * v) + n[2];

  const B = (n[3] * v ** 2) + (n[4] * v) + n[5];

  const C = (n[6] * v ** 2) + (n[7] * v) + n[8];

  const result = p8 * ((2 * C) / (-B + Math.sqrt((B * B) - 4 * A * C))) ** 4;

  return formatResult(result);
};
