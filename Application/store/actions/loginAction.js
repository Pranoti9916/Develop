import AsyncStorage from '@react-native-community/async-storage';


export const LOGIN = 'LOGIN';


export const login = (userId, token) => {
  return {type: LOGIN, userId: userId, token: token};
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://tudu-node.herokuapp.com/auth/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    );
    const responseData = await response.json();
    if (responseData.statusCode == 404) {
      alert(responseData.message);
    } else if (responseData.accessToken) {
     // dispatch(login(email, responseData.accessToken));
      saveDataToStorage(responseData.accessToken, email);
      //navigation.replace('Mytab');
    } else {
      alert('Please check your email id or password');
    }
  };
};

const saveDataToStorage = (token, userId) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
    }),
  );
};
