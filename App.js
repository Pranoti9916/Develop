import 'react-native-gesture-handler';
import React from 'react';
//import Logged from './Application/Screens/LoginScreen';
import Nav from './Application/Navigation/TaskNavigator';
import ReduxThunk from 'redux-thunk';

import taskReducer from './Application/store/reducers/taskReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  taskReduce: taskReducer,
  // cart: cartReducer,
  // orders: ordersReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = (props) => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};

export default App;
