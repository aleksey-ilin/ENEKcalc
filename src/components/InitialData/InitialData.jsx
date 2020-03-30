import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import InitValue from './InitValue';
import styles from './InitialData.scss';

const nomenclature = {
  saturation: {
    id: 0,
    name: 'Состояние насыщения',
    units: '',
  },
  p: {
    id: 1,
    name: 'Давление',
    units: 'бар',
  },
  t: {
    id: 2,
    name: 'Температура',
    units: '°C',
  },
  h: {
    id: 3,
    name: 'Энтальпия',
    units: 'кДж/кг',
  },
  s: {
    id: 4,
    name: 'Энтропия',
    units: 'кДж/кг·К',
  },
};

const InitialData = () => {
  const [initValue1, setInitValue1] = useState('p');
  const [initValue2, setInitValue2] = useState('saturation');

  const nomenclature1 = Object.keys(nomenclature).reduce((acc, parameter) => (
    parameter === initValue2 ? acc : ({ ...acc, [parameter]: nomenclature[parameter] })), {});
  const nomenclature2 = Object.keys(nomenclature).reduce((acc, parameter) => (
    parameter === initValue1 ? acc : ({ ...acc, [parameter]: nomenclature[parameter] })), {});

  return (
    <Box boxShadow={1} className={styles.root}>
      <Typography className={styles.title} variant="h4" component="h2">Исходные данные</Typography>
      <InitValue
        nomenclature={nomenclature1}
        initValue={initValue1}
        setInitValue={setInitValue1}
      />
      <InitValue
        nomenclature={nomenclature2}
        initValue={initValue2}
        setInitValue={setInitValue2}
      />
    </Box>
  );
};

export default InitialData;
