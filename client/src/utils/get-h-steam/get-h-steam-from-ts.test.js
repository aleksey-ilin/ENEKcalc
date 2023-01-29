import { getHSteamFromTs } from './get-h-steam-from-ts';

describe('getHSteamFromTs', () => {
  it('should correct calculate', () => {
    expect(getHSteamFromTs(273.15)).toBe(2500.892617817171);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getHSteamFromTs(273.14))
      .toThrow('Температура должна быть больше или равна 273.15 K');
    expect(() => getHSteamFromTs(1073.16))
      .toThrow('Температура должна быть меньше или равна 1073.15 K');
  });
});
