import React, {useEffect, useState} from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text} from 'react-native';
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
  const [token, setToken] = useState('');
  getData()
    .then((token) => setToken(token))
    .catch((error) => console.error(error));
  let tasks = useSelector((state) => state.taskReduce.availableTasks);
  tasks.sort((a, b) => a.timestamp - b.timestamp);
  const today = moment().format('DD/MM/YYYY');
  const tomorrow = moment().add(1, 'days').format('DD/MM/YYYY');
  let todayTask = [];
  let tomorrowTask = [];
  let laterTask = [];

  tasks.map((task) => {
    const dateTime = moment(task.timestamp * 1000).format('DD/MM/YYYY');
    if (dateTime === today) {
      todayTask.push(task);
    } else if (dateTime === tomorrow) {
      tomorrowTask.push(task);
    } else {
      laterTask.push(task);
    }
  });

  const DATA = [
    {title: 'Today', data: [...todayTask]},
    {title: 'Tomorrow', data: [...tomorrowTask]},
    {title: 'Later', data: [...laterTask]},
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskActions.fetchTasks(token));
  }, [dispatch, token]);

  return (
    <SafeAreaView>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={(itemData) => (
          <CustomCard
            taskData={itemData.item}
            navigation={navigation}
            catScreen={'true'}
            token={token}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 94,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },

  header: {
    marginTop: 6,
    marginLeft: 6,
    //fontFamily: "SF Pro Text",
    fontSize: 16,
  },
});

export default AllTaskScreen;
