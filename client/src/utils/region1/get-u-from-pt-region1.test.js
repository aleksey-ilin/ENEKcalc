import { getUFromPTRegion1 } from './get-u-from-pt-region1';

describe('getUFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getUFromPTRegion1(3, 300)).toBe(112.32481798237832);
    expect(getUFromPTRegion1(80, 300)).toBe(106.448356212524);
    expect(getUFromPTRegion1(3, 500)).toBe(971.9349850870901);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getUFromPTRegion1(3, 273.14)).toThrow();
  });
});
