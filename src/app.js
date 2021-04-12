import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigator from './navigators';
import configureStore from './redux/store';


const { persistor, store } = configureStore();

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
