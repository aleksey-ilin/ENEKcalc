import { getPsFromTs } from './get-ps-from-ts';

describe('getPsFromTs', () => {
  it('should correct calculate', () => {
    expect(getPsFromTs(300)).toBe('3,53659e-3');
    expect(getPsFromTs(500)).toBe('2,6389');
    expect(getPsFromTs(600)).toBe('1,23443e+1');
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getPsFromTs(273.15)).toThrow('Температура должна быть больше меньше 273.15 K');
    expect(() => getPsFromTs(647.096)).toThrow('Температура должна быть меньше 647.096 K');
  });
});
