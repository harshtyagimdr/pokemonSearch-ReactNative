import React from 'react';
import { Text, View,Platform } from 'react-native';
import {Button} from 'native-base';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button info>
            <Text> Click Me! </Text>
          </Button>
    </View>
  );
}

const styles ={
  container:{
    flex:1,
    marginTop:Platform.OS==="android"?24:0,
  }
}
