import { getPsFromTsRegion4 } from './get-ps-from-ts-region4';

describe('getPsFromTsRegion4', () => {
  it('should correct calculate', () => {
    expect(getPsFromTsRegion4(273.15)).toBe(0.0006112126774443448);
    expect(getPsFromTsRegion4(300)).toBe(0.0035365894130130106);
    expect(getPsFromTsRegion4(500)).toBe(2.638897756273222);
    expect(getPsFromTsRegion4(600)).toBe(12.344314578376647);
    expect(getPsFromTsRegion4(647.096)).toBe(22.064000000320625);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getPsFromTsRegion4(273.14)).toThrow('Температура должна быть больше или равна 273.15 K');
    expect(() => getPsFromTsRegion4(647.097)).toThrow('Температура должна быть меньше или равна 647.096 K');
  });
});
