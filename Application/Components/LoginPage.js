// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   Platform,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
//   KeyboardAvoidingView,
//   SafeAreaView,
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
//
// const storeData = async (accessToken, userEmail) => {
//   try {
//     await AsyncStorage.setItem('accessToken', accessToken);
//     await AsyncStorage.setItem('username', userEmail);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const LogInPage = ({navigation}) => {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   useEffect(() => {
//     const tryLogin = async () => {
//       const userToken = await AsyncStorage.getItem('accessToken');
//       const userName = await AsyncStorage.getItem('username');
//
//       if (!userToken) {
//         navigation.navigate('Login');
//         return;
//       }
//       // const transformedData = JSON.parse(userData);
//       // const { token, userId, expiryDate } = transformedData;
//       // const expirationDate = new Date(expiryDate);
//       //
//       // if (expirationDate <= new Date() || !token || !userId) {
//       //   props.navigation.navigate('Auth');
//       //   return;
//       // }
//       else {
//         console.log(userName);
//         navigation.navigate('MyTabs', {
//           screen: 'HomeTab',
//           params: {un: userEmail},
//         });
//       }
//     };
//
//     tryLogin();
//   });
//   function loginTask() {
//     if (!userEmail) {
//       alert('username must be longer than or equal to 4 characters');
//     }
//     if (!userPassword) {
//       alert('password must be longer than or equal to 6 characters');
//     }
//     return fetch('https://tudu-node.herokuapp.com/auth/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: userEmail,
//         password: userPassword,
//       }),
//     })
//       .then((response) => {
//         // console.log(response)
//         return response.json();
//       })
//       .then((responseJson) => {
//         if (responseJson.statusCode == 404) {
//           alert(responseJson.message);
//         } else if (responseJson.accessToken) {
//           storeData(responseJson.accessToken, userEmail);
//
//           navigation.replace('MyTabs');
//         } else {
//           alert('Please check your email id or password');
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
//
//   return (
//     <SafeAreaView>
//       <ImageBackground
//         style={styles.bgImage}
//         source={require('/Users/ppatil/Desktop/TODOApp/assets/bg.png')}>
//         <View style={styles.screen}>
//           <Text style={styles.tuduText}>TUDU</Text>
//
//           <TextInput
//             placeholder="Username"
//             onChangeText={(UserEmail) => setUserEmail(UserEmail)}
//             keyboardType="email-address"
//             autoCapitalize="none"
//             returnKeyType="next"
//             style={styles.inputText}
//           />
//           <TextInput
//             placeholder="Password"
//             style={styles.inputText}
//             secureTextEntry={true}
//             onChangeText={(UserPassword) => setUserPassword(UserPassword)}
//           />
//
//           <TouchableOpacity style={styles.loginButton} onPress={loginTask}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>
//           <Text style={styles.signupOption}>
//             Don't have account?
//             <Text
//               style={{...styles.signupOption, ...styles.signUpLink}}
//               onPress={() => navigation.navigate('SignUp')}>
//               Sign Up
//             </Text>
//           </Text>
//
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   combinedShape: {
//     height: 90.8,
//     width: 92.8,
//   },
//   screen: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tuduText: {
//     // height: 48,
//     // width: 114,
//     marginTop: Platform.OS === 'ios' ? 308 : 210,
//     color: '#4A90E2',
//     fontFamily: 'SF Pro Text',
//     fontSize: 40,
//     marginRight: 130,
//     marginLeft: 130,
//     marginBottom: 84,
//   },
//   inputText: {
//     width: 305,
//     borderRadius: 30,
//     borderWidth: 1,
//     marginLeft: 35,
//     marginRight: 35,
//     marginBottom: 32,
//     backgroundColor: 'white',
//     fontFamily: 'Microsoft Sans Serif',
//     fontSize: 15,
//     borderColor: 'rgba(151,151,151,0.44)',
//     ...Platform.select({
//       ios: {
//         paddingBottom: 22,
//         paddingTop: 22,
//         paddingLeft: 32,
//       },
//       android: {
//         paddingBottom: 10,
//         paddingTop: 10,
//         paddingLeft: 16,
//       },
//     }),
//   },
//   loginButton: {
//     width: 173,
//     borderRadius: 30,
//     height: 63,
//     backgroundColor: '#4A90E2',
//     marginLeft: 101,
//     marginRight: 101,
//     marginTop: 26,
//     marginBottom: 35,
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 21,
//     fontFamily: 'SF Pro Text',
//     textAlign: 'center',
//
//     lineHeight: 25,
//   },
//   signupOption: {
//     //height: 22,
//     // width: 305,
//     fontFamily: 'Microsoft Sans Serif',
//     margin: 24,
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   signUpLink: {
//     color: '#4A90E2',
//   },
//   bgImage: {
//     width: Math.round(Dimensions.get('window').width),
//     height: Math.round(Dimensions.get('window').height),
//   },
// });
//
// export default LogInPage;
