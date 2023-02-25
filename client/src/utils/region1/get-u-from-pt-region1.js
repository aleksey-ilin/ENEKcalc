import { R } from '../../constants/common';
import { p8, t8, numericalValues } from './constants-region1';
import { validateParamsRegion1 } from './validate-params-region1';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} t Temperature, K
 * @returns {number} n Specific internal energy, kJ/kg
 * */
export const getUFromPTRegion1 = (pressure, temperature) => {
  validateParamsRegion1(pressure, temperature);

  /** Inverse reduced temperature * */
  const t = t8 / temperature;

  /** Reduced pressure * */
  const p = pressure / p8;

  let gt = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gt += n * J * ((7.1 - p) ** I) * ((t - 1.222) ** (J - 1));
  }

  let gp = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gp += -n * I * ((7.1 - p) ** (I - 1)) * ((t - 1.222) ** J);
  }

  const u = R * temperature * (t * gt - p * gp);

  return u;
};
