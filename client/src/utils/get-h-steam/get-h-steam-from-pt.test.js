import { getHSteamFromPT } from './get-h-steam-from-pt';

describe('getHSteamFromPT', () => {
  it('should correct calculate', () => {
    expect(getHSteamFromPT(0.0001, 273.15)).toBe(2501.3507461085296);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getHSteamFromPT(1, 273.14))
      .toThrow('Температура должна быть больше или равна 273.15 K');
    expect(() => getHSteamFromPT(1, 1073.16))
      .toThrow('Температура должна быть меньше или равна 1073.15 K');
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => getHSteamFromPT(0, 300)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHSteamFromPT(-1, 300)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHSteamFromPT(100.1, 300)).toThrow('Давление должно быть меньше 100 MPa');
  });

  it('should throw error if pressure and temperature is not within the valid range', () => {
    expect(() => getHSteamFromPT(1, 273.16)).toThrow(
      'При температурe 273.16 K давление должно быть меньше или равно давлению насыщения'
      + ' при этой температура (6,11657e-4 MPa)',
    );
    expect(() => getHSteamFromPT(28, 623.16)).toThrow(
      'При температурe 623.16 K давление должно быть меньше или равно давлению на границе между'
      + ' 2 и 3 регионами при этой температура (1,65302e+1 MPa)',
    );
    expect(() => getHSteamFromPT(0.00354, 300)).toThrow(
      'При температурe 300 K давление должно быть меньше или равно'
      + ' давлению насыщения при этой температура (3,53659e-3 MPa)',
    );
    expect(() => getHSteamFromPT(16.53, 623.15)).toThrow(
      'При температурe 623.15 K давление должно быть меньше или равно давлению насыщения'
      + ' при этой температура (1,65292e+1 MPa)',
    );
  });
});
