import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import AppCgv from './components/cgv_layout/AppCgv.jsx';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.querySelector('body')); // body 안에 바로 데이터 입력
root.render(
  <React.StrictMode>
    <AppCgv />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
