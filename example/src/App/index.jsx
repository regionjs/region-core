import React from 'react';
import { Provider, setConfig } from 'redux-loadings';
import Layout from './Layout';
import 'antd/dist/antd.css';

setConfig({ strictLoading: false });

const App = () => (
  <Provider>
    <Layout />
  </Provider>
);

export default App;

export const app = <App />;
