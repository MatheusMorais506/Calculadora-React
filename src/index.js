import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator'
import reportWebVitals from './reportWebVitals';
import Logo from './img/react.png';

ReactDOM.render(
  <div>
    <span id="info">
    <h2>Calculadora</h2>
    <h3>desenvolvida com</h3>
    <h3 data-color>React</h3>
    <h3><img src={Logo} alt="Logo"/></h3>
    </span>
    <span id="calculadora">
    <Calculator />
    </span>
  </div>
  ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
