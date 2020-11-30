import React from 'react';
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
} from 'react-native';

const LogInPage = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bgImage}
        source={require('/Users/ppatil/Desktop/TODOApp/assets/bg.png')}>
        <View style={styles.screen}>
          <Text style={styles.tuduText}>TUDU</Text>

          <TextInput
            placeholder="Username"
            keyboardType="email-address"
            returnKeyType="next"
            style={styles.inputText}
          />
          <TextInput placeholder="Password" style={styles.inputText} />

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.signupOption}>Don't have account?</Text>
          {/*<Text onPress={() => Linking.openURL('https://google.com')}>*/}
          {/*  Click Here To Open Google.*/}
          {/*</Text>*/}
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
    //fontFamily: 'SF Pro Text',
    fontSize: 40,
    marginRight: 130,
    marginLeft: 130,
    marginBottom: 84,
  },
  inputText: {
    height: 61,
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
  loginButton: {
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
    height: 22,
    width: 305,
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

export default LogInPage;
