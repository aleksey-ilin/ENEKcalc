import { getNFromPTRegion1 } from './get-n-from-pt-region1';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} t Temperature, K
 * @returns {number} r Mass density, kg/m3
 * */
export const getRFromPTRegion1 = (pressure, temperature) => {
  const n = getNFromPTRegion1(pressure, temperature);
  const r = 1 / n;

  return r;
};
