import { getTsFromPs } from './get-ts-from-ps';

describe('getTsFromPs', () => {
  it('should correct calculate', () => {
    expect(getTsFromPs(0.1)).toBe('3,72756e+2');
    expect(getTsFromPs(1)).toBe('4,53036e+2');
    expect(getTsFromPs(10)).toBe('5,84149e+2');
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => getTsFromPs(611.213 * 10 ** -6)).toThrow('Давление должно быть больше 611.213 Pa');
    expect(() => getTsFromPs(22.064)).toThrow('Давление должно быть меньше  22.064 MPa');
  });
});
