import React from 'react';
import { string } from 'prop-types';
import './App.css';

const App = ({ title }) => <div><h1>{title}</h1></div>;

App.propTypes = {
  title: string.isRequired,
};

export default App;
