import AsyncStorage from '@react-native-community/async-storage';
import {useState} from 'react';

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
  getData()
    .then((token) => (authToken = token))
    .catch((error) => console.error(error));

  return authToken;
};
