import React from 'react'

import styles from './Result.scss'

const Result = ({ name, value, unit }) => (
  <div className={styles.root} borderBottom={1} mb={2}>
    <h3 className={styles.name} variant="h6" component="h3">{name}</h3>
    {/* TODO: сделать форматирование маленьких чисел в формат 1.6176e-5 */}
    <span className={styles.value} component="span">{value}</span>
    <span className={styles.unit} component="span">{unit}</span>
  </div>
)
export default Result
