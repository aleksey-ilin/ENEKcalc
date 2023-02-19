import { getSFromPs } from './get-s-from-ps';

describe('getSFromPs', () => {
  it('should correct calculate', () => {
    expect(getSFromPs(1)).toBe(0.04221574667398309);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getSFromPs(0.0001)).toThrow('Давление должно быть больше или равно 611.213 Pa');
    expect(() => getSFromPs(22.1)).toThrow('Давление должно быть меньше или равно 22.064 MPa');
  });
});
