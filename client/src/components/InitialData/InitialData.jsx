import React, { useState } from 'react'
import { properties } from '../../properties'
import { InitValue } from './InitValue'

import styles from './InitialData.scss'

const initialPropertiesName = ['saturation', 'P', 'T', 'h', 's']
const initialProperties = Object
  .keys(properties)
  .filter((property) => initialPropertiesName.includes(property))
  .reduce((acc, property) => ({ ...acc, [property]: properties[property] }), {})

export const InitialData = () => {
  const [initValue1, setInitValue1] = useState('P')
  const [initValue2, setInitValue2] = useState('saturation')

  const initialProperties1 = Object.keys(initialProperties).reduce((acc, parameter) => (
    parameter === initValue2 ? acc : ({ ...acc, [parameter]: initialProperties[parameter] })), {})
  const initialProperties2 = Object.keys(initialProperties).reduce((acc, parameter) => (
    parameter === initValue1 ? acc : ({ ...acc, [parameter]: initialProperties[parameter] })), {})

  return (
    <div boxShadow={1} className={styles.root}>
      <h4 className={styles.title} variant="h4" component="h2">Исходные данные</h4>
      <InitValue
        nomenclature={initialProperties1}
        initValue={initValue1}
        setInitValue={setInitValue1}
      />
      <InitValue
        nomenclature={initialProperties2}
        initValue={initValue2}
        setInitValue={setInitValue2}
      />
    </div>
  )
}
