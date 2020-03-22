import React, { useState } from 'react';
import styles from './App.scss';
import Functions from './Functions';
import Main from './Main';
import FP from './FP';
import FT from './FT';

const mapping = {
  P: <FP />,
  T: <FT />,
};

const App = () => {
  const [activeFunction, updateActiveFunction] = useState('');

  return (
    <div className={styles.root}>
      <div className={styles.calc}>
        <Functions updateActiveFunction={updateActiveFunction} activeFunction={activeFunction} />
        {activeFunction === '' ? <Main /> : mapping[activeFunction]}
      </div>
      <button onClick={
        () => fetch('http://enek.ru:3000/?h_pt=180&h_pt=18')
        .then(response => response.json())
        .then(console.log)
      }>
        get property
      </button>
    </div>
  );
};

export default App;
