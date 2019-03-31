import React from 'react';
import styles from './App.scss';
import Functions from './Functions';
import Main from './Main';
import FP from './FP';

export default class App extends React.Component {
  state = { activeFunction: '' };

  updateActiveFunction = func => this.setState({ activeFunction: func });

  render() {
    // console.log(this.state);
    const { activeFunction } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.calc}>
          <Functions updateActiveFunction={this.updateActiveFunction} />
          {activeFunction === '' ? <Main /> : <FP />}
        </div>
      </div>
    );
  }
}
