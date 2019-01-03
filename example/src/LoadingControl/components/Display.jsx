import React from 'react';
import { Button } from 'antd';
import { loadFollower } from '../../shared/load';
import Lines from '../../shared/Lines';

const Display = ({ user, follower }) => (
  <div style={{ flex: 1, width: '100%', padding: 10 }}>
    <h1>{user}</h1>
    <Lines lines={follower} />
    <Button onClick={loadFollower}>more</Button>
  </div>
);

export default Display;
