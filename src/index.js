import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import { Provider } from 'react-redux';
// import App from './pages/Detail Movie';
import App from './routes';
// import App from './pages/List Of Now Playing';
import { store } from 'utils/redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
