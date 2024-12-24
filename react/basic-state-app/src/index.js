import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppForm from './components/form/AppForm.jsx';
// import AppRouter from './components/router/AppRouter.jsx';
import AppRouter2 from './components/router2/AppRouter2.jsx';
// import AppBestSeller from './components/yes24/AppBestSeller.jsx';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();