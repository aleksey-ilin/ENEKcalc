import React from 'react'
import { Select, MenuItem, TextField, InputAdornment } from '@material-ui/core'
import styles from './InitValue.scss'

const InitValue = ({ nomenclature, initValue, setInitValue }) => (
  <div className={styles.root}>
    <Select
      className={styles.name}
      value={initValue}
      onChange={event => setInitValue(event.target.value)}
    >
      {Object.keys(nomenclature).map(parameter => (
        <MenuItem key={nomenclature[parameter].id} value={parameter}>
          {nomenclature[parameter].name}
        </MenuItem>
      ))}
    </Select>
    {initValue !== 'saturation' && (
      <TextField
        className={styles.value}
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">{nomenclature[initValue].units}</InputAdornment>,
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={{ min: '0' }}
      />
    )}
  </div>
)

export default InitValue
