import { getHFromPTRegion2 } from './get-h-from-pt-region2';

describe('getHFromPTRegion2', () => {
  it('should correct calculate', () => {
    expect(getHFromPTRegion2(0.0001, 273.15)).toBe(2501.3507461085296);
    expect(getHFromPTRegion2(0.0035, 300)).toBe(2549.9114508400203);
    expect(getHFromPTRegion2(0.0035365894130130106, 300)).toBe(2549.893008307326);
    expect(getHFromPTRegion2(0.0035, 700)).toBe(3335.683753731224);
    expect(getHFromPTRegion2(30, 700)).toBe(2631.494744844808);
  });

  it('should throw error if temperature is not within the valid range', () => {
    expect(() => getHFromPTRegion2(1, 273.14))
      .toThrow('Температура должна быть больше или равна 273.15 K');
    expect(() => getHFromPTRegion2(1, 1073.16))
      .toThrow('Температура должна быть меньше или равна 1073.15 K');
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => getHFromPTRegion2(0, 300)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHFromPTRegion2(-1, 300)).toThrow('Давление должно быть больше 0 МПа');
    expect(() => getHFromPTRegion2(100.1, 300)).toThrow('Давление должно быть меньше 100 MPa');
  });

  it('should throw error if pressure and temperature is not within the valid range', () => {
    expect(() => getHFromPTRegion2(1, 273.16)).toThrow(
      'При температурe 273.16 K давление должно быть меньше или равно давлению насыщения'
      + ' при этой температура (6,11657e-4 MPa)',
    );
    expect(() => getHFromPTRegion2(28, 623.16)).toThrow(
      'При температурe 623.16 K давление должно быть меньше или равно давлению на границе между'
      + ' 2 и 3 регионами при этой температура (1,65302e+1 MPa)',
    );
    expect(() => getHFromPTRegion2(0.00354, 300)).toThrow(
      'При температурe 300 K давление должно быть меньше или равно'
      + ' давлению насыщения при этой температура (3,53659e-3 MPa)',
    );
    expect(() => getHFromPTRegion2(16.53, 623.15)).toThrow(
      'При температурe 623.15 K давление должно быть меньше или равно давлению насыщения'
      + ' при этой температура (1,65292e+1 MPa)',
    );
  });
});
