import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="credits">
      <h5>Credits:</h5>
      <a
        className="credit-link light"
        href="https://loading.io/css"
        target="_blank"
        rel="noopener noreferrer"
      >
        Based on Pure CSS Loaders
      </a>
      <a
        className="credit-link light"
        href="https://www.freepik.com/vectors/background"
        target="_blank"
        rel="noopener noreferrer"
      >
        Background vector created by rocketpixel - www.freepik.com
      </a>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
