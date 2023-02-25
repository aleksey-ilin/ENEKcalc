import { getSFromTsWater } from './get-s-from-ts-water';

describe('getSFromTsWater', () => {
  it('should correct calculate', () => {
    expect(getSFromTsWater(273.17)).toBe(0.07564487391803452);
    expect(getSFromTsWater(323.15)).toBe(0.06794390594487329);
    expect(getSFromTsWater(473.15)).toBe(0.03767451239928297);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getSFromTsWater(273.15)).toThrow('Температура должна быть больше 273.16 K');
    expect(() => getSFromTsWater(647.097)).toThrow('Температура должна быть меньше 647.096 K');
  });
});
