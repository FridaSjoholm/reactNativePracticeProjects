// code for ios
//Import libraries
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create Component
const App = () => {
  return (
    <Text>
      A lil bit o text
    </Text>
  );
};
//Render it to device
AppRegistry.registerComponent('albums', () => App);
