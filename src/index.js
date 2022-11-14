import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReduceStress } from 'react-reduce-stress';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ReduceStress />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
