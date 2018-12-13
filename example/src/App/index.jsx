import React, { useEffect } from 'react';
import { Provider, setConfig } from 'redux-loadings';
import Layout from './Layout';
import { loadFollower, loadUser } from '../interface';

setConfig({});

const App = () => {
  useEffect(() => {
    loadUser();
    loadFollower();
  });
  return (
    <Provider>
      <Layout />
    </Provider>
  );
};

export default App;

export const app = <App />;
