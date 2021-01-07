import AsyncStorage from '@react-native-community/async-storage';

const getData = async () => {
  let token = '';
  try {
    token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const getToken = () => {
  let authToken = '';
  authToken = getData()
    .then((token) => token)
    .catch((error) => console.error(error));
  return authToken;
};
