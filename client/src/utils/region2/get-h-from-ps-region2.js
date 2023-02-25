import { getTsFromPsRegion4 } from '../region4/get-ts-from-ps-region4';
import { calculateHFromPTRegion2 } from './calculate-h-from-pt-region2';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {number} h Specific enthalpy, kJ/kg
 * */
export const getHFromPsRegion2 = (ps) => {
  if (ps <= 0) {
    throw Error('Давление должно быть больше 0 МПа');
  }

  if (ps > 100) {
    throw Error('Давление должно быть меньше 100 MPa');
  }

  const ts = getTsFromPsRegion4(ps);

  const h = calculateHFromPTRegion2(ps, ts);

  return h;
};
