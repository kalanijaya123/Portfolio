import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize("G-00WQNW168X"); // Replace with your real GA4 ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</React.StrictMode>
);

// Optional: Send metrics
reportWebVitals();
