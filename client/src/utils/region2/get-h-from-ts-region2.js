import { getPsFromTsRegion4 } from '../region4/get-ps-from-ts-region4';
// import { getPFromTForB23 } from '../get-p-from-t-for-b23';
// import { formatResult } from '../format-result';
import { calculateHFromPTRegion2 } from './calculate-h-from-pt-region2';

/**
 * @param {number} ps Saturation temperature, K
 * @returns {number} h Specific enthalpy, kJ/kg
 * */
export const getHFromTsRegion2 = (ts) => {
  if (ts < 273.15) {
    throw Error('Температура должна быть больше или равна 273.15 K');
  }

  if (ts > 1073.15) {
    throw Error('Температура должна быть меньше или равна 1073.15 K');
  }

  const ps = getPsFromTsRegion4(ts);

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

  const h = calculateHFromPTRegion2(ps, ts);

  return h;
};
