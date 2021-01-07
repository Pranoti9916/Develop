import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import CButton from '../Components/HomeScreenbutton';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import * as taskActions from '../store/actions/tasksActions';
import {SvgTaskComponent} from '../Components/svgComponent';

const getUser = async () => {
  let userEmail = '';
  try {
    userEmail = await AsyncStorage.getItem('username');
    return userEmail;
  } catch (error) {
    console.error(error);
  }
};
const getData = async () => {
  let token = '';
  try {
    token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (error) {
    console.error(error);
  }
};

const HomeScreen = ({navigation}) => {
  let date = moment().format('dddd, MMMM Do ');
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  getData()
    .then((token) => setToken(token))
    .catch((error) => console.error(error));
  let tasks = useSelector((state) => state.taskReduce.availableTasks);
  useEffect(() => {
    dispatch(taskActions.fetchTasks(token));
  }, [dispatch, token]);

  let completeCount = 0;
  let openCount = 0;
  let countedCategory = tasks.reduce(function (allCats, task) {
    if (task.category in allCats) {
      allCats[task.category]++;
      task.status === 'Open' ? openCount++ : completeCount++;
    } else {
      allCats[task.category] = 1;
      task.status === 'Open' ? openCount++ : completeCount++;
    }
    return allCats;
  }, {});

  getUser()
    .then((r) => setUserName(r.substring(0, r.indexOf('@'))))
    .catch((error) => console.log(error));

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text style={styles.dateStyle}>{date}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 40}}>
            <Text style={styles.hiUser}>Hi , {userName}</Text>
            <Text style={styles.makeTheDay}>
              Let's make this day productive
            </Text>
          </View>
          <SvgTaskComponent />
        </View>
        <View style={styles.rectangle}>
          <View style={styles.stats}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.number}>{completeCount}</Text>
              <Text style={styles.total}>Overdue</Text>
            </View>

            <Text style={styles.div} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.number}>{openCount}</Text>
              <Text style={styles.total}>Open</Text>
            </View>

            <Text style={styles.div} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.number}>{openCount + completeCount}</Text>
              <Text style={styles.total}>Total</Text>
            </View>
          </View>
        </View>
        <Text style={styles.dailyProgress}>Daily Progress</Text>
        <View style={styles.parentButton}>
          <CButton
            style={{backgroundColor: '#74ACF1'}}
            categoryName={'Work'}
            navigation={navigation}
            token={token}
            taskNo={countedCategory.Work ? countedCategory.Work : 0}
          />
          <CButton
            style={{backgroundColor: '#86DFDF'}}
            categoryName={'Personal'}
            navigation={navigation}
            token={token}
            taskNo={countedCategory.Personal ? countedCategory.Personal : 0}
          />
          <CButton
            style={{backgroundColor: '#96CFA1'}}
            categoryName={'Health'}
            navigation={navigation}
            token={token}
            taskNo={countedCategory.Health ? countedCategory.Health : 0}
          />
          <CButton
            style={{backgroundColor: '#B3B3FF'}}
            categoryName={'Social'}
            navigation={navigation}
            token={token}
            taskNo={countedCategory.Social ? countedCategory.Social : 0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginLeft: 20,
    marginRight: 20,
  },
  dateStyle: {
    height: 29,
    color: '#6C6A6C',
    //fontFamily: 'SF Pro Text Bold',
    fontSize: 23,
    fontWeight: 'bold',
    lineHeight: 31,
    marginTop: 36,
    marginBottom: 44,
  },
  hiUser: {
    color: '#6C6A6C',
    fontFamily: 'SF Pro Text',
    fontSize: 18,
    width: 221,
  },
  makeTheDay: {
    color: '#9B9B9B',
    fontFamily: 'Microsoft Sans Serif',
    fontSize: 16,
    marginTop: 9,
  },
  tasks: {
    height: 71,
    width: 76,
  },
  rectangle: {
    height: 71,
    marginRight: 20,
    borderColor: 'rgba(206,206,206,0.38)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dailyProgress: {
    height: 21,
    width: 118,
    color: '#9B9B9B',
    fontFamily: 'Microsoft Sans Serif',
    fontSize: 18,
    lineHeight: 21,
    marginTop: 33,
  },
  parentButton: {
    flex: 1,
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  stats: {
    height: 47,
    width: 275,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  div: {
    height: 38,
    width: 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(155,155,155,0.39)',
  },
  number: {
    height: 25,
    width: 26,
    color: '#4A4A4A',
    fontFamily: 'Microsoft Sans Serif',
    fontSize: 22,
  },
  total: {
    height: 17,
    color: '#737274',
    fontFamily: 'Microsoft Sans Serif',
    fontSize: 15,
  },
});

export default HomeScreen;
