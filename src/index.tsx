import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './App';

// fontAwesome config for library
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import './utils/fontAwesome'

config.autoAddCss = false

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
