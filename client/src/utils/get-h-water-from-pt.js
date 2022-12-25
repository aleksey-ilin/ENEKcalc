import { R } from '../constants/common';
import { t8, p8, numericalValues } from '../constants/region1';
import { getPsFromTs } from './get-ps-from-ts';
import { formatResult } from './format-result';

/**
 * @param {number} ps Pressure of water, MPa
 * @param {number} ps Temperature of water, K
 * @returns {number} h Specific enthalpy of water, kJ/kg
 * */
export const getHWaterFromPT = (pressure, temperature) => {
  if (temperature < 273.15) {
    throw Error('Температура должна быть больше или равна 273.15 K');
  }

  if (temperature > 623.15) {
    throw Error('Температура должна быть меньше или равна 623.15 K');
  }

  const ps = getPsFromTs(temperature);
  if (pressure < ps) {
    throw Error(
      `Давление должна быть больше ${formatResult(ps)} MPa (давления насыщения при температуре ${temperature})`,
    );
  }

  if (pressure > 100) {
    throw Error('Давление должна быть меньше 100 MPa');
  }

  /** Inverse reduced temperature * */
  const t = t8 / temperature;

  /** Reduced pressure * */
  const p = pressure / p8;

  let gt = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gt += n * J * ((7.1 - p) ** I) * (t - 1.222) ** (J - 1);
  }

  const h = R * temperature * t * gt;
  return h;
};
