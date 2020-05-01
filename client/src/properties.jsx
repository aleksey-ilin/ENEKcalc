import React from 'react'

// eslint-disable-next-line import/prefer-default-export
export const properties = {
  saturation: {
    id: 0,
    name: 'Состояние насыщения',
    units: '',
  },
  P: {
    id: 1,
    name: 'Давление',
    unit: 'МПа',
  },
  T: {
    id: 2,
    name: 'Температура',
    unit: '°C',
  },
  v: {
    id: 3,
    name: 'Удельный объем',
    unit: <>м&sup3;/кг</>,
  },
  h: {
    id: 4,
    name: 'Энтальпия',
    unit: 'кДж/кг',
  },
  s: {
    id: 5,
    name: 'Энтропия',
    unit: 'кДж/(кг·К)',
  },
  u: {
    id: 6,
    name: 'Внутренняя энергия',
    unit: 'кДж/кг',
  },
  Cv: {
    id: 7,
    name: 'Изохорная теплоемкость',
    unit: 'кДж/(кг·К)',
  },
  Cp: {
    id: 8,
    name: 'Изобарная теплоемкость',
    unit: 'кДж/(кг·К)',
  },
  w: {
    id: 9,
    name: 'Скорость звука в среде',
    unit: 'м/с',
  },
  rho: {
    id: 10,
    name: 'Плотность',
    unit: <>кг/м&sup3;</>,
  },
  k: {
    id: 11,
    name: 'Теплопроводность',
    unit: 'Вт/(кг·К)',
  },
  mu: {
    id: 12,
    name: 'Динамическая вязкость',
    unit: 'Па·с',
  },
  nu: {
    id: 13,
    name: 'Кинематическая вязкость',
    unit: <>м&sup2;/c</>,
  },
  Prandt: {
    id: 14,
    name: 'Число Прандтля',
    unit: '',
  },
  cp_cv: {
    id: 15,
    name: 'Показатель адиабаты',
    unit: '',
  },
}
