import { getSFromTs } from './get-s-from-ts';

describe('getSFromTs', () => {
  it('should correct calculate', () => {
    expect(getSFromTs(273.17)).toBe(0.07564487391803452);
    expect(getSFromTs(323.15)).toBe(0.06794390594487329);
    expect(getSFromTs(473.15)).toBe(0.03767451239928297);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getSFromTs(273.15)).toThrow('Температура должна быть больше 273.16 K');
    expect(() => getSFromTs(647.097)).toThrow('Температура должна быть меньше 647.096 K');
  });
});
