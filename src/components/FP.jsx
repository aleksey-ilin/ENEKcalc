import React, { useState } from 'react';
import styles from './FP.scss';

const FP = () => {
  const [P, updateP] = useState(0);
  console.log(P);
  const handleChange = ({ target: { value } }) => updateP(value);
  return (
    <div className={styles.root}>
      <table>
        <tbody>
          <tr>
            <th colSpan="4">Исходные данные</th>
          </tr>
          <tr>
            <td colSpan="2">Давление</td>
            <td><input onChange={handleChange} type="number" step="0.05" /></td>
            <td>МПа</td>
          </tr>
          <tr><th colSpan="4">Результаты расчёта</th></tr>
          <tr>
            <td colSpan="2">Температура</td>
            <td>{(P * 100 / 0.1).toFixed(3)}</td>
            <td>&#176;С</td>
          </tr>
          <tr>
            <td colSpan="2">Скрытая теплота парообразования</td>
            <td>{(P * 2256 / 0.1).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td colSpan="2">Коэффициент поверхностного натяжения</td>
            <td>{(P * 0.06 / 0.1).toFixed(4)}</td>
            <td>Н/м</td>
          </tr>
          <tr>
            <th className={styles.one}>{}</th>
            <th className={styles.two}>Пар</th>
            <th className={styles.three}>Вода</th>
            <th className={styles.four}>{}</th>
          </tr>
          <tr>
            <td>Удельный объём</td>
            <td>{(P * 1.67 / 0.1).toFixed(5)}</td>
            <td>{(P * 0.001 / 0.1).toFixed(5)}</td>
            <td>м3/кг</td>
          </tr>
          <tr>
            <td>Энтальпия</td>
            <td>{(P * 2657.6 / 0.1).toFixed(3)}</td>
            <td>{(P * 419 / 0.1).toFixed(3)}</td>
            <td>кДж/кг</td>
          </tr>
          <tr>
            <td>Энтропия</td>
            <td>{(P * 7.35 / 0.1).toFixed(4)}</td>
            <td>{(P * 1.3 / 0.1).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td>Внутренняя энергия</td>
            <td>{(P * 2506 / 0.1).toFixed(3)}</td>
            <td>{(P * 419 / 0.1).toFixed(3)}</td>
            <td>кДж/кг</td>
          </tr>
          <tr>
            <td>Изохорная теплоёмкость</td>
            <td>{(P * 1.55 / 0.1).toFixed(4)}</td>
            <td>{(P * 3.77 / 0.1).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td>Изобарная теплоёмкость</td>
            <td>{(P * 2.1 / 0.1).toFixed(4)}</td>
            <td>{(P * 4.2 / 0.1).toFixed(4)}</td>
            <td>кДж/(кг*К)</td>
          </tr>
          <tr>
            <td>Скорость звука в среде</td>
            <td>{(P * 472.3 / 0.1).toFixed(2)}</td>
            <td>{(P * 1545.1 / 0.1).toFixed(2)}</td>
            <td>м/с</td>
          </tr>
          <tr>
            <td>Плотность</td>
            <td>{(P * 0.6 / 0.1).toFixed(4)}</td>
            <td>{(P * 958.4 / 0.1).toFixed(4)}</td>
            <td>кг/м3</td>
          </tr>
          <tr>
            <td>Теплопроводность</td>
            <td>{(P * 0.025 / 0.1).toFixed(4)}</td>
            <td>{(P * 0.68 / 0.1).toFixed(4)}</td>
            <td>Вт/(м*К)</td>
          </tr>
          <tr>
            <td>Динамическая вязкость</td>
            <td>{P === 0 ? 0.0000 : `${(P * 1.23 / 0.1).toFixed(4)}E-005`}</td>
            <td>{P === 0 ? 0.0000 : `${(P * 2.82 / 0.1).toFixed(4)}E-004`}</td>
            <td>Па*с</td>
          </tr>
          <tr>
            <td>Кинематическая вязкость</td>
            <td>{P === 0 ? 0.0000 : `${(P * 2.05 / 0.1).toFixed(4)}E-005`}</td>
            <td>{P === 0 ? 0.0000 : `${(P * 2.94 / 0.1).toFixed(4)}E-007`}</td>
            <td>Па*с</td>
          </tr>
          <tr>
            <td>Число Прандтля</td>
            <td>{(P * 1.03 / 0.1).toFixed(4)}</td>
            <td>{(P * 1.75 / 0.1).toFixed(4)}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>Показатель адиабаты</td>
            <td>{(P * 1.34 / 0.1).toFixed(3)}</td>
            <td>{(P * 1.12 / 0.1).toFixed(3)}</td>
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
