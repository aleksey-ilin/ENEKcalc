import React from 'react'

// eslint-disable-next-line import/prefer-default-export
export const properties = {
  P: {
    id: 0,
    name: 'Давление',
    unit: 'МПа',
  },
  T: {
    id: 1,
    name: 'Температура',
    unit: '°C',
  },
  v: {
    id: 2,
    name: 'Удельный объем',
    unit: <>м&sup3;/кг</>,
  },
  h: {
    id: 3,
    name: 'Энтальпия',
    unit: 'кДж/кг',
  },
  s: {
    id: 4,
    name: 'Энтропия',
    unit: 'кДж/(кг·К)',
  },
  u: {
    id: 5,
    name: 'Внутренняя энергия',
    unit: 'кДж/кг',
  },
  Cv: {
    id: 6,
    name: 'Изохорная теплоемкость',
    unit: 'кДж/(кг·К)',
  },
  Cp: {
    id: 7,
    name: 'Изобарная теплоемкость',
    unit: 'кДж/(кг·К)',
  },
  w: {
    id: 8,
    name: 'Скорость звука в среде',
    unit: 'м/с',
  },
  rho: {
    id: 9,
    name: 'Плотность',
    unit: <>кг/м&sup3;</>,
  },
  k: {
    id: 10,
    name: 'Теплопроводность',
    unit: 'Вт/(кг·К)',
  },
  mu: {
    id: 11,
    name: 'Динамическая вязкость',
    unit: 'Па·с',
  },
  nu: {
    id: 12,
    name: 'Кинематическая вязкость',
    unit: <>м&sup2;/c</>,
  },
  Prandt: {
    id: 13,
    name: 'Число Прандтля',
    unit: '',
  },
  cp_cv: {
    id: 14,
    name: 'Показатель адиабаты',
    unit: '',
  },
}
