import React from 'react';
import { string } from 'prop-types';
import styles from './App.scss';

const App = ({ title }) => (
  <div className={styles.app}>
    <h1 className={styles.title}>{title}</h1>
  </div>
);

App.propTypes = {
  title: string.isRequired,
};

export default App;
