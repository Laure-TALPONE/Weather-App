import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'
import './style/index.scss';
import './style/_reset.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
