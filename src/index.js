import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { TechnicianAuthcontextProvider } from "./store/technician_auth_context";



ReactDOM.render(
  <React.StrictMode>
    <TechnicianAuthcontextProvider>
    <App />
    </TechnicianAuthcontextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
