import React from 'react';
import { Provider } from 'region-shortcut';
import Layout from './Layout';
import { loadFollower, loadUser } from '../shared/load';

loadUser();
loadFollower();

const App = () => (
  <Provider>
    <Layout />
  </Provider>
);

export default App;

export const app = <App />;
