import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CatButton = (props) => {
  const setCategoryName = () => {
    props.onSetName(props.text);
  };
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={setCategoryName}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 77,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 7,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontWeight: 'bold',
    //height: 17,
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default CatButton;
