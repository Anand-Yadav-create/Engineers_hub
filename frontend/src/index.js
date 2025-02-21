import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './components/redux/store'

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const  persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={store}>
      <PersistGate loading={null} persistor={persistor}><App /></PersistGate>
    
    </Provider>
    
    
  </React.StrictMode>
);


reportWebVitals();
