import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyledComponents from './components/StyledComponents';
import CssModules from './components/CssModules';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <StyledComponents/> */}
    {/* <CssModules/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
