import React from 'react'
import { InitialData } from './InitialData/InitialData'
import { Results } from './Results/Results'

import styles from './App.scss'

export const App = () => (
  <div className={styles.root}>
    <InitialData />
    <Results />
    <button
      type="button"
      onClick={() => {
        fetch('http://0.0.0.0:3000/?P=1&x=1')
          .then((response) => response.json())
          .then((data) => console.log(data))
      }}
    >
      проверка сервера
    </button>
  </div>
)
