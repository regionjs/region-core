import React, { Component } from 'react';
import { Provider, setConfig } from 'redux-loadings';
import Layout from './Layout';
import { loadFollower, loadUser } from '../interface';

setConfig({});

class App extends Component {
  componentDidMount() {
    loadUser();
    loadFollower();
  }

  render() {
    return (
      <Provider>
        <Layout />
      </Provider>
    );
  }
}

export default App;

export const app = <App />;
