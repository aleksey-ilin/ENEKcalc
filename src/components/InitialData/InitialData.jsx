import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import InitValue from './InitValue';
import styles from './InitialData.scss';

const parameters = {
  saturation: 'Состояние насыщения',
  p: 'Давление',
  t: 'Температура',
  h: 'Энтальпия',
  s: 'Энтропия',
};

const nomenclature = {
  saturation: {
    id: 0,
    name: parameters.saturation,
    units: '',
  },
  p: {
    id: 1,
    name: parameters.p,
    units: 'бар',
  },
  t: {
    id: 2,
    name: parameters.t,
    units: '°C',
  },
  h: {
    id: 3,
    name: parameters.h,
    units: 'кДж/кг',
  },
  s: {
    id: 4,
    name: parameters.s,
    units: 'кДж/кг·К',
  },
};

const InitialData = () => {
  const [initValue1, setInitValue1] = useState('p');
  const [initValue2, setInitValue2] = useState('saturation');

  const nomenclature1 = Object.keys(nomenclature).reduce((acc, parameter) => (
    (parameter === parameters.saturation || parameter === initValue2)
      ? acc
      : ({ ...acc, [parameter]: nomenclature[parameter] })), {});
  const nomenclature2 = Object.keys(nomenclature).reduce((acc, parameter) => (
    parameter === initValue1 ? acc : ({ ...acc, [parameter]: nomenclature[parameter] })), {});

  return (
    <Box boxShadow={1} className={styles.root}>
      <Typography variant="h3" component="h3">Исходные данные</Typography>
      <InitValue
        nomenclature={nomenclature1}
        defaultParameter={parameters.p}
        initValue={initValue1}
        setInitValue={setInitValue1}
      />
      <InitValue
        nomenclature={nomenclature2}
        defaultParameter={parameters.saturation}
        initValue={initValue2}
        setInitValue={setInitValue2}
      />
    </Box>
  );
};

export default InitialData;
