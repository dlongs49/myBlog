import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import '@/assets/css/global.css';
import {AppContainer} from 'react-hot-loader'
import Routes from './router'
  ReactDOM.render(
       <Routes/>,
  document.getElementById('root')
  );
reportWebVitals();
