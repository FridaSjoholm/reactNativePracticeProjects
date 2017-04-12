import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
