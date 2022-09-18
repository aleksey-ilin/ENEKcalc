import { getPsFromTs } from './get-ps-from-ts';

describe('getPsFromTs', () => {
  it('should correct calculate', () => {
    expect(getPsFromTs(273.15)).toBe(0.0006112126774443448);
    expect(getPsFromTs(300)).toBe(0.0035365894130130106);
    expect(getPsFromTs(500)).toBe(2.638897756273222);
    expect(getPsFromTs(600)).toBe(12.344314578376647);
    expect(getPsFromTs(647.096)).toBe(22.064000000320625);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getPsFromTs(273.14)).toThrow('Температура должна быть больше или равна 273.15 K');
    expect(() => getPsFromTs(647.097)).toThrow('Температура должна быть меньше или равна 647.096 K');
  });
});
