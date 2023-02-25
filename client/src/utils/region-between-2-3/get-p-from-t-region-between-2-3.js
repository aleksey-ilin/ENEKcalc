import { p8, n, t8 } from './constants-region-between-2-3';

/**
 * @param {number} t Temperature, K
 * @returns {number} ps Pressure, MPa
 * @description Calculate pressure from temperature for boundary between regions 2 and 3
 * */
export const getPFromTRegionBetween23 = (temperature) => {
  if (temperature < 623.15) {
    throw Error('Температура должна быть больше 623.15 K');
  }

  if (temperature >= 863.15) {
    throw Error('Температура должна быть меньше 863.15 K');
  }

  const th = temperature / t8;
  const p = (n[1] + (n[2] * th) + (n[3] * th ** 2)) / p8;

  return p;
};
