import React from 'react';
import { string } from 'prop-types';
import styles from './App.scss';
import Functions from './Functions';

const App = () => (
  <div className={styles.root}>
    <div className={styles.calc}>
      <Functions />
    </div>
  </div>
);

App.propTypes = {
};

export default App;
