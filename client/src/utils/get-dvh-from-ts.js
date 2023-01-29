import { getPsFromTs } from './get-ps-from-ts';
import { getHSteamFromTs } from './get-h-steam/get-h-steam-from-ts';
import { getHWaterFromPT } from './get-h-water-from-pt';

/**
 * @param {number} ts Saturation temperature, K
 * @returns {number} dvh Uncertainty in the enthalpy of vaporization, kJ/kg
 * @description Calculate uncertainty in the enthalpy of vaporization from saturation temperature
 * */
export const getDVHFromTs = (ts) => {
  const ps = getPsFromTs(ts);
  const dvh = getHSteamFromTs(ts) - getHWaterFromPT(ps, ts);

  return dvh;
};
