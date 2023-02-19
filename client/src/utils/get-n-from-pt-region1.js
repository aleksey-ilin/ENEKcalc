import { t8, p8, numericalValues } from '../constants/region1';
import { R } from '../constants/common';
import { getPsFromTs } from './get-ps-from-ts';
import { formatResult } from './format-result';

/**
 * @param {number} ps Pressure of water, MPa
 * @param {number} t Temperature of water, K
 * @returns {number} n Specific volume of water, m3/kg
 * */
export const getNFromPTRegion1 = (pressure, temperature) => {
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

  const p = pressure / p8;

  /** Inverse reduced temperature * */
  const t = t8 / temperature;

  let gp = 0;
  for (let i = 1; i <= 34; i += 1) {
    const { n, J, I } = numericalValues[i];

    gp += -n * I * ((7.1 - p) ** (I - 1)) * ((t - 1.222) ** J);
  }

  const n = (p * gp * ((R * temperature) / pressure)) / 1000;

  return n;
};
