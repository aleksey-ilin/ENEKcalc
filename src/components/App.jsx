import React from 'react';
import { string } from 'prop-types';
import './App.scss';

const App = ({ title }) => <div><h1 className="title">{title}</h1></div>;

App.propTypes = {
  title: string.isRequired,
};

export default App;
