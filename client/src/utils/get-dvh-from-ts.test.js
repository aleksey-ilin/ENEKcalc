import { getDVHFromTs } from './get-dvh-from-ts';

describe('getDVHFromTs', () => {
  it('should correct calculate', () => {
    expect(getDVHFromTs(473.15)).toBe(1939.66849592886);
  });
});
