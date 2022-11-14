import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReduceStress } from 'react-reduce-stress';

ReactDOM.render(
  <React.StrictMode>
    <ReduceStress />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
