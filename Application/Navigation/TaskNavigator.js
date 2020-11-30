import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import AllTaskScreen from '../Screens/AllTaskScreen';
import CategoryDetailScreen from '../Screens/CategoryDetailView';

const homeTab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          name="Task"
          component={CategoryDetailScreen}
          options={({route}) => ({headerBackTitle: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//
// function MyTabs() {
//   return (
//     <NavigationContainer>
//       <homeTab.Navigator
//         initialRouteName="Home"
//         tabBarOptions={{
//           labelStyle: style.labelStyle,
//           tabStyle: {
//             height: 58,
//           },
//         }}>
//         <homeTab.Screen name="Home" component={HomeScreen} />
//         <homeTab.Screen name="AllTasks" component={AllTaskScreen} />
//       </homeTab.Navigator>
//     </NavigationContainer>
//   );
// }

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
export default MyTabs;
