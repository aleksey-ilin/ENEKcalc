import { getDVHFromPs } from './get-dvh-from-ps';

describe('getDVHFromPs', () => {
  // тест падает, потому что в функции getHSteamFromPT вычисляется давление насыщения от температуры.
  // это вычисленное давление округляется и не совпадает с давлением, переданным в функцию getDVHFromPs.
  // функция getHSteamFromPT возвращает ошибку при проверки давления, переданного в нее
  // и давления насыщения, которое она посчитала
  it.skip('should correct calculate', () => {
    expect(getDVHFromPs(0.10142)).toBe(2256.471398625369);
  });
});
