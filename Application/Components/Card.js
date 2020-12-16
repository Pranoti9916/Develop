import {Button, Card, CardItem} from 'native-base';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import * as taskActions from '../store/actions/tasksActions';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {SvgTime} from './svgComponent';
const CustomCard = (props) => {
  const {id: taskId, title, category, status, timestamp} = props.taskData;
  const dispatch = useDispatch();
  let borderColor = '';
  if (props.catscreen) {
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
  //console.log(timestamp);
  const dateTime = moment(timestamp * 1000).format('DD/MM/YYYY h:mm a');
  //console.log(dateTime);
  let date = dateTime.split(' ');
  const time = date[1] + ' ' + date[2];

  if (status == 'Closed') {
    return (
      <Card style={{borderLeftWidth: 10, borderLeftColor: borderColor}}>
        <CardItem>
          <Button style={{...styles.button, backgroundColor: borderColor}}>
            <Text style={styles.buttonText}>{category}</Text>
          </Button>
        </CardItem>
        <View style={{flexDirection: 'row', marginBottom: 3}}>
          <Text style={styles.complete}>{props.taskData.title}</Text>
        </View>
        <View
          style={{
            marginLeft: 26,
            flexDirection: 'row',
            marginBottom: 15,
            width: 376,
          }}>
          <View style={{marginTop: 3}}>
            <SvgTime />
          </View>

          <Text style={{marginLeft: 4}}>{time}</Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(taskActions.deleteTask(taskId, props.token))}>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/delete.png')}
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
                date,
                time,
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
            })
          }>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/edit.png')}
            style={{...styles.icon, marginRight: 18}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(taskActions.deleteTask(taskId, props.token))}>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/delete.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/*<CardItem style={{justifyContent: 'center',alignItems:'center'}}>*/}
      {/*    <TouchableOpacity  onPress={() => alert('Card clicked')}>*/}
      {/*        <Image*/}
      {/*            source={require('/Users/ppatil/Desktop/TODOApp/assets/edit.png')}*/}
      {/*            style={styles.editIcon}*/}
      {/*        />*/}
      {/*    </TouchableOpacity>*/}
      {/*    <TouchableOpacity  onPress={() => alert('Card clicked')}>*/}
      {/*        <Image*/}
      {/*            source={require('/Users/ppatil/Desktop/TODOApp/assets/delete.png')}*/}
      {/*            style={styles.deleteIcon}*/}
      {/*        />*/}
      {/*    </TouchableOpacity>*/}

      {/*</CardItem>*/}

      {/*        <CardItem style={{flex:1,justifyContent: "flex-end"}} >*/}
      {/*<TouchableOpacity style={{ justifyContent: 'center',alignItems:'flex-end'}} onPress={() => alert('Card clicked')}>*/}
      {/*    <Image*/}
      {/*        source={require('/Users/ppatil/Desktop/TODOApp/assets/edit.png')}*/}
      {/*        style={styles.editIcon}*/}
      {/*    />*/}

      {/*</TouchableOpacity>*/}
      {/*        </CardItem>*/}
      {/*          <CardItem style={{flex:1,justifyContent: "flex-end"}}>*/}
      {/*<TouchableOpacity style={{ justifyContent: 'center',alignItems:'flex-end'}} onPress={() => alert('Card clicked')}>*/}
      {/*    <Image*/}
      {/*        source={require('/Users/ppatil/Desktop/TODOApp/assets/delete.png')}*/}
      {/*        style={styles.deleteIcon}*/}
      {/*    />*/}
      {/*</TouchableOpacity>*/}

      {/*        </CardItem>*/}
      <View
        style={{
          marginLeft: 26,
          flexDirection: 'row',
          marginBottom: 15,
          width: 376,
        }}>
        <View style={{marginTop: 3}}>
          <SvgTime />
        </View>

        <Text style={{marginLeft: 4}}>{time}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    // height: 81,
    // width: 10,
    borderLeftWidth: 10,
    // borderLeftColor: '#74ACF1',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Text',
    fontSize: 12,
  },
  icon: {
    height: 22,
    width: 20,
    // marginBottom:47,
  },
  button: {
    width: 61,
    height: 24,
    borderRadius: 9,
    // backgroundColor: '#74ACF1',
    justifyContent: 'center',
  },
  taskName: {
    // height: 21,
    width: '75%',
    color: '#4A4A4A',
    fontFamily: 'Microsoft Sans Serif',
    fontSize: 18,
    marginLeft: 26,
    //textDecorationLine: 'line-through',
  },
  complete: {
    textDecorationLine: 'line-through',
  },
});

export default CustomCard;
