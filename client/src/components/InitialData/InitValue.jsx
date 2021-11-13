import React from 'react'

import styles from './InitValue.scss'

const InitValue = ({ nomenclature, initValue, setInitValue }) => (
  <div className={styles.root}>
    <select
      className={styles.name}
      value={initValue}
      onChange={(event) => setInitValue(event.target.value)}
    >
      {Object.keys(nomenclature).map((parameter) => (
        <p key={nomenclature[parameter].id} value={parameter}>
          {nomenclature[parameter].name}
        </p>
      ))}
    </select>
    {initValue !== 'saturation' && (
      <input
        className={styles.value}
        type="number"
      />
    )}
  </div>
)
export default InitValue
