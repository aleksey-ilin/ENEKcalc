import { getTsFromPs } from '../get-ts-from-ps';
import { getSFromTs } from './get-s-from-ts';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {number} s Surface tension of ordinary water substance, N/m
 * @description Surface tension of ordinary water substance from saturation temperature
 * {@link http://www.iapws.org/relguide/Surf-H2O.html Equation}
 * */
export const getSFromPs = (ps) => {
  const ts = getTsFromPs(ps);
  const triplePoint = 0.01 + 273.15;
  const tc = 647.096;

  if (ts < triplePoint) {
    throw Error(`Давление должно быть больше ${ps} MPa`);
  }

  if (ts > tc) {
    throw Error(`Давление должно быть меньше ${ps} MPa`);
  }

  const s = getSFromTs(ts);

  return s;
};
