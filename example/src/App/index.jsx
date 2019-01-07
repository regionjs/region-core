import React, { Component } from 'react';
import { Provider } from 'redux-loadings';
import Layout from './Layout';
import { loadFollower, loadUser } from '../shared/load';

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
