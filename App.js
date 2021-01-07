import 'react-native-gesture-handler';
import React from 'react';
import ReduxThunk from 'redux-thunk';
import taskReducer from './Application/store/reducers/taskReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import Navigator from './Application/Navigation/TaskNavigator';

const rootReducer = combineReducers({
  taskReduce: taskReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
