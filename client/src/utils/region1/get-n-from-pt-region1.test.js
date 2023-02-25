import { getNFromPTRegion1 } from './get-n-from-pt-region1';

describe('getNFromPTRegion1', () => {
  it('should correct calculate', () => {
    expect(getNFromPTRegion1(3, 300)).toBe(0.0010021516796866943);
    expect(getNFromPTRegion1(80, 300)).toBe(0.0009711808940216295);
    expect(getNFromPTRegion1(3, 500)).toBe(0.0012024180033783393);
  });

  it('should throw error if any parameter is not valid', () => {
    expect(() => getNFromPTRegion1(3, 273.14)).toThrow();
  });
});
