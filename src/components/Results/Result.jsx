import React from 'react'
import { Typography, Box } from '@material-ui/core'
import styles from './Result.scss'

const Result = () => (
  <Box className={styles.root} borderBottom={1}>
    <Typography className={styles.name} variant="h6" component="h3">Удельный объем</Typography>
    <Typography className={styles.value} component="span">2,14192</Typography>
    <Typography className={styles.unit} component="span">м3/кг</Typography>
  </Box>
)
export default Result
