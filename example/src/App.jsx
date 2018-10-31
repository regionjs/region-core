import React from 'react';
import { Provider } from 'react-redux';
import store from './getStore';
import Layout from './ui/Layout';
import Control1 from './components/Control1';
import Control2 from './components/Control2';
import Control3 from './components/Control3';
import Control4 from './components/Control4';
import { loadUser, loadFollower } from './load';

loadUser();
loadFollower();

const App = () => (
  <Provider store={store}>
    <Layout>
      <Control1 />
      <Control2 />
      <Control3 />
      <Control4 />
    </Layout>
  </Provider>
);

export default App;

export const app = <App />;
