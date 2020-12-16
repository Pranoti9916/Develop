import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// const getData = async () => {
//   let token = '';
//   try {
//     token = await AsyncStorage.getItem('accessToken');
//     return token;
//   } catch (error) {
//     console.error(error);
//   }
// };

const CButton = (props) => {
  // const listTask = () => {
  //   fetch('https://tudu-node.herokuapp.com/tasks/category/' + props.text, {
  //     headers: {
  //       Authorization: 'Bearer  ' + token,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       //console.log(response)
  //       return response.json();
  //     })
  //     .then((responseJson) => {
  //       //console.log(responseJson)
  //       setData(responseJson);
  //       // console.log(data)
  //       // console.log(typeof responseJson)
  //       //  setData(responseJson)
  //       // responseJson.map(home => {setData(home)})
  //       // console.log(responseJson)
  //       // if(responseJson.statusCode===400){
  //       //
  //       // }
  //       // else{
  //       //
  //       //   alert("Data added successfully")
  //       //
  //       // }ç
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // const [token, setToken] = useState('');
  // const [data, setData] = useState([{}]);
  // console.log(data[0])
  // console.log('https://tudu-node.herokuapp.com/tasks/category/' + categoryName)
  // getData()
  //   .then((token) => setToken(token))
  //   .catch((error) => console.error(error));

  //console.log(data)

  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={() => {
        props.navigation.navigate('My Tasks', {
          categoryName: props.text,
        });
      }}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.taskNum}>{props.taskNo} Tasks</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    width: 160,
    height: Platform.OS === 'ios' ? 180 : 140,
    borderRadius: 8,
    // flexDirection: 'column',
  },
  text: {
    height: 30,

    color: '#FFFFFF',
    //fontFamily: 'SF Pro Text Bold',
    fontSize: 26,
    fontWeight: 'bold',
    // lineHeight: 31,
    // marginBottom: 94,
    marginTop: 61,
    marginLeft: 20,
  },
  taskNum: {
    height: 18,
    width: 81,
    color: '#FFFFFF',
    //color: 'rgba(255,255,255,0.8)',
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    marginTop: 7,
    marginLeft: 20,
  },
});

export default CButton;
