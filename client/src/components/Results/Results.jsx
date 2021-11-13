import React from 'react'
import { properties } from '../../properties'
import Result from './Result'

import styles from './Results.scss'

const dataFromServer = {
  P: 0.10142, // давление
  T: 200, // температура
  v: 2.14192, // удельный объем
  h: 2875.409, // энтальпия
  s: 7.8289, // энтропия
  u: 2658.176, // внутренняя энергия
  Cv: 1.4995, // изохорная теплоемкость
  Cp: 1.9762, // изобарная теплоемкость
  w: 533.65, // скорость звука в среде
  rho: 0.4669, // плотность
  k: 0.0334, // теплопроводность
  mu: 1.6176e-5, // динамическая вязкость
  nu: 3.4649e-5, // кинематическая вязкость
  Prandt: 0.958, // число Прандтля
  cp_cv: 1.318, // показатель адиабаты
}

const Results = () => (
  <div boxShadow={1} className={styles.root}>
    <h4 className={styles.title} variant="h4" component="h2">Результаты</h4>
    {Object.keys(dataFromServer).map((property) => (
      <Result
        key={properties[property].id}
        name={properties[property].name}
        value={dataFromServer[property]}
        unit={properties[property].unit}
      />
    ))}
  </div>
)
export default Results
