import React, {useState, useEffect} from 'react';
import {List, ListItem} from 'native-base';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import CustomCard from '../Components/Card';
import * as taskActions from '../store/actions/tasksActions';
// const getData = async () => {
//   let token = '';
//   try {
//     token = await AsyncStorage.getItem('accessToken');
//     return token;
//   } catch (error) {
//     console.error(error);
//   }
// };
const AllTaskScreen = ({navigation}) => {
  // console.log("all tasks")
  // const [token, setToken] = useState('');
  // const [data, setData] = useState([]);
  // getData()
  //   .then((token) => setToken(token))
  //   .catch((error) => console.error(error));
  // console.log(token)

  // useEffect(() => {
  //   console.log("ji"+i++)
  //   fetch('https://tudu-node.herokuapp.com/tasks', {
  //     headers: {
  //       // Accept: 'application/json',
  //       Authorization: 'Bearer  ' + token,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //        console.log(response)
  //       return response.json();
  //     })
  //     .then((responseJson) => {
  //       console.log(responseJson)
  //       setData(responseJson);
  //       // console.log(token1)
  //       // setToken1(responseJson)
  //       // console.log(token1)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  const products = useSelector((state) => state.taskReduce.availableTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskActions.fetchTasks());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.screen}>
      <List>
        <ListItem itemDivider>
          <Text>Today</Text>
        </ListItem>
        <ListItem>
          <Text>Tomorrow</Text>
        </ListItem>
        <ListItem>
          <Text>Later</Text>
        </ListItem>
      </List>
      {products.map((r) => (
        <CustomCard d={r} key={r.id} navigation={navigation} />
      ))}
      {/*<CustomCard navigation={navigation}/>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
  },
  cardStyle: {
    height: 94,
    // flexDirection:'row',
  },
});

export default AllTaskScreen;
