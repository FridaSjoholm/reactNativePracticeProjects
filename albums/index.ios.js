// code for ios
//Import libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//Create Component
const App = () => {
  return (
    <Header headerText={'Albums'} />
  );
};
//Render it to device
AppRegistry.registerComponent('albums', () => App);
