import { getWFromPTRegion1 } from './get-w-from-pt-region1';

describe('getWFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getWFromPTRegion1(3, 300)).toBe(1507.7392096690312);
    expect(getWFromPTRegion1(80, 300)).toBe(1634.6905431116584);
    expect(getWFromPTRegion1(3, 500)).toBe(1240.7133731017252);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getWFromPTRegion1(3, 273.14)).toThrow();
  });
});
