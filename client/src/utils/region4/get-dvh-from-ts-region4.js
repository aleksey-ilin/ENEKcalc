import { getPsFromTsRegion4 } from './get-ps-from-ts-region4';
import { getHFromTsRegion2 } from '../region2/get-h-from-ts-region2';
import { getHFromPTRegion1 } from '../region1/get-h-from-pt-region1';

/**
 * @param {number} ts Saturation temperature, K
 * @returns {number} dvh Uncertainty in the enthalpy of vaporization, kJ/kg
 * */
export const getDVHFromTsRegion4 = (ts) => {
  const ps = getPsFromTsRegion4(ts);
  const dvh = getHFromTsRegion2(ts) - getHFromPTRegion1(ps, ts);

  return dvh;
};
