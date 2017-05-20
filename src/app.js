import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import sagas from '@redux/sagas/';
import configureStore from './configureStore';
import SearchView from '@containers/SearchView/';

const store = configureStore();
sagas.forEach(saga => store.runSaga(saga));

function setup() {
  class Root extends Component {      
    render() {
      return (
        <Provider store={store}>
          <SearchView></SearchView>
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;