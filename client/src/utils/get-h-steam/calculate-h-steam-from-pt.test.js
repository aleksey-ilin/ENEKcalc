import { calculateHSteamFromPT } from './calculate-h-steam-from-pt';

describe('calculateHSteamFromPT', () => {
  it('should correct calculate', () => {
    expect(calculateHSteamFromPT(0.0001, 273.15)).toBe(2501.3507461085296);
    expect(calculateHSteamFromPT(0.0035, 300)).toBe(2549.9114508400203);
    expect(calculateHSteamFromPT(0.0035365894130130106, 300)).toBe(2549.893008307326);
    expect(calculateHSteamFromPT(0.0035, 700)).toBe(3335.683753731224);
    expect(calculateHSteamFromPT(30, 700)).toBe(2631.494744844808);
  });
});
