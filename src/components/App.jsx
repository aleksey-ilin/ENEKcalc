import React, { useState } from 'react';
import styles from './App.scss';
import Main from './Main';

const App = () => {
  const [activeFunction, updateActiveFunction] = useState('');

  return (
    <div className={styles.root}>
      <div className={styles.calc}>
        <Main />
      </div>
      <button
        type="button"
        onClick={
        () => fetch('https://api.enek.dotterian.ru/?h_pt=180&h_pt=18')
          .then(response => response.json())
          .then(console.log)
        }
      >
        get property
      </button>
    </div>
  );
};

export default App;
