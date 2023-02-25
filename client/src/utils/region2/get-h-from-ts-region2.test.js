import { getHFromTsRegion2 } from './get-h-from-ts-region2';

describe('getHFromTsRegion2', () => {
  it('should correct calculate', () => {
    expect(getHFromTsRegion2(273.15)).toBe(2500.892617817171);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getHFromTsRegion2(273.14))
      .toThrow('Температура должна быть больше или равна 273.15 K');
    expect(() => getHFromTsRegion2(1073.16))
      .toThrow('Температура должна быть меньше или равна 1073.15 K');
  });
});
