import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const AddCategoryButton = (props) => {
  const setCategoryName = () => {
    props.onSetName(props.categoryName);
  };
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={setCategoryName}>
      <Text style={styles.text}>{props.categoryName}</Text>
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
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default AddCategoryButton;
