import React from 'react';
import { Typography, Box } from '@material-ui/core';
import styles from './InitialData.scss';

const InitialData = () => (
  <Box boxShadow={1} className={styles.root}>
    <Typography variant="h3" component="h3">
      Исходные данные
    </Typography>
  </Box>
);

export default InitialData;
