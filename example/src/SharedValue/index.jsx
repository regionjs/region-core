import React from 'react';
import Display1 from './Display1';
import Display2 from './Display2';
import { loadFollower, loadUser } from './load';

loadUser();
loadFollower();

const Component = () => (
  <div style={{ display: 'flex' }}>
    <Display1 />
    <Display2 />
  </div>
);

export default Component;
