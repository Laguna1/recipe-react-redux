import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
// eslint-disable-next-line import/extensions
import Footer from './layouts/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
