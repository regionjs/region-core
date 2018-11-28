import React from 'react';
import Layout from './ui/Layout';
import Control1 from './components/Control1';
import Control2 from './components/Control2';
import Control3 from './components/Control3';
import Control4 from './components/Control4';
import { loadUser, loadFollower } from '../load/index';

loadUser();
loadFollower();

const LoadingControl = () => (
  <Layout>
    <Control1 />
    <Control2 />
    <Control3 />
    <Control4 />
  </Layout>
);

export default LoadingControl;
