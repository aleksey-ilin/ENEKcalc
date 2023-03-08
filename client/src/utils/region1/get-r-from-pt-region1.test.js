import { getRFromPTRegion1 } from './get-r-from-pt-region1';

describe('getRFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getRFromPTRegion1(3, 300)).toBe(997.852940098482);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getRFromPTRegion1(3, 273.14)).toThrow();
  });
});
