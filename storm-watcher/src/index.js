import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StormApp } from './components/StormApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StormApp />
  </React.StrictMode>
);
