import React, { useState } from 'react';
import styles from './App.scss';
import Functions from './Functions';
import Main from './Main';
import FP from './FP';

const App = () => {
  const [activeFunction, updateActiveFunction] = useState('');

  console.log(activeFunction);
  return (
    <div className={styles.root}>
      <div className={styles.calc}>
        <Functions updateActiveFunction={updateActiveFunction} />
        {activeFunction === '' ? <Main /> : <FP />}
      </div>
    </div>
  );
};

export default App;
