import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CButton = (props) => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={() => {
        props.navigation.navigate('My Tasks', {
          categoryName: props.categoryName,
          token: props.token,
        });
      }}>
      <Text style={styles.text}>{props.categoryName}</Text>
      <Text style={styles.taskNum}>{props.taskNo} Tasks</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    width: 160,
    height: Platform.OS === 'ios' ? 180 : 140,
    borderRadius: 8,
  },
  text: {
    height: 30,
    color: '#FFFFFF',
    //fontFamily: 'SF Pro Text Bold',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 61,
    marginLeft: 20,
  },
  taskNum: {
    height: 18,
    width: 81,
    color: '#FFFFFF',
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    marginTop: 7,
    marginLeft: 20,
  },
});

export default CButton;
