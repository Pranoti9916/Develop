import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import CatButton from '../Components/CategorySelect';

const AddTaskScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        placeholder="Eg.Parent Teacher Meeting"
        style={styles.taskName}
        placholderColor="rgba(155,155,155,0.57)"
      />
      <Text style={styles.catText}>Category</Text>
      <View>
        <View style={styles.parentButton}>
          <CatButton
            style={{backgroundColor: '#74ACF1', width: 68}}
            text={'Work'}
          />
          <CatButton
            style={{backgroundColor: '#86DFDF', width: 91}}
            text={'Personal'}
          />
          <CatButton style={{backgroundColor: '#96CFA1'}} text={'Health'} />
          <CatButton style={{backgroundColor: '#B3B3FF'}} text={'Social'} />
        </View>
        <Text style={styles.dateTitle}>Choose Date & time</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 13,
            width: '100%',
          }}>
          <TextInput placeholder="22/09/2020" style={styles.dateInput} />
          <TextInput placeholder="8:30 pm" style={styles.timeInput} />
        </View>

        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    marginTop: 116,
  },
  taskName: {
    height: 51,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'rgba(151,151,151,0.44)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 7,
    paddingLeft: 12,
    // height: 19px;
    // width: 243px;
    color: 'rgba(155,155,155,0.57)',
    fontFamily: 'SF Pro Text Light Italic',
    fontStyle: 'italic',
    fontSize: 19,

    //font-weight: 300;
    // letter-spacing: -0.94px;
    // line-height: 20px;
  },
  catText: {
    width: 144,
    marginTop: 37,
    color: 'rgba(74,74,74,0.83)',
    fontFamily: 'SF Pro Text',
    fontSize: 19,
    // letter-spacing: 0;
    // line-height: 19px;
  },
  parentButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 9,
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
    // box-sizing: border-box;

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
    // box-sizing: border-box;
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
