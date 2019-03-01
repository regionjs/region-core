import React from 'react';
import Layout from './Layout';
import { loadFollower, loadUser } from '../shared/load';

loadUser();
loadFollower();

const App = () => (
  <Layout />
);

export default App;

export const app = <App />;
