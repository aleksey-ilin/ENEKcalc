import { R } from '../constants/common';
import { t8, p8, numericalValuesOfIdealGas, numericalValuesOfResidual } from '../constants/region2';
import { getPsFromTs } from './get-ps-from-ts';
import { getPFromTForB23 } from './get-p-from-t-for-b23';
import { formatResult } from './format-result';

/**
 * @param {number} ps Pressure of steam, MPa
 * @param {number} ps Temperature of steam, K
 * @returns {number} h Specific enthalpy of steam, kJ/kg
 * @description Calculate enthalpy from pressure and temperature for steam
 * */
export const getHSteamFromPT = (pressure, temperature) => {
  if (pressure <= 0) {
    throw Error('Давление должно быть больше 0 МПа');
  }

  if (pressure > 100) {
    throw Error('Давление должно быть меньше 100 MPa');
  }

  if (temperature < 273.15) {
    throw Error('Температура должна быть больше или равна 273.15 K');
  }

  if (temperature > 1073.15) {
    throw Error('Температура должна быть меньше или равна 1073.15 K');
  }

  if (temperature >= 273.15 && temperature <= 623.15) {
    const ps = getPsFromTs(temperature);
    if (pressure > ps) {
      throw Error(
        `При температурe ${temperature} K давление должно быть меньше или равно`
        + ` давлению насыщения при этой температура (${formatResult(ps)} MPa)`,
      );
    }
  }

  if (temperature > 623.15 && temperature <= 863.15) {
    const pFromTForB23 = getPFromTForB23(temperature);
    if (pressure > pFromTForB23) {
      throw Error(
        `При температурe ${temperature} K давление должно быть меньше или равно давлению на границе`
        + ` между 2 и 3 регионами при этой температура (${formatResult(pFromTForB23)} MPa)`,
      );
    }
  }

  /** Inverse reduced temperature * */
  const t = t8 / temperature;

  /** Reduced pressure * */
  const p = pressure / p8;

  let g0t = 0;
  for (let i = 1; i <= 9; i += 1) {
    const { J0, n0 } = numericalValuesOfIdealGas[i];
    g0t += n0 * J0 * (t ** (J0 - 1));
  }

  let grt = 0;
  for (let i = 1; i <= 43; i += 1) {
    const { n, J, I } = numericalValuesOfResidual[i];

    grt += n * (p ** I) * J * ((t - 0.5) ** (J - 1));
  }

  const h = R * temperature * t * (g0t + grt);

  return h;
};
