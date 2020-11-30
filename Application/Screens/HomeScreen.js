import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import moment from 'moment';
import {TextInput} from 'react-native-paper';
import SvgComponent from '../Components/svgComponent';
import CButton from '../Components/HomeScreenbutton';

const HomeScreen = ({navigation}) => {
  // var date = moment().utcOffset('+05:30').format('YYYY-MMMM-Do ');
  var date = moment().format('dddd, MMMM Do ');
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text style={styles.dateStyle}>{date}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={{marginRight: 40}}>
            <Text style={styles.hiUser}>Hi , Sally</Text>
            <Text style={styles.makeTheDay}>
              Let's make this day productive
            </Text>
          </View>
          <SvgComponent />
        </View>
        {/*<View style={{flexDirection: 'row',justifyContent: 'space-between',flexWrap: "wrap"}}>*/}
        {/*  <View>*/}
        {/*    <Text style={styles.hiUser}>hii</Text>*/}
        {/*    <Text style={styles.makeTheDay}>hiii there</Text>*/}
        {/*  </View>*/}

        {/*  <SvgComponent/>*/}
        {/*  /!*<Text>okkkk</Text>*!/*/}
        {/*</View>*/}
        <View style={styles.rectangle}>
          <Text />
        </View>
        <Text style={styles.dailyProgress}>Daily Progress</Text>
        <View style={styles.parentButton}>
          <CButton style={{backgroundColor: '#74ACF1'}} text={'Work'} navigation={navigation}/>
          <CButton style={{backgroundColor: '#86DFDF'}} text={'Personal'} navigation={navigation}/>
          <CButton style={{backgroundColor: '#96CFA1'}} text={'Health'} navigation={navigation}/>
          <CButton style={{backgroundColor: '#B3B3FF'}} text={'Social'} navigation={navigation} />
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
    fontFamily: 'SF Pro Text Bold',
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
    //lineHeight: 19px;
  },
  makeTheDay: {
    // width: 221,
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
    //box-sizing: border-box;
    height: 71,
    width: 335,
    borderColor: 'rgba(206,206,206,0.38)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    marginTop:20,
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
    marginTop: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export default HomeScreen;
