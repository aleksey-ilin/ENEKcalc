import React, { useState } from 'react';
import styles from './FP.scss';

const FP = () => {
  const [T, updateT] = useState(0);
  console.log(T);
  const handleChange = ({ target: { value } }) => updateT(value);
  return (
    <div className={styles.root}>
      <table>
        <tbody>
          <tr>
            <th colSpan="4" className={styles.headline}>Исходные данные</th>
          </tr>
          <tr>
            <td colSpan="2">Температура</td>
            <td><input onChange={handleChange} type="number" step="0.01" /></td>
            <td>&#176;С</td>
          </tr>
          <tr><th colSpan="4" className={styles.headline}>Результаты расчёта</th></tr>
          <tr>
            <td colSpan="2">Давление</td>
            <td>{(T * 1.55467 / 200).toFixed(5)}</td>
            <td>МПа</td>
          </tr>
          <tr>
            <td colSpan="2">Скрытая теплота парообразования</td>
            <td>{(T * 1939.6685 / 200).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td colSpan="2">Коэффициент поверхностного натяжения</td>
            <td>{(T * 0.0377 / 200).toFixed(4)}</td>
            <td>Н/м</td>
          </tr>
          <tr className={styles.headline}>
            <th className={styles.one}>{}</th>
            <th className={styles.two}>Пар</th>
            <th className={styles.three}>Вода</th>
            <th className={styles.four}>{}</th>
          </tr>
          <tr>
            <td>Удельный объём</td>
            <td>{(T * 0.12722 / 200).toFixed(5)}</td>
            <td>{(T * 0.00116 / 200).toFixed(5)}</td>
            <td>м3/кг</td>
          </tr>
          <tr>
            <td>Энтальпия</td>
            <td>{(T * 2792.062 / 200).toFixed(3)}</td>
            <td>{(T * 852.393 / 200).toFixed(3)}</td>
            <td>кДж/кг</td>
          </tr>
          <tr>
            <td>Энтропия</td>
            <td>{(T * 6.4303 / 200).toFixed(4)}</td>
            <td>{(T * 2.3308 / 200).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td>Внутренняя энергия</td>
            <td>{(T * 2594.273 / 200).toFixed(3)}</td>
            <td>{(T * 850.595 / 200).toFixed(3)}</td>
            <td>кДж/кг</td>
          </tr>
          <tr>
            <td>Изохорная теплоёмкость</td>
            <td>{(T * 2.0677 / 200).toFixed(4)}</td>
            <td>{(T * 3.3107 / 200).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td>Изобарная теплоёмкость</td>
            <td>{(T * 2.99 / 200).toFixed(4)}</td>
            <td>{(T * 4.494 / 200).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td>Скорость звука в среде</td>
            <td>{(T * 503.84 / 200).toFixed(2)}</td>
            <td>{(T * 1331.48 / 200).toFixed(2)}</td>
            <td>м/с</td>
          </tr>
          <tr>
            <td>Плотность</td>
            <td>{(T * 7.8603 / 200).toFixed(4)}</td>
            <td>{(T * 864.6675 / 200).toFixed(4)}</td>
            <td>кг/м3</td>
          </tr>
          <tr>
            <td>Теплопроводность</td>
            <td>{(T * 0.0391 / 200).toFixed(4)}</td>
            <td>{(T * 0.6634 / 200).toFixed(4)}</td>
            <td>Вт/(м*К)</td>
          </tr>
          <tr>
            <td>Динамическая вязкость</td>
            <td>{T === 0 ? 0.0000 : `${(T * 1.5715 / 200).toFixed(4)}E-005`}</td>
            <td>{T === 0 ? 0.0000 : `${(T * 1.3423 / 200).toFixed(4)}E-004`}</td>
            <td>Па*с</td>
          </tr>
          <tr>
            <td>Кинематическая вязкость</td>
            <td>{T === 0 ? 0.0000 : `${(T * 1.9993 / 200).toFixed(4)}E-006`}</td>
            <td>{T === 0 ? 0.0000 : `${(T * 1.5534 / 200).toFixed(4)}E-007`}</td>
            <td>м2/с</td>
          </tr>
          <tr>
            <td>Число Прандтля</td>
            <td>{(T * 1.2019 / 200).toFixed(4)}</td>
            <td>{(T * 0.9099 / 200).toFixed(4)}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>Показатель адиабаты</td>
            <td>{(T * 1.446 / 200).toFixed(3)}</td>
            <td>{(T * 1.355 / 200).toFixed(3)}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td colSpan="2">Агрегатное состояние</td>
            <td colSpan="2">Состояние насыщения</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FP;
