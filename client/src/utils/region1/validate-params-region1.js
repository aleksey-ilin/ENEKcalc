import { getPsFromTsRegion4 } from '../region4/get-ps-from-ts-region4';
import { formatResult } from '../format-result';

/**
 * @param {number} ps Pressure, MPa
 * @param {number} t Temperature, K
 * @description Throw error if params is not valid
 * */
export const validateParamsRegion1 = (pressure, temperature) => {
  if (temperature < 273.15) {
    throw Error('Температура должна быть больше или равна 273.15 K');
  }

  if (temperature > 623.15) {
    throw Error('Температура должна быть меньше или равна 623.15 K');
  }

  const ps = getPsFromTsRegion4(temperature);
  if (pressure < ps) {
    throw Error(
      `Давление должна быть больше ${formatResult(ps)} MPa (давления насыщения при температуре ${temperature})`,
    );
  }

  if (pressure > 100) {
    throw Error('Давление должна быть меньше 100 MPa');
  }
};
