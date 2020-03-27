import React from 'react';
import { Typography, Box } from '@material-ui/core';
import styles from './Results.scss';

const Results = () => (
  <Box boxShadow={1} className={styles.root}>
    <Typography variant="h3" component="h3">
      Результаты
    </Typography>
  </Box>
);
export default Results;
