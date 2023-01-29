import { getPsFromTs } from '../get-ps-from-ts';
// import { getPFromTForB23 } from '../get-p-from-t-for-b23';
// import { formatResult } from '../format-result';
import { calculateHSteamFromPT } from './calculate-h-steam-from-pt';

/**
 * @param {number} ps Saturation temperature of steam, K
 * @returns {number} h Specific enthalpy of steam, kJ/kg
 * @description Calculate enthalpy from saturation temperature for steam
 * */
export const getHSteamFromTs = (ts) => {
  if (ts < 273.15) {
    throw Error('Температура должна быть больше или равна 273.15 K');
  }

  if (ts > 1073.15) {
    throw Error('Температура должна быть меньше или равна 1073.15 K');
  }

  const ps = getPsFromTs(ts);

  // предполагаю что ps > pForB23 невозможно. уточнить
  // if (ts > 623.15 && ts <= 863.15) {
  //   const pForB23 = getPFromTForB23(ts);

  //   if (ps > pForB23) {
  //     throw Error(
  //       `При температурe ${ts} K давление должно быть меньше или равно давлению на границе`
  //       + ` между 2 и 3 регионами при этой температура (${formatResult(pForB23)} MPa)`,
  //     );
  //   }
  // }

  const h = calculateHSteamFromPT(ps, ts);

  return h;
};
