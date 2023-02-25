import { R } from '../../constants/common';
import { t8, p8, numericalValues } from './constants-region1';
import { validateParamsRegion1 } from './validate-params-region1';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} t Temperature, K
 * @returns {number} h Specific isobaric heat capacity, kJ/(kg*K)
 * */
export const getCpFromPTRegion1 = (pressure, temperature) => {
  validateParamsRegion1(pressure, temperature);

  /** Inverse reduced temperature * */
  const t = t8 / temperature;

  /** Reduced pressure * */
  const p = pressure / p8;

  let gtt = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gtt += n * ((7.1 - p) ** I) * J * (J - 1) * ((t - 1.222) ** (J - 2));
  }

  const cp = R * (-((t ** 2) * gtt));

  return cp;
};
