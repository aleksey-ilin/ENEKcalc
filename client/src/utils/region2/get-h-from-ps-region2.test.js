import { getHFromPsRegion2 } from './get-h-from-ps-region2';

describe('getHFromPsRegion2', () => {
  it('should correct calculate', () => {
    expect(getHFromPsRegion2(1)).toBe(2777.119537684662);
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => getHFromPsRegion2(0)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHFromPsRegion2(-1)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHFromPsRegion2(100.1)).toThrow('Давление должно быть меньше 100 MPa');
  });
});
