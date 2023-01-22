import { getTsFromPs } from './get-ts-from-ps';
import { getHSteamFromPT } from './get-h-steam-from-pt';
import { getHWaterFromPT } from './get-h-water-from-pt';

/**
 * @param {number} ps Saturation pressure, MPa
 * @returns {number} dvh Uncertainty in the enthalpy of vaporization, kJ/kg
 * @description Calculate uncertainty in the enthalpy of vaporization from saturation temperature
 * */
export const getDVHFromPs = (ps) => {
  console.debug(ps);

  const ts = getTsFromPs(ps);
  console.debug(ts);

  const dvh = getHSteamFromPT(ps, ts) - getHWaterFromPT(ps, ts);

  return dvh;
};
