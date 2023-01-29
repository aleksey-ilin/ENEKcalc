import { R } from '../../constants/common';
import { t8, p8, numericalValuesOfIdealGas, numericalValuesOfResidual } from '../../constants/region2';

/**
 * @param {number} ps Pressure of steam, MPa
 * @param {number} ps Temperature of steam, K
 * @returns {number} h Specific enthalpy of steam, kJ/kg
 * @description Calculate enthalpy from pressure and temperature for steam
 * */
export const calculateHSteamFromPT = (pressure, temperature) => {
  /** Inverse reduced temperature * */
  const t = t8 / temperature;

  /** Reduced pressure * */
  const p = pressure / p8;

  let g0t = 0;
  for (let i = 1; i <= 9; i += 1) {
    const { J0, n0 } = numericalValuesOfIdealGas[i];
    g0t += n0 * J0 * (t ** (J0 - 1));
  }

  let grt = 0;
  for (let i = 1; i <= 43; i += 1) {
    const { n, J, I } = numericalValuesOfResidual[i];

    grt += n * (p ** I) * J * ((t - 0.5) ** (J - 1));
  }

  const h = R * temperature * t * (g0t + grt);

  return h;
};
