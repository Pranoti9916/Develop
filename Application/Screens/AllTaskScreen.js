import React, {useState, useEffect} from 'react';
import {List, ListItem} from 'native-base';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import CustomCard from '../Components/Card';
import * as taskActions from '../store/actions/tasksActions';

const getData = async () => {
  let token = '';
  try {
    token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (error) {
    console.error(error);
  }
};
const AllTaskScreen = ({navigation}) => {
  // console.log("all tasks")
  const [token, setToken] = useState('');
  getData()
    .then((token) => setToken(token))
    .catch((error) => console.error(error));
  //console.log(token);
  let tasks = useSelector((state) => state.taskReduce.availableTasks);
  console.log(tasks);
  const dispatch = useDispatch();
  console.log('all task screen');
  // console.log()

  useEffect(() => {
    dispatch(taskActions.fetchTasks(token));
  }, [dispatch, token]);

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
      {tasks.map((taskData) => (
        <CustomCard
          taskData={taskData}
          key={taskData ? taskData.id : Math.floor(Math.random() * 101)}
          navigation={navigation}
          token={token}
          alltask={true}
        />
      ))}
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
