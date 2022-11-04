import React from 'react';
import ReactDOM from 'react-dom/client';
import { prevText } from './previewText';
import './index.scss';
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App prevText={prevText} />
  </React.StrictMode>
);

