import React from 'react';
import styles from './Main.scss';
import img from '../img/img.jpg';

const Main = () => (
  <div className={styles.root}>
    <img src={img} alt="" />
    <p>Электронный справочник &quot;ENEKcalc&quot;</p>
    <p>660074 Россия, г. Красноярск</p>
    <p>ул. Киренского , д. 26, КГТУ</p>
    <p>кафедра ТЭС, ауд. Д-201, Д-211</p>
  </div>
);

export default Main;
