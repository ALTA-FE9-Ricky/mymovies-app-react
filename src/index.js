import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
// import App from './pages/Detail Movie';
import App from './pages/List Of Now Playing';
// import App from './pages/List Of Now Playing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
