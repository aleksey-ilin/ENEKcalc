import { getPsFromTsRegion4 } from '../region4/get-ps-from-ts-region4';
import { getPFromTRegionBetween23 } from '../region-between-2-3/get-p-from-t-region-between-2-3';
import { formatResult } from '../format-result';
import { R } from '../../constants/common';
import { t8, p8, numericalValuesOfIdealGas, numericalValuesOfResidual } from './constants-region2';

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
    // TODO: округление используется, потому что при расчете энтальпии на линии насыщения
    // давление насыщения, переданное в параметре и рассчитанное в этой проверке могут не совпадать.
    // Надо придумать получше способ сравнивать давления
    const power = 1000000;
    const pressureRounded = Math.round(pressure * power) / power;
    const psRounded = Math.round(ps * power) / power;

    if (pressureRounded > psRounded) {
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
