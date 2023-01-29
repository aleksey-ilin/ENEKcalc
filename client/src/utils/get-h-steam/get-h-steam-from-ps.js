import { getTsFromPs } from '../get-ts-from-ps';
import { calculateHSteamFromPT } from './calculate-h-steam-from-pt';

/**
 * @param {number} ps Saturation pressure of steam, MPa
 * @returns {number} h Specific enthalpy of steam, kJ/kg
 * @description Calculate enthalpy from saturation pressure for steam
 * */
export const getHSteamFromPs = (ps) => {
  if (ps <= 0) {
    throw Error('Давление должно быть больше 0 МПа');
  }

  if (ps > 100) {
    throw Error('Давление должно быть меньше 100 MPa');
  }

  const ts = getTsFromPs(ps);

  const h = calculateHSteamFromPT(ps, ts);

  return h;
};
