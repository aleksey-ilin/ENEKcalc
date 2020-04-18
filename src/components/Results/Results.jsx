import React from 'react'
import { Typography, Box } from '@material-ui/core'
import Result from './Result'
import styles from './Results.scss'

const dataFromServer = {
  v: 2.14192,
  h: 2875.409,
  s: 7.8289,
  u: 2658.176,
  Cv: 1.4995,
  Cp: 1.9762,
  w: 533.65,
  rho: 0.4669,
  tc: 0.0334,
  // динамическая вязкость
  // кинематическая вязкость
  // число Прандтля
  // показатель адиабаты
}

const Results = () => (
  <Box boxShadow={1} className={styles.root}>
    <Typography className={styles.title} variant="h4" component="h2">Результаты</Typography>
    <Result />
  </Box>
)
export default Results
