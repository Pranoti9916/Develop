import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
//import Logged from './Application/Screens/LoginScreen';
import MyTabs from './Application/Navigation/TaskNavigator';
import AddTaskScreen from './Application/Screens/AddTaskScreen';
import HomeScreen from './Application/Screens/HomeScreen';
import LogInPage from './Application/Components/LoginPage';
import CategoryDetailScreen from './Application/Screens/CategoryDetailView';
import SignUpPage from './Application/Screens/SignUpScreen';
import Nav from './Application/Navigation/TaskNavigator';
import AsyncStorage from '@react-native-community/async-storage';
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
      <Nav />;
    </Provider>
  );
};

export default App;
