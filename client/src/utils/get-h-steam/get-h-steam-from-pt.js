import { getPsFromTs } from '../get-ps-from-ts';
import { getPFromTForB23 } from '../get-p-from-t-for-b23';
import { formatResult } from '../format-result';
import { calculateHSteamFromPT } from './calculate-h-steam-from-pt';

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
    const pForB23 = getPFromTForB23(temperature);
    if (pressure > pForB23) {
      throw Error(
        `При температурe ${temperature} K давление должно быть меньше или равно давлению на границе`
        + ` между 2 и 3 регионами при этой температура (${formatResult(pForB23)} MPa)`,
      );
    }
  }

  const h = calculateHSteamFromPT(pressure, temperature);

  return h;
};
