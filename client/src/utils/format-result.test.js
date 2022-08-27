import { formatResult } from './format-result';

describe('formatResult', () => {
  it('should correct format', () => {
    expect(formatResult(0.03536563413013010)).toBe('3,53656e-2');
    expect(formatResult(0.3536564413013010)).toBe('3,53656e-1');
    expect(formatResult(3.536565413013010)).toBe('3,53657');
    expect(formatResult(35.36566413013010)).toBe('3,53657e+1');
    expect(formatResult(353.6567413013010)).toBe('3,53657e+2');
  });

  it('should trim trailing zeros', () => {
    expect(formatResult(0.263889776)).toBe('2,6389e-1');
    expect(formatResult(0.263899776)).toBe('2,639e-1');
    expect(formatResult(0.263999776)).toBe('2,64e-1');

    expect(formatResult(2.63889776)).toBe('2,6389');
    expect(formatResult(2.63899776)).toBe('2,639');
    expect(formatResult(2.63999776)).toBe('2,64');
  });
});
