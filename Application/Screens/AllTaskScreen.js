import React, {useState, useEffect} from 'react';
import {List, ListItem} from 'native-base';
import {SafeAreaView, StyleSheet, Text,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import CustomCard from '../Components/Card';
import * as taskActions from '../store/actions/tasksActions';
import moment from 'moment';

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
  tasks.sort((a,b)=>a.timestamp-b.timestamp)
  const today=moment().format('DD/MM/YYYY')
  const tomorrow = moment().add(1,'days').format('DD/MM/YYYY')
  let todayTask=[]
  let tomorrowTask=[]
  let laterTask=[]

  tasks.map((task)=>{
    const dateTime = moment(task.timestamp * 1000).format('DD/MM/YYYY');
    if(dateTime===today)
    {
      todayTask.push(task)
    } else if(dateTime===tomorrow)
    {
      tomorrowTask.push(task)
    }
    else {
      laterTask.push(task)
    }
  })

console.log('today task')
  console.log(todayTask)
  console.log('tom task')
  console.log(tomorrowTask)
  console.log('lat task')
  console.log(laterTask)

  const dispatch = useDispatch();
  console.log('all task screen');

  useEffect(() => {
    dispatch(taskActions.fetchTasks(token));
  }, [dispatch, token]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
      <List>
        <ListItem itemDivider>
          <Text>Today</Text>
        </ListItem>
        {todayTask.map((taskData) => (
            <CustomCard
                taskData={taskData}
                key={taskData ? taskData.id : Math.floor(Math.random() * 101)}
                navigation={navigation}
                token={token}
                alltask={true}
            />
        ))}
        <ListItem>
          <Text>Tomorrow</Text>
        </ListItem>
        {tomorrowTask.map((taskData) => (
            <CustomCard
                taskData={taskData}
                key={taskData ? taskData.id : Math.floor(Math.random() * 101)}
                navigation={navigation}
                token={token}
                alltask={true}
            />
        ))}
        <ListItem>
          <Text>Later</Text>
        </ListItem>
        {laterTask.map((taskData) => (
            <CustomCard
                taskData={taskData}
                key={taskData ? taskData.id : Math.floor(Math.random() * 101)}
                navigation={navigation}
                token={token}
                alltask={true}
            />
        ))}
      </List>
      </ScrollView>
      {/*{tasks.map((taskData) => (*/}
      {/*  <CustomCard*/}
      {/*    taskData={taskData}*/}
      {/*    key={taskData ? taskData.id : Math.floor(Math.random() * 101)}*/}
      {/*    navigation={navigation}*/}
      {/*    token={token}*/}
      {/*    alltask={true}*/}
      {/*  />*/}
      {/*))}*/}
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
