import { getSFromPTRegion1 } from './get-s-from-pt-region1';

describe('getSFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getSFromPTRegion1(3, 300)).toBe(0.39229479240262427);
    expect(getSFromPTRegion1(80, 300)).toBe(0.36856385239848066);
    expect(getSFromPTRegion1(3, 500)).toBe(2.58041912005181);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getSFromPTRegion1(3, 273.14)).toThrow();
  });
});
