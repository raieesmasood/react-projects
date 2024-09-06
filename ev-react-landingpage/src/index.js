import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';

const targetDiv = ReactDOM.createRoot(document.getElementById('root'));
targetDiv.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);