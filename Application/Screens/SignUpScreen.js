import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../../assets/styles/LogInStyle';
import CombineShape from '../Components/combinedShape';

const SignUpPage = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  function signUp() {
    return fetch('https://tudu-node.herokuapp.com/auth/signup', {
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
        if (response.status != 201) {
          return response.json();
        } else {
          return {statusCode: 201};
        }
      })
      .then((responseJson) => {
        if (responseJson.statusCode == 201) {
          Alert.alert('Successfully Registered', 'Go to Login Page', [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ]);
        } else if (responseJson.statusCode == 409) {
          Alert.alert(responseJson.message, 'Go to Login Page', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ]);
        } else {
          alert(responseJson.message);
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

          <TouchableOpacity style={Styles.button} onPress={signUp}>
            <Text style={Styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={{...Styles.signupOption, color: '#4A90E2'}}
            onPress={() => {
              Linking.openURL(
                'https://docs.worldsecuresystems.com/user-manual/site-settings/admin-users/admin-users-login-issues',
              );
            }}>
            Trouble signing up?
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpPage;
