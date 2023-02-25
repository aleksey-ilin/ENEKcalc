import { getTsFromPsRegion4 } from './region4/get-ts-from-ps-region4';
import { getSFromTsWater } from './get-s-from-ts-water';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {number} s Surface tension of ordinary water substance, N/m
 * {@link http://www.iapws.org/relguide/Surf-H2O.html Equation}
 * */
export const getSFromPsWater = (ps) => {
  const ts = getTsFromPsRegion4(ps);
  const triplePoint = 0.01 + 273.15;
  const tc = 647.096;

  if (ts < triplePoint) {
    throw Error(`Давление должно быть больше ${ps} MPa`);
  }

  if (ts > tc) {
    throw Error(`Давление должно быть меньше ${ps} MPa`);
  }

  const s = getSFromTsWater(ts);

  return s;
};
