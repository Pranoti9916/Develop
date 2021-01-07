import {Button, Card, CardItem} from 'native-base';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import * as taskActions from '../store/actions/tasksActions';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {SvgTimeComponent} from './svgComponent';
const CustomCard = (props) => {
  const {id: taskId, title, category, status, timestamp} = props.taskData;
  const dispatch = useDispatch();
  let borderColor = '';
  if (props.catScreen) {
    borderColor = '#74ACF1';
  } else {
    switch (props.taskData.category) {
      case 'Personal':
        borderColor = '#86dfdf';
        break;
      case 'Social':
        borderColor = '#b3b3ff';
        break;
      case 'Health':
        borderColor = '#96CFA1';
        break;
      default:
        borderColor = '#74ACF1';
    }
  }
  const dateTime = moment(timestamp * 1000).format('DD/MM/YYYY h:mm a');
  let date = dateTime.split(' ');
  const time = date[1] + ' ' + date[2];

  if (status == 'Closed') {
    return (
      <Card
        style={{
          borderLeftWidth: 10,
          borderLeftColor: 'rgba(116,172,241,0.42)',
        }}>
        <CardItem>
          <Button style={{...styles.button, backgroundColor: borderColor}}>
            <Text style={styles.buttonText}>{category}</Text>
          </Button>
        </CardItem>
        <View style={{flexDirection: 'row', marginBottom: 3}}>
          <Text
            style={{
              ...styles.taskName,
              textDecorationLine: 'line-through',
              color: '#4A4A4A',
            }}>
            {props.taskData.title}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 26,
            flexDirection: 'row',
            marginBottom: 15,
            width: 376,
          }}>
          <View style={{marginTop: 3, color: '#4A4A4A'}}>
            <SvgTimeComponent />
          </View>

          <Text style={{marginLeft: 4, color: '#4A4A4A'}}>{time}</Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(taskActions.deleteTask(taskId, props.token))}>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/delete.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </Card>
    );
  }

  return (
    <Card style={{borderLeftWidth: 10, borderLeftColor: borderColor}}>
      <CardItem>
        <Button style={{...styles.button, backgroundColor: borderColor}}>
          <Text style={styles.buttonText}>{category}</Text>
        </Button>
      </CardItem>
      <View style={{flexDirection: 'row', marginBottom: 3}}>
        <Text
          style={styles.taskName}
          onPress={() => {
            dispatch(
              taskActions.updateTask(
                title,
                category,
                'Closed',
                taskId,
                timestamp,
                props.token,
              ),
            );
          }}>
          {props.taskData.title}
        </Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Add Task', {
              taskData: props.taskData,
              givenDate: date[0],
              givenTime: time,
              token: props.token,
            })
          }>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/edit.png')}
            style={{...styles.icon, marginRight: 18}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(taskActions.deleteTask(taskId, props.token))}>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/delete.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 26,
          flexDirection: 'row',
          marginBottom: 15,
          width: 376,
        }}>
        <View style={{marginTop: 3}}>
          <SvgTimeComponent />
        </View>

        <Text style={{marginLeft: 4}}>{time}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    borderLeftWidth: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Text',
    fontSize: 12,
  },
  icon: {
    height: 22,
    width: 20,
  },
  button: {
    width: 61,
    height: 24,
    borderRadius: 9,
    justifyContent: 'center',
  },
  taskName: {
    width: '75%',
    fontFamily: 'Microsoft Sans Serif',
    fontSize: 18,
    marginLeft: 26,
  },
});

export default CustomCard;
