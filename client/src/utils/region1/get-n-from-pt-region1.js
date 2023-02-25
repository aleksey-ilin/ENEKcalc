import { t8, p8, numericalValues } from './constants-region1';
import { R } from '../../constants/common';
import { validateParamsRegion1 } from './validate-params-region1';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} t Temperature, K
 * @returns {number} n Specific volume, m3/kg
 * */
export const getNFromPTRegion1 = (pressure, temperature) => {
  validateParamsRegion1(pressure, temperature);

  const p = pressure / p8;

  /** Inverse reduced temperature * */
  const t = t8 / temperature;

  let gp = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gp += -n * I * ((7.1 - p) ** (I - 1)) * ((t - 1.222) ** J);
  }

  const n = (p * gp * ((R * temperature) / pressure)) / 1000;

  return n;
};
