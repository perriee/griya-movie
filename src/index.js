import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import { RoutesList } from './routes/RoutesList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesList />
  </React.StrictMode>
);
