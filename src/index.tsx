import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';
import { persistStore } from 'redux-persist';

import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App';

import './index.css';
import { store } from './store';

const persistor = persistStore((store as unknown) as Store<unknown, AnyAction>);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
