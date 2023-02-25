import { validateParamsRegion1 } from './validate-params-region1';

describe('validateParamsRegion1', () => {
  it('should throw error if temperature is not within the valid range', () => {
    expect(() => validateParamsRegion1(3, 273.14)).toThrow('Температура должна быть больше или равна 273.15 K');
    expect(() => validateParamsRegion1(3, 623.16)).toThrow('Температура должна быть меньше или равна 623.15 K');
  });

  it('should throw error if pressure is not within the valid range', () => {
    expect(() => validateParamsRegion1(100.1, 300)).toThrow('Давление должна быть меньше 100 MPa');
    expect(() => validateParamsRegion1(0.00353, 300))
      .toThrow('Давление должна быть больше 3,53659e-3 MPa (давления насыщения при температуре 300)');
  });
});
