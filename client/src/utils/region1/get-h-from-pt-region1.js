import { R } from '../../constants/common';
import { t8, p8, numericalValues } from './constants-region1';
import { validateParamsRegion1 } from './validate-params-region1';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} t Temperature, K
 * @returns {number} h Specific enthalpy, kJ/kg
 * */
export const getHFromPTRegion1 = (pressure, temperature) => {
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

  const h = R * temperature * t * gt;

  return h;
};
