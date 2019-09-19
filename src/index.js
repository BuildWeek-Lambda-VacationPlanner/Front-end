import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
export { default } from './components/HamBar/Burger'
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);

