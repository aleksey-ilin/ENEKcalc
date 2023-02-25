import { getTsFromPsRegion4 } from './get-ts-from-ps-region4';
import { getHFromPTRegion2 } from '../region2/get-h-from-pt-region2';
import { getHFromPTRegion1 } from '../region1/get-h-from-pt-region1';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {number} dvh Uncertainty in the enthalpy of vaporization, kJ/kg
 * {@link http://www.iapws.org/relguide/Advise1.pdf Equation}
 * */
export const getDVHFromPsRegion4 = (ps) => {
  const ts = getTsFromPsRegion4(ps);
  const dvh = getHFromPTRegion2(ps, ts) - getHFromPTRegion1(ps, ts);

  return dvh;
};
