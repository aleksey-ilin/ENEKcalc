import { getDVHFromPs } from './get-dvh-from-ps';

describe('getDVHFromPs', () => {
  it('should correct calculate', () => {
    expect(getDVHFromPs(0.10142)).toBe(2256.471398625369);
  });
});
