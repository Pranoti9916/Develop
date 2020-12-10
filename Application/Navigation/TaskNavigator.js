import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import AllTaskScreen from '../Screens/AllTaskScreen';
import CategoryDetailScreen from '../Screens/CategoryDetailView';
import AddTaskScreen from '../Screens/AddTaskScreen';
import LogInPage from '../Components/LoginPage';
import SignUpPage from '../Screens/SignUpScreen';

const homeTab = createBottomTabNavigator();
const Stack = createStackNavigator();
function LoginP() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogInPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  );
}
function HomeTabs() {
  return (
    <homeTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelStyle: styles.labelStyle,
        tabStyle: styles.tabStyle,
      }}>
      <homeTab.Screen name="Home" component={HomeScreen} />
      <homeTab.Screen name="AllTasks" component={AllTaskScreen} />
    </homeTab.Navigator>
  );
}

function MyTabs() {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen name="Login" component={LogInPage} />*/}
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeTabs}
      />
      <Stack.Screen
        name="My Tasks"
        component={CategoryDetailScreen}
        options={({route}) => ({headerBackTitle: route.params.categoryName})}
      />
      <Stack.Screen name="Add Task" component={AddTaskScreen} />
    </Stack.Navigator>
  );
}

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginP}
        />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 20,
    paddingBottom: 19,
    fontFamily: 'SF Pro Text',
  },
  tabStyle: {
    height: 58,
    width: '100%',
    borderColor: '#EFEDF0',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#FFFFFF',
  },
});
export default Nav;
