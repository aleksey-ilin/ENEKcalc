import React from 'react';
import styles from './App.scss';
import Functions from './Functions';
import Main from './Main';
import PT from './FP';

const App = () => (
  <div className={styles.root}>
    <div className={styles.calc}>
      <Functions />
      {/* <Main /> */}
      <PT />
    </div>
  </div>
);

export default App;
