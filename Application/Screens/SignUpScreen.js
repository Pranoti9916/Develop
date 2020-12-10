import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';

const SignUpPage = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  function secd() {
    return fetch('https://tudu-node.herokuapp.com/auth/signup', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
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
        } else if (!userEmail) {
          alert(responseJson.message);
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
        style={styles.bgImage}
        source={require('/Users/ppatil/Desktop/TODOApp/assets/bg.png')}>
        <View style={styles.screen}>
          <Text style={styles.tuduText}>TUDU</Text>

          <TextInput
            placeholder="Username"
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            style={styles.inputText}
          />
          <TextInput
            placeholder="Password"
            style={styles.inputText}
            secureTextEntry={true}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          />

          <TouchableOpacity style={styles.SignUpButton} onPress={secd}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={styles.signupOption}
            onPress={() => {
              Linking.openURL(
                'https://docs.worldsecuresystems.com/user-manual/site-settings/admin-users/admin-users-login-issues',
              );
            }}>
            Trouble signin up?
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  combinedShape: {
    height: 90.8,
    width: 92.8,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tuduText: {
    // height: 48,
    // width: 114,
    marginTop: Platform.OS === 'ios' ? 308 : 210,
    color: '#4A90E2',
    fontFamily: 'SF Pro Text',
    fontSize: 40,
    marginRight: 130,
    marginLeft: 130,
    marginBottom: 84,
  },
  inputText: {
    width: 305,
    borderRadius: 30,
    borderWidth: 1,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 32,
    backgroundColor: 'white',
    fontFamily: 'Microsoft Sans Serif',
    fontSize: 15,
    borderColor: 'rgba(151,151,151,0.44)',
    ...Platform.select({
      ios: {
        paddingBottom: 22,
        paddingTop: 22,
        paddingLeft: 32,
      },
      android: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 16,
      },
    }),
  },
  SignUpButton: {
    width: 173,
    borderRadius: 30,
    height: 63,
    backgroundColor: '#4A90E2',
    marginLeft: 101,
    marginRight: 101,
    marginTop: 26,
    marginBottom: 35,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontFamily: 'SF Pro Text',
    textAlign: 'center',

    lineHeight: 25,
  },
  signupOption: {
    color: '#4A90E2',
    fontFamily: 'Microsoft Sans Serif',
    margin: 24,
    fontSize: 20,
    textAlign: 'center',
  },
  bgImage: {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
  },
});

export default SignUpPage;
