import React from 'react';
import InitialData from './InitialData/InitialData';
import Results from './Results/Results';
import styles from './App.scss';

const App = () => (
  <div className={styles.root}>
    <InitialData />
    <Results />
  </div>
);

export default App;
