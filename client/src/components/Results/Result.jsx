import React from 'react'
import { Typography, Box } from '@material-ui/core'

import styles from './Result.scss'

const Result = ({ name, value, unit }) => (
  <Box className={styles.root} borderBottom={1} mb={2}>
    <Typography className={styles.name} variant="h6" component="h3">{name}</Typography>
    {/* TODO: сделать форматирование маленьких чисел в формат 1.6176e-5 */}
    <Typography className={styles.value} component="span">{value}</Typography>
    <Typography className={styles.unit} component="span">{unit}</Typography>
  </Box>
)
export default Result
