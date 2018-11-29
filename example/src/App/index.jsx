import React from 'react';
import { Provider, setConfig } from 'redux-loadings';
import 'antd/dist/antd.css';
import Layout from './Layout';

setConfig({});

const App = () => (
  <Provider>
    <Layout />
  </Provider>
);

export default App;

export const app = <App />;
