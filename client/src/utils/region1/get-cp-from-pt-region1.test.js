import { getCpFromPTRegion1 } from './get-cp-from-pt-region1';

describe('getCpFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getCpFromPTRegion1(3, 300)).toBe(4.173012184067783);
    expect(getCpFromPTRegion1(80, 300)).toBe(4.010089869646331);
    expect(getCpFromPTRegion1(3, 500)).toBe(4.6558068221112086);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getCpFromPTRegion1(3, 273.14)).toThrow();
  });
});
