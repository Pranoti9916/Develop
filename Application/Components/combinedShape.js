import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../assets/styles/LogInStyle';

const CombineShape = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 75}}>
      <View style={{...Styles.combinedShape, height: 75, width: 75}}>
        <View
          style={{
            ...Styles.combinedShape,
            height: 78,
            width: 78,
            transform: [{rotate: '45deg'}],
          }}
        />
      </View>
      <Text style={Styles.tuduText}>TUDU</Text>
    </View>
  );
};

export default CombineShape;
