import React from 'react';
import styles from './FP.scss';

const FP = () => (
  <div className={styles.root}>
    <table>
      <tbody>
        <tr>
          <th colSpan="4">Исходные данные</th>
        </tr>
        <tr>
          <td colSpan="2">Давление</td>
          <td>0,1</td>
          <td>МПа</td>
        </tr>
        <tr><th colSpan="4">Результаты расчёта</th></tr>
        <tr>
          <td colSpan="2">Температура</td>
          <td>100</td>
          <td>&#176;С</td>
        </tr>
        <tr>
          <td colSpan="2">Скрытая теплота парообразования</td>
          <td>2256</td>
          <td>кДж/(кг*К)</td>
        </tr>
        <tr>
          <td colSpan="2">Коэффициент поверхностного натяжения</td>
          <td>0,06</td>
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
          <td>1,67</td>
          <td>0,001</td>
          <td>м3/кг</td>
        </tr>
        <tr>
          <td>Энтальпия</td>
          <td>2675,6</td>
          <td>419</td>
          <td>кДж/кг</td>
        </tr>
        <tr>
          <td>Энтропия</td>
          <td>7,35</td>
          <td>1,3</td>
          <td>кДж/(кг*К)</td>
        </tr>
        <tr>
          <td>Внутренняя энергия</td>
          <td>2506</td>
          <td>419</td>
          <td>кДж/кг</td>
        </tr>
        <tr>
          <td>Изохорная теплоёмкость</td>
          <td>1,55</td>
          <td>3,77</td>
          <td>кДж/(кг*К)</td>
        </tr>
        <tr>
          <td>Изобарная теплоёмкость</td>
          <td>2,1</td>
          <td>4,2</td>
          <td>кДж/(кг*К)</td>
        </tr>
        <tr>
          <td>Скорость звука в среде</td>
          <td>472,3</td>
          <td>1545,1</td>
          <td>м/с</td>
        </tr>
        <tr>
          <td>Плотность</td>
          <td>0,6</td>
          <td>958,4</td>
          <td>кг/м3</td>
        </tr>
        <tr>
          <td>Теплопроводность</td>
          <td>0,025</td>
          <td>0,68</td>
          <td>Вт/(м*К)</td>
        </tr>
        <tr>
          <td>Динамическая вязкость</td>
          <td>1,23E-005</td>
          <td>2,82E-004</td>
          <td>Па*с</td>
        </tr>
        <tr>
          <td>Кинематическая вязкость</td>
          <td>2,05E-005</td>
          <td>2,94E-007</td>
          <td>Па*с</td>
        </tr>
        <tr>
          <td>Число Прандтля</td>
          <td>1,03</td>
          <td>1,75</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>Показатель адиабаты</td>
          <td>1,34</td>
          <td>1,12</td>
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

export default FP;
