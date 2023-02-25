import { getSFromPsWater } from './get-s-from-ps-water';

describe('getSFromPsWater', () => {
  it('should correct calculate', () => {
    expect(getSFromPsWater(1)).toBe(0.04221574667398309);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getSFromPsWater(0.0001)).toThrow('Давление должно быть больше или равно 611.213 Pa');
    expect(() => getSFromPsWater(22.1)).toThrow('Давление должно быть меньше или равно 22.064 MPa');
  });
});
