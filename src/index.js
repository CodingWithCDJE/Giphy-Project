import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './Container/App';

// Retrieve the element by using DOM
const container = document.getElementById('root');

// Create root

const root = ReactDOMClient.createRoot(container);

// New react requires you to create a root and then calls render on it

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
