import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomCard from '../Components/Card';
import {useDispatch, useSelector} from 'react-redux';
import * as taskActions from '../store/actions/tasksActions';

const CategoryDetailScreen = (props) => {
  let categoryName = props.route.params.categoryName;
  const token = props.route.params.token;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      dispatch(taskActions.fetchTasksByCat(token, categoryName));
    });
    return unsubscribe;
  }, [props.navigation, dispatch, categoryName, token]);
  let resData = useSelector((state) => state.taskReduce.CatTasks);
  if (!resData.length) {
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/image.png')}
        />
        <View style={styles.screen}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() =>
              props.navigation.navigate('Add Task', {
                taskData: {},
                token: token,
              })
            }>
            <Image
              source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/plus.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={(item, index) => item + index}
          data={resData}
          renderItem={(itemData) => (
            <CustomCard
              taskData={itemData.item}
              navigation={props.navigation}
              catScreen={'true'}
              token={token}
            />
          )}
        />
        <View style={styles.screen}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() =>
              props.navigation.navigate('Add Task', {
                taskData: {},
                token: token,
              })
            }>
            <Image
              source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/plus.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
