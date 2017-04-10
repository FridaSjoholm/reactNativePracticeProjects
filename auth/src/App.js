import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC5Dmm2Yt5SrdBY0GG-5izNkiyQoBZz5FY',
    authDomain: 'auth-b10bf.firebaseapp.com',
    databaseURL: 'https://auth-b10bf.firebaseio.com',
    projectId: 'auth-b10bf',
    storageBucket: 'auth-b10bf.appspot.com',
    messagingSenderId: '900281358336'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
