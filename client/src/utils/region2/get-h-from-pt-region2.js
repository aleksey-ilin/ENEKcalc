import { getPsFromTsRegion4 } from '../region4/get-ps-from-ts-region4';
import { getPFromTRegionBetween23 } from '../region-between-2-3/get-p-from-t-region-between-2-3';
import { formatResult } from '../format-result';
import { calculateHFromPTRegion2 } from './calculate-h-from-pt-region2';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} ps Temperature, K
 * @returns {number} h Specific enthalpy, kJ/kg
 * */
export const getHFromPTRegion2 = (pressure, temperature) => {
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
    const ps = getPsFromTsRegion4(temperature);

    if (pressure > ps) {
      throw Error(
        `При температурe ${temperature} K давление должно быть меньше или равно`
        + ` давлению насыщения при этой температура (${formatResult(ps)} MPa)`,
      );
    }
  }

  if (temperature > 623.15 && temperature <= 863.15) {
    const pForB23 = getPFromTRegionBetween23(temperature);
    if (pressure > pForB23) {
      throw Error(
        `При температурe ${temperature} K давление должно быть меньше или равно давлению на границе`
        + ` между 2 и 3 регионами при этой температура (${formatResult(pForB23)} MPa)`,
      );
    }
  }

  const h = calculateHFromPTRegion2(pressure, temperature);

  return h;
};
