import React from 'react';
import PropTypes from 'prop-types';
import styles from './Functions.scss';

const Functions = ({ activeFunction, updateActiveFunction }) => {
  const handleClick = func => () => updateActiveFunction(func);
  // console.log(activeFunction);

  return (
    <div className={styles.root}>
      <div className={styles.header}>Функции</div>
      <div className={styles.container}>
        <div className={styles.steamWater}>
          Пар-Вода
          <div className={styles.saturation}>
            <p>Параметры насыщения</p>
            <button type="button" onClick={handleClick('P')} className={activeFunction === 'P' ? styles.active : null}>F(P)</button>
            <button type="button" onClick={handleClick('T')} className={activeFunction === 'T' ? styles.active : null}>F(T)</button>
          </div>
          <button type="button" onClick={handleClick('PT')} className={activeFunction === 'PT' ? styles.active : null}>F(P,T)</button>
          <button type="button" onClick={handleClick('PH')} className={activeFunction === 'PH' ? styles.active : null}>F(P,H)</button>
          <button type="button" onClick={handleClick('PS')} className={activeFunction === 'PS' ? styles.active : null}>F(P,S)</button>
          <button type="button" onClick={handleClick('TS')} className={activeFunction === 'TS' ? styles.active : null}>F(T,S)</button>
          <button type="button" onClick={handleClick('TH')} className={activeFunction === 'TH' ? styles.active : null}>F(T,H)</button>
          <button type="button" onClick={handleClick('HS')} className={activeFunction === 'HS' ? styles.active : null}>F(H,S)</button>
          <div className={styles.heatTransfer}>
            <p>Теплоперепад</p>
            <button type="button" onClick={handleClick('P0H0DH')} className={activeFunction === 'P0H0DH' ? styles.active : null}>F(P0,H0,DH)</button>
            <button type="button" onClick={handleClick('H0PkDH')} className={activeFunction === 'H0PkDH' ? styles.active : null}>F(H0,Pk,DH)</button>
            <button type="button" onClick={handleClick('P0H0Pk')} className={activeFunction === 'P0H0Pk' ? styles.active : null}>F(P0,H0,Pk)</button>
          </div>
        </div>
        <button type="button" onClick={handleClick('air')} className={activeFunction === 'air' ? styles.active : null}>Воздух</button>
        <button type="button" onClick={handleClick('gas')} className={activeFunction === 'gas' ? styles.active : null}>Дымовые газы</button>
      </div>
    </div>
  );
};

Functions.propTypes = {
  activeFunction: PropTypes.string.isRequired,
  updateActiveFunction: PropTypes.func.isRequired,
};

export default Functions;
