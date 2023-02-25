import { getHFromPTRegion1 } from './get-h-from-pt-region1';

describe('getHFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getHFromPTRegion1(3, 300)).toBe(115.33127302143839);
    expect(getHFromPTRegion1(80, 300)).toBe(184.14282773425435);
    expect(getHFromPTRegion1(3, 500)).toBe(975.542239097225);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getHFromPTRegion1(3, 273.14)).toThrow();
  });
});
