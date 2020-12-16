import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CustomCard from '../Components/Card';
import {useDispatch, useSelector} from 'react-redux';
import * as taskActions from '../store/actions/tasksActions';
//import index from 'redux-persist/types/tests/index';

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
  let categoryName = props.route.params.categoryName;
  const [token, setToken] = useState('');
  console.log('cat screen');
  getData()
    .then((token) => setToken(token))
    .catch((error) => console.error(error));
  let resData = useSelector((state) => state.taskReduce.CatTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(taskActions.fetchTasksByCat(token, categoryName));
  }, [dispatch, token, categoryName]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={resData}
        renderItem={(itemData) => (
          <CustomCard
            taskData={itemData.item}
            // key={taskData ? taskData.id : Math.floor(Math.random() * 101)}
            navigation={props.navigation}
            catScreen={'true'}
            token={token}
            cat={true}
          />
        )}
      />
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => props.navigation.navigate('Add Task', {taskData: {}})}>
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
