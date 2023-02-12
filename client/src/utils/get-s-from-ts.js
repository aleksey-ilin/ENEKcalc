/**
 * @param {number} ts Saturation temperature, K
 * @returns {number} s Surface tension of ordinary water substance, N/m
 * @description Surface tension of ordinary water substance from saturation temperature
 * {@link http://www.iapws.org/relguide/Surf-H2O.html Equation}
 * */
export const getSFromTs = (ts) => {
  const triplePoint = 0.01 + 273.15;
  const tc = 647.096;

  if (ts < triplePoint) {
    throw Error('Температура должна быть больше 273.16 K');
  }

  if (ts > tc) {
    throw Error(`Температура должна быть меньше ${tc} K`);
  }

  const t = 1 - (ts / tc);
  const B = 235.8;
  const m = 1.256;
  const b = -0.625;
  const mNmInNm = 1000; // mN/m in N/m

  const s = (B * t ** m * (1 + b * t)) / mNmInNm;

  return s;
};
