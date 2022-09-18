import { getHWaterFromPT } from './get-h-water-from-pt';

describe('getHWaterFromPT', () => {
  it('should correct calculate', () => {
    expect(getHWaterFromPT(3, 300)).toBe(115.33127302143839);
    expect(getHWaterFromPT(80, 300)).toBe(184.14282773425435);
    expect(getHWaterFromPT(3, 500)).toBe(975.542239097225);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getHWaterFromPT(3, 273.14)).toThrow('Температура должна быть больше 273.14 K');
    expect(() => getHWaterFromPT(3, 623.16)).toThrow('Температура должна быть меньше 623.16 K');
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => getHWaterFromPT(100.1, 300)).toThrow('Давление должна быть меньше 100 MPa');
    expect(() => getHWaterFromPT(0.00353, 300))
      .toThrow('Давление должна быть больше 3,53659e-3 MPa (давления насыщения при температуре 300)');
  });
});
