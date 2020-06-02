import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './components/Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './styles.css';

const Root = (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </>
);

ReactDOM.render(Root, document.getElementById('root'));
