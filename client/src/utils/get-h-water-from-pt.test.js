import { getHWaterFromPT } from './get-h-water-from-pt';

describe('getHWaterFromPT', () => {
  it('should correct calculate', () => {
    expect(getHWaterFromPT(3, 300)).toBe('1,15331e+2');
    expect(getHWaterFromPT(80, 300)).toBe('1,84143e+2');
    expect(getHWaterFromPT(3, 500)).toBe('9,75542e+2');
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getHWaterFromPT(3, 273.14)).toThrow('Температура должна быть больше 273.14 K');
    expect(() => getHWaterFromPT(3, 623.16)).toThrow('Температура должна быть меньше 623.16 K');
  });

  it('should throw error if pressure is not within the valid range', () => {
    // 500)).toBe('2,6389
    // expect(() => getHWaterFromPT(2.62, 500)).toThrow('Температура должна быть больше 273.14 K'); // дописать тест
    expect(() => getHWaterFromPT(100.1, 300)).toThrow('Давление должна быть меньше 100 MPa');
  });
});
