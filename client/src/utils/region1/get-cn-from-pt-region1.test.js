import { getCnFromPTRegion1 } from './get-cn-from-pt-region1';

describe('getCnFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getCnFromPTRegion1(3, 300)).toBe(4.121201603587438);
    expect(getCnFromPTRegion1(80, 300)).toBe(3.9173660618448736);
    expect(getCnFromPTRegion1(3, 500)).toBe(3.2213922290283024);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getCnFromPTRegion1(3, 273.14)).toThrow();
  });
});
