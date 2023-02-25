import { getDVHFromTsRegion4 } from './get-dvh-from-ts-region4';

describe('getDVHFromTsRegion4', () => {
  it('should correct calculate', () => {
    expect(getDVHFromTsRegion4(473.15)).toBe(1939.66849592886);
  });
});
