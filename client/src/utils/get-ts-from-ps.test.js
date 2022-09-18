import { getTsFromPs } from './get-ts-from-ps';

describe('getTsFromPs', () => {
  it('should correct calculate', () => {
    expect(getTsFromPs(611.213 * 10 ** -6)).toBe(273.15000726182984);
    expect(getTsFromPs(0.1)).toBe(372.7559186113376);
    expect(getTsFromPs(1)).toBe(453.0356323914666);
    expect(getTsFromPs(10)).toBe(584.1494879985282);
    expect(getTsFromPs(22.064)).toBe(647.0959999988119);
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => getTsFromPs(611.212 * 10 ** -6)).toThrow('Давление должно быть больше или равно 611.213 Pa');
    expect(() => getTsFromPs(22.065)).toThrow('Давление должно быть меньше или равно 22.064 MPa');
  });
});
