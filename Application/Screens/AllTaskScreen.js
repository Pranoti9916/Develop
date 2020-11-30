// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import SvgComponent from '../Components/svgComponent';
// import Clock from '/Users/ppatil/Desktop/nativePro/assets/tasks.svg';
// import SvgUri from 'react-native-svg-uri';
//
// const AllTaskScreen = () => {
//   return (
//     <SafeAreaView >
//         <SvgUri width='70' height='40' uri={require('/Users/ppatil/Desktop/nativePro/assets/bg.png')}/>
//
//     </SafeAreaView>
//   );
// };
//
// const style = StyleSheet.create({
//   screen: {
//     flex: 1,
//   },
// });
//
// export default AllTaskScreen;

import * as React from 'react';
import {SvgUri} from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import SvgComponent from '../Components/svgComponent';

export default () => (
   <SvgComponent/>

);
