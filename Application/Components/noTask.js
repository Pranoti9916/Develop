import * as React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';

const NoTask = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('/Users/ppatil/Desktop/TODOApp/assets/Images/image.png')}
      />
    </SafeAreaView>
  );
};

export default NoTask;
