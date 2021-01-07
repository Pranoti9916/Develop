import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../../assets/styles/LogInStyle';
import AsyncStorage from '@react-native-community/async-storage';
import CombineShape from '../Components/combinedShape';

const storeData = async (accessToken, userEmail) => {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('username', userEmail);
  } catch (error) {
    console.log(error);
  }
};
const LogInPage = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  useEffect(() => {
    const tryLogin = async () => {
      const userToken = await AsyncStorage.getItem('accessToken');

      if (!userToken) {
        navigation.navigate('Login');
        return;
      } else {
        navigation.navigate('MyTabs');
      }
    };
    tryLogin();
  });
  function loginTask() {
    if (!userEmail) {
      alert('username must be longer than or equal to 4 characters');
    }
    if (!userPassword) {
      alert('password must be longer than or equal to 6 characters');
    }
    return fetch('https://tudu-node.herokuapp.com/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.statusCode == 400) {
          alert(responseJson.message);
        } else if (responseJson.accessToken) {
          storeData(responseJson.accessToken, userEmail).then(() =>
            navigation.navigate('MyTabs', {
              screen: 'HomeTab',
              params: {user: userEmail},
            }),
          );
        } else {
          alert('Please check your email id or password');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView>
      <ImageBackground
        style={Styles.bgImage}
        source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/bg.png')}>
        <CombineShape />
        <View style={Styles.screen}>
          <TextInput
            placeholder="Username"
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            style={Styles.inputText}
          />
          <TextInput
            placeholder="Password"
            style={Styles.inputText}
            secureTextEntry={true}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          />

          <TouchableOpacity style={Styles.button} onPress={loginTask}>
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={Styles.signupOption}>
            Don't have account?
            <Text
              style={{...Styles.signupOption, ...Styles.signUpLink}}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LogInPage;
