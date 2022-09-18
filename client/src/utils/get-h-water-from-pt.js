import { R } from '../constants/common';
import { t8, p8, numericalValues } from '../constants/region1';
import { getPsFromTs } from './get-ps-from-ts';
import { formatResult } from './format-result';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {string} r Latent heat of vaporization, kJ/(kg*K)
 * */
export const getHWaterFromPT = (pressure, temperature) => {
  if (temperature < 273.15) {
    throw Error('Температура должна быть больше 273.14 K');
  }

  if (temperature > 623.15) {
    throw Error('Температура должна быть меньше 623.16 K');
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
