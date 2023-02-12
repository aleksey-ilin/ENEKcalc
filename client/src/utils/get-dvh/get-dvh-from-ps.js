import { getTsFromPs } from '../get-ts-from-ps';
import { getHSteamFromPs } from '../get-h-steam/get-h-steam-from-ps';
import { getHWaterFromPT } from '../get-h-water-from-pt';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {number} dvh Uncertainty in the enthalpy of vaporization, kJ/kg
 * @description Calculate uncertainty in the enthalpy of vaporization from saturation temperature
 * */
export const getDVHFromPs = (ps) => {
  const ts = getTsFromPs(ps);
  const dvh = getHSteamFromPs(ps) - getHWaterFromPT(ps, ts);

  return dvh;
};
