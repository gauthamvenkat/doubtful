import * as React from 'react';
import {Text, View} from 'react-native';

function SavedScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white'}}>Saved!</Text>
    </View>
  );
}

export default SavedScreen;
