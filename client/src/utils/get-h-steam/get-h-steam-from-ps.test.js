import { getHSteamFromPs } from './get-h-steam-from-ps';

describe('getHSteamFromPs', () => {
  it('should correct calculate', () => {
    expect(getHSteamFromPs(1)).toBe(2777.119537684662);
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => getHSteamFromPs(0)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHSteamFromPs(-1)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHSteamFromPs(100.1)).toThrow('Давление должно быть меньше 100 MPa');
  });
});
