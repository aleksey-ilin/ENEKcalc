import { R } from '../../constants/common';
import { t8, p8, numericalValues } from './constants-region1';
import { validateParamsRegion1 } from './validate-params-region1';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} t Temperature, K
 * @returns {number} h Specific isochoric heat capacity, kJ/(kg*K)
 * */
export const getCnFromPTRegion1 = (pressure, temperature) => {
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

  let gp = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gp += -n * I * ((7.1 - p) ** (I - 1)) * ((t - 1.222) ** J);
  }

  let gpt = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gpt += -n * I * ((7.1 - p) ** (I - 1)) * J * ((t - 1.222) ** (J - 1));
  }

  let gpp = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gpp += n * I * (I - 1) * ((7.1 - p) ** (I - 2)) * ((t - 1.222) ** J);
  }

  const cp = R * (-(t ** 2 * gtt) + (((gp - t * gpt) ** 2) / gpp));

  return cp;
};
