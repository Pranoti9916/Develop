import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import CatButton from '../Components/CategorySelect';
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

const AddTaskScreen = (props) => {
  const taskData = props.route.params.taskData;
  const givenDate = props.route.params.givenDate;
  const givenTime = props.route.params.givenTime;
  console.log('Add task' + taskData);
  const [task, setTask] = useState(taskData ? taskData.title : '');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(taskData ? givenDate : '');
  const [time, setTime] = useState(taskData ? givenTime : '');
  const [token, setToken] = useState('');
  const status = taskData.status;
  const taskId = taskData.id;
  getData()
    .then((token) => setToken(token))
    .catch((error) => console.error(error));
  const dispatch = useDispatch();
  const setCatName = (catName) => {
    setCategory(catName);
  };
  const dateTime = date + ' ' + time;
  console.log('Add task screen');
  const timeStamp = moment(dateTime, 'DD/MM/YYYY h:mm a') / 1000;
  //console.log('moment' + moment(dateTime, 'DD/MM/YYYY h:mm a') / 1000);
  //const time = moment(x *1000).format('DD/MM/YYYY h:mm');

  // useEffect(() => {
  //   dispatch(taskActions.createTask());
  // }, [dispatch]);
  const sendData = () => {
    taskData.title
      ? dispatch(
          taskActions.updateTask(
            task,
            category,
            status,
            taskId,
            date,
            time,
            token,
          ),
        )
      : dispatch(taskActions.createTask(task, category, timeStamp, token));
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        placeholder="Eg.Parent Teacher Meeting"
        style={styles.taskName}
        placholderColor="rgba(155,155,155,0.57)"
        value={task}
        onChangeText={(task) => setTask(task)}
      />
      <Text style={styles.catText}>Category</Text>
      <View>
        <View style={styles.parentButton}>
          <CatButton
            style={{backgroundColor: '#74ACF1', width: 68}}
            text={'Work'}
            onSetName={setCatName}
          />
          <CatButton
            style={{backgroundColor: '#86DFDF', width: 91}}
            text={'Personal'}
            onSetName={setCatName}
          />
          <CatButton
            style={{backgroundColor: '#96CFA1'}}
            text={'Health'}
            onSetName={setCatName}
          />
          <CatButton
            style={{backgroundColor: '#B3B3FF'}}
            text={'Social'}
            onSetName={setCatName}
          />
        </View>
        <Text style={styles.dateTitle}>Choose Date & time</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 13,
            width: '100%',
          }}>
          <TextInput
            placeholder="22/09/2020"
            style={styles.dateInput}
            value={date}
            onChangeText={(date) => setDate(date)}
          />
          <TextInput
            placeholder="8:30 pm"
            style={styles.timeInput}
            value={time}
            onChangeText={(time) => setTime(time)}
          />
        </View>

        <TouchableOpacity style={styles.doneButton} onPress={sendData}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    height: 18,
    width: 144,
    color: 'rgba(74,74,74,0.83)',
    fontFamily: 'SF Pro Text',
    fontSize: 20,
    lineHeight: 19,
    marginTop: 28,
  },
  taskName: {
    height: 51,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'rgba(151,151,151,0.44)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 8,
    paddingLeft: 12,
    // color: 'rgba(155,155,155,0.57)',
    fontFamily: 'SF Pro Text Light Italic',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 19,
  },
  catText: {
    width: 144,
    marginTop: 37,
    color: 'rgba(74,74,74,0.83)',
    fontFamily: 'SF Pro Text',
    fontSize: 19,
  },
  parentButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 10,
    marginBottom: 35,
  },
  dateTitle: {
    height: 18,
    width: 186,
    marginTop: 35,
    color: 'rgba(74,74,74,0.83)',
    fontFamily: 'SF Pro Text',
    fontSize: 19,
    lineHeight: 19,
  },
  dateInput: {
    height: 51,
    width: 163,
    borderColor: 'rgba(151,151,151,0.44)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    paddingLeft: 12,
    fontSize: 16,
  },
  timeInput: {
    height: 51,
    width: 163,
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(151,151,151,0.44)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    paddingLeft: 12,
    fontSize: 16,
  },
  doneButton: {
    height: 56,
    width: 173,
    marginTop: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 95,
    borderColor: 'rgba(151,151,151,0.44)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25.5,
    backgroundColor: '#4A90E2',
  },
  doneText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Text',
    fontSize: 21,
  },
});

export default AddTaskScreen;
