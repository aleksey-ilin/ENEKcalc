import React, { useState } from 'react';
import styles from './App.scss';

const App = () => {
  const [temperature, setTemperature] = useState(null);
  const [pressure, setPressure] = useState(null);

  const getPressure = () => {
  // fetch('https://api.enek.dotterian.ru/?h_pt=180&h_pt=18')
    fetch(`https://api.enek.dotterian.ru/?psat_t=${temperature}`)
      .then(response => response.json())
      .then(pressureSaturation => setPressure(pressureSaturation));
  };

  return (
    <main className={styles.root}>
      <h1>Параметры на линии насыщения</h1>
      <label htmlFor="temperature">
        Температура, &ordm;С
        <input type="number" id="temperature" onChange={e => setTemperature(e.target.value)} />
      </label>
      <button type="button" onClick={getPressure}>Рассчитать давление</button>
      <p>
        {'Давление = '}
        {pressure}
        {' бар'}
      </p>
    </main>
  );
};

export default App;
