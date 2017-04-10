import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyC5Dmm2Yt5SrdBY0GG-5izNkiyQoBZz5FY',
    authDomain: 'auth-b10bf.firebaseapp.com',
    databaseURL: 'https://auth-b10bf.firebaseio.com',
    projectId: 'auth-b10bf',
    storageBucket: 'auth-b10bf.appspot.com',
    messagingSenderId: '900281358336'
    });
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
