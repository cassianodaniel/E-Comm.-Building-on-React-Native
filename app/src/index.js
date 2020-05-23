import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//FACEBOOK AUTH IMPORT
import ButtonFacebookAuth from './components/ButtonFacebookAuth';

//CORE STYLE FILE IMPORT
import './styles/mainstyle.less'
import './styles/mainstyle.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ButtonFacebookAuth/>
  </React.StrictMode>,
  document.getElementById('root')
);
