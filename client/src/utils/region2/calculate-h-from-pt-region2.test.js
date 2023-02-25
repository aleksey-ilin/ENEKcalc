import { calculateHFromPTRegion2 } from './calculate-h-from-pt-region2';

describe('calculateHFromPTRegion2', () => {
  it('should correct calculate', () => {
    expect(calculateHFromPTRegion2(0.0001, 273.15)).toBe(2501.3507461085296);
    expect(calculateHFromPTRegion2(0.0035, 300)).toBe(2549.9114508400203);
    expect(calculateHFromPTRegion2(0.0035365894130130106, 300)).toBe(2549.893008307326);
    expect(calculateHFromPTRegion2(0.0035, 700)).toBe(3335.683753731224);
    expect(calculateHFromPTRegion2(30, 700)).toBe(2631.494744844808);
  });
});
