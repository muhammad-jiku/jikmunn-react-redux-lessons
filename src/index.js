import React from 'react';
import ReactDOM from 'react-dom/client';

//  external import
import { Provider } from 'react-redux';

//  internal imports
import './index.css';
import App from './App';
import { store } from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
