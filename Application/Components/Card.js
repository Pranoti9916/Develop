import {Button, Card, CardItem} from 'native-base';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomCard = (props) => {
  return (
    <Card style={styles.cardStyle} onPress={() => alert('Card clicked')}>
      <CardItem>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>{!!props.d.category}</Text>
        </Button>
      </CardItem>
      <CardItem
        style={{flexDirection: 'row'}}
        button
        onPress={() => alert('Card clicked')}>
        <Text style={{marginRight: '60%'}}>{!!props.d.title}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Add Task')}>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/edit.png')}
            style={styles.editIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Card clicked2')}>
          <Image
            source={require('/Users/ppatil/Desktop/TODOApp/assets/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </CardItem>
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
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Text',
     fontSize: 12,
  },
  editIcon: {
    height: 22,
    width: 20,
    // marginBottom:47,
    marginRight: 18,
  },
  deleteIcon: {
    height: 22,
    width: 20,
    // marginBottom:47,
  },
  button: {
    width: 61,
    height: 24,
    borderRadius: 9,
    backgroundColor: '#74ACF1',
    justifyContent: 'center',
  },
});

export default CustomCard;
