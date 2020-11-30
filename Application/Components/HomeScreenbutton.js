import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';

const CButton = (props) => {
  return (
    <TouchableOpacity style={{...styles.button, ...props.style}} onPress={()=>props.navigation.navigate('Task',{ name: props.text})}>
      <Text style={styles.text}>{props.text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //padding: 18,
    // marginRight:15,
    marginBottom: 15,
    width: 160,
    height: Platform.OS === 'ios' ? 180 : 140,
    borderRadius: 8,
  },
  text: {
    height: 25,

    color: '#FFFFFF',
    //fontFamily: 'SF Pro Text Bold',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 31,
    marginBottom: 94,
    marginTop: 61,
    marginLeft: 20,
  },
});

export default CButton;
