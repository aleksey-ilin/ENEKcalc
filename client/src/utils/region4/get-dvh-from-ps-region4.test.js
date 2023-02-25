import { getDVHFromPsRegion4 } from './get-dvh-from-ps-region4';

describe('getDVHFromPsRegion4', () => {
  it('should correct calculate', () => {
    expect(getDVHFromPsRegion4(0.10142)).toBe(2256.471398625369);
  });
});
