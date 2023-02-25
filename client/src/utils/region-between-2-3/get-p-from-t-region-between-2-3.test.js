import { getPFromTRegionBetween23 } from './get-p-from-t-region-between-2-3';

describe('getPFromTRegionBetween23', () => {
  it('should correct calculate', () => {
    expect(getPFromTRegionBetween23(623.150)).toBe(16.529164252621626);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getPFromTRegionBetween23(623.14)).toThrow('Температура должна быть больше 623.15 K');
    expect(() => getPFromTRegionBetween23(863.15)).toThrow('Температура должна быть меньше 863.15 K');
  });
});
