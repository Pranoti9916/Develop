import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import moment from 'moment';
import {SvgClock} from '../Components/svgComponent';
import CButton from '../Components/HomeScreenbutton';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux';

const getData = async () => {
  let userEmail = '';
  try {
    userEmail = await AsyncStorage.getItem('username');
    return userEmail;
  } catch (error) {
    console.error(error);
  }
};

const HomeScreen = ({route, navigation}) => {
  // var date = moment().utcOffset('+05:30').format('YYYY-MMMM-Do ');
  let date = moment().format('dddd, MMMM Do ');
  const [userName, setUserName] = useState('');
  console.log('homescreen');
  let tasks = useSelector((state) => state.taskReduce.availableTasks);
  console.log(tasks);
  let completeCount=0;
  let openCount=0;
  let countedCategory = tasks.reduce(function (allCats, task) {
    if (task.category in allCats) {
      allCats[task.category]++;
      task.status==='Open'?openCount++:completeCount++;
    } else {
      console.log(task.category);
      allCats[task.category] = 1;
      task.status==='Open'?openCount++:completeCount++;
    }
    return allCats;
  }, {});
  console.log(countedCategory);
  console.log(openCount);
  console.log(completeCount);


  // const datum = Date.parse('02/13/2009 23:31');
  // const x = datum / 1000;

  // console.log(x);
  //const timeStamp_value=toTimestamp()
  //console.log(toTimestamp('02/13/2009 23:31:30'))
  // const x1=moment('13/02/2009 23:31', 'DD/MM/YYYY h:mm')/1000
  // console.log('moment' + moment('13/02/2009 23:31', 'DD/MM/YYYY h:mm')/1000);
  // //const time = moment(x *1000).format('DD/MM/YYYY h:mm');
  // const x2 = moment(x1 * 1000).format('DD/MM/YYYY h:mm a');
  // console.log(Date(moment('13/02/2009 23:31:30', 'DD/MM/YYYY')))

  //console.log(x2.getTime())
  getData()
    .then((r) => setUserName(r.substring(0, r.indexOf('@'))))
    .catch((error) => console.log(error));
  // console.log(userName);
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
          <SvgClock />
        </View>

        <View style={styles.rectangle} >
          {/*<View style={{flexDirection: 'row',justifyContent: 'space-between'}}>*/}
          <View style={styles.stats}>
            <View style={{justifyContent:'center',alignItems: "center"}}>
              <Text style={styles.number}>{completeCount}</Text>
              <Text style={styles.total}>Overdue</Text>
            </View>

            <Text style={styles.div}></Text>
            <View style={{justifyContent:'center',alignItems: "center"}}>
              <Text style={styles.number}>{openCount}</Text>
              <Text style={styles.total}>Open</Text>
            </View>

            <Text style={styles.div}></Text>
            <View style={{justifyContent:'center',alignItems: "center"}}>
              <Text style={styles.number}>{openCount+completeCount}</Text>
              <Text style={styles.total}>Total</Text>
            </View>
           {/* <Text style={{fontSize:22}}>{openCount}</Text>*/}
           {/* <Text style={{fontSize:22}}>{openCount}</Text>*/}
           {/* <Text style={{fontSize:22}}>{openCount}</Text>*/}
           {/*<Text style={{fontSize:22}}>Overdue</Text>*/}
           {/*<Text style={{fontSize:22}}>Open</Text>*/}
           {/*<Text style={{fontSize:22}}>Total</Text>*/}
         </View>


        </View>
        <Text style={styles.dailyProgress}>Daily Progress</Text>
        <View style={styles.parentButton}>
          <CButton
            style={{backgroundColor: '#74ACF1'}}
            text={'Work'}
            navigation={navigation}
            taskNo={countedCategory.Work ? countedCategory.Work : 0}
          />
          <CButton
            style={{backgroundColor: '#86DFDF'}}
            text={'Personal'}
            navigation={navigation}
            taskNo={countedCategory.Personal ? countedCategory.Personal : 0}
          />
          <CButton
            style={{backgroundColor: '#96CFA1'}}
            text={'Health'}
            navigation={navigation}
            taskNo={countedCategory.Health ? countedCategory.Health : 0}
          />
          <CButton
            style={{backgroundColor: '#B3B3FF'}}
            text={'Social'}
            navigation={navigation}
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
    // width: 335,
    borderColor: 'rgba(206,206,206,0.38)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    marginTop: 30,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
    //flexWrap: 'wrap',
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
   justifyContent:'space-between',
    flexDirection: 'row',
   // flexWrap: 'wrap'
},
  div :{
 // box-sizing: border-box;
  height: 38,
  width: 2,
  borderWidth: 1,
    borderStyle:'solid',
    borderColor:'rgba(155,155,155,0.39)',
},
  number: {
    height: 25,
    width: 26,
    color: '#4A4A4A',
    fontFamily: "Microsoft Sans Serif",
    fontSize: 22,
},
  total: {
  height: 17,
  // width: 42,
  color: '#737274',
  fontFamily: "Microsoft Sans Serif",
  fontSize: 15,
}
});

export default HomeScreen;
