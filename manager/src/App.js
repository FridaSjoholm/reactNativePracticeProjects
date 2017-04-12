import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAxE4agwyNtT0oPCy9QzCoh9JhqHe_L064',
      authDomain: 'manager-9a613.firebaseapp.com',
      databaseURL: 'https://manager-9a613.firebaseio.com',
      projectId: 'manager-9a613',
      storageBucket: 'manager-9a613.appspot.com',
      messagingSenderId: '138385007120'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
