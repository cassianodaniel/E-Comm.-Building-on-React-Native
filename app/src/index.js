import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//FACEBOOK AUTH IMPORT
import Facebook from './components/Facebook';

//CORE STYLE FILE IMPORT
import './styles/mainstyle.less'
import './styles/mainstyle.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Facebook/>
  </React.StrictMode>,
  document.getElementById('root')
);
