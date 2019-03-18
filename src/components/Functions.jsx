import React from 'react';
import styles from './Functions.scss';

export default class Functions extends React.Component {
  state = { activeFunction: '' };

  handleClick = func => () => {
    console.log(111);
    this.setState({ activeFunction: func });
  }

  render() {
    const { activeFunction } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.header}>Функции</div>
        <div className={styles.container}>
          <div className={styles.steamWater}>
            Пар-Вода
            <div className={styles.saturation}>
              Параметры насыщения
              <button type="button" onClick={this.handleClick('P')} className={activeFunction === 'P' ? styles.active : null}>F(P)</button>
              <button type="button" onClick={this.handleClick('T')} className={activeFunction === 'T' ? styles.active : null}>F(T)</button>
            </div>
            <button type="button" onClick={this.handleClick('PT')} className={activeFunction === 'PT' ? styles.active : null}>F(P,T)</button>
            <button type="button" onClick={this.handleClick('PH')} className={activeFunction === 'PH' ? styles.active : null}>F(P,H)</button>
            <button type="button" onClick={this.handleClick('PS')} className={activeFunction === 'PS' ? styles.active : null}>F(P,S)</button>
            <button type="button" onClick={this.handleClick('TS')} className={activeFunction === 'TS' ? styles.active : null}>F(T,S)</button>
            <button type="button" onClick={this.handleClick('TH')} className={activeFunction === 'TH' ? styles.active : null}>F(T,H)</button>
            <button type="button" onClick={this.handleClick('HS')} className={activeFunction === 'HS' ? styles.active : null}>F(H,S)</button>
            <div className={styles.heatTransfer}>
              Теплоперепад
              <button type="button" onClick={this.handleClick('P0H0DH')} className={activeFunction === 'P0H0DH' ? styles.active : null}>F(P0,H0,DH)</button>
              <button type="button" onClick={this.handleClick('H0PkDH')} className={activeFunction === 'H0PkDH' ? styles.active : null}>F(H0,Pk,DH)</button>
              <button type="button" onClick={this.handleClick('P0H0Pk')} className={activeFunction === 'P0H0Pk' ? styles.active : null}>F(P0,H0,Pk)</button>
            </div>
          </div>
          <button type="button" onClick={this.handleClick('air')} className={activeFunction === 'air' ? styles.active : null}>Воздух</button>
          <button type="button" onClick={this.handleClick('gas')} className={activeFunction === 'gas' ? styles.active : null}>Дымовые газы</button>
        </div>
      </div>
    );
  }
}
