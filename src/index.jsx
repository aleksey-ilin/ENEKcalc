import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary><CssBaseline><App /></CssBaseline></ErrorBoundary>,
  document.getElementById('root'),
);
