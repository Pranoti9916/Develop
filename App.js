import 'react-native-gesture-handler';
import React from 'react';
import Nav from './Application/Navigation/TaskNavigator';
import ReduxThunk from 'redux-thunk';

import taskReducer from './Application/store/reducers/taskReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

const rootReducer = combineReducers({
  taskReduce: taskReducer,
  // cart: cartReducer,
  // orders: ordersReducer
});
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
// const rootReducer = combineReducers({
//     taskReduce: taskReducer,
// });
const persistedReducer=persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor=persistStore(store)

const App: () => React$Node = (props) => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Nav />
        </PersistGate>

    </Provider>
  );
};

export default App;
