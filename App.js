import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
//import Logged from './Application/Screens/LoginScreen';
import MyTabs from './Application/Navigation/TaskNavigator';
import AddTaskScreen from './Application/Screens/AddTaskScreen';
import HomeScreen from './Application/Screens/HomeScreen';
import LogInPage from './Application/Components/LoginPage';

const App: () => React$Node = () => {
  return <MyTabs/>;
};

export default App;
