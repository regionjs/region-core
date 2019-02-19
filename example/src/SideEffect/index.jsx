import React from 'react';
import SideEffect from './SideEffect';
import AsyncSideEffect from './AsyncSideEffect';
import LoadingSideEffect from './LoadingSideEffect';

const Wrapper = () => (
  <div style={{ display: 'flex' }}>
    <SideEffect />
    <AsyncSideEffect />
    <LoadingSideEffect />
  </div>
);

export default Wrapper;
