import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CustomCard from '../Components/Card';

const getData = async () => {
  let token = '';
  try {
    token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (error) {
    console.error(error);
  }
};

const CategoryDetailScreen = (props) => {
  let {categoryName} = props.route.params;
  const [token, setToken] = useState('');
  const [data, setData] = useState([{}]);
  // console.log(data[0])
  // console.log('https://tudu-node.herokuapp.com/tasks/category/' + categoryName)
  // getData()
  //     .then((token) => setToken(token))
  //     .catch((error) => console.error(error));
  //
  //  fetch(
  //   'https://tudu-node.herokuapp.com/tasks/category/' + categoryName,
  //   {
  //   headers: {
  //     Authorization: 'Bearer  ' + token,
  //     'Content-Type': 'application/json',
  //   },
  // })
  //     .then((response) => {
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then((responseJson) => {
  //       setData(responseJson)
  //     // console.log(typeof responseJson)
  //     //  setData(responseJson)
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
  let resData = props.route.params.responseData;
  resData.map((r) => console.log(r));

  return (
    <View style={{flex: 1}}>
      {/*resData.map(r=>console.log(r))*/}
      {/*data.map((item, index) => {})*/}
      {/*<CustomCard />*/}
      {/*<CustomCard/>*/}

      {resData.map((r) => (
        <CustomCard d={r} key={r.id} />
      ))}
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => props.navigation.navigate('Add Task')}>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/plus.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  circle: {
    width: 70,
    height: 70,
    marginBottom: 54,
    marginRight: 17,
    borderRadius: 70 / 2,
    backgroundColor: '#4885ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 34.05,
    width: 34.05,
  },
});

export default CategoryDetailScreen;
