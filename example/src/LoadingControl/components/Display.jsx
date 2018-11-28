import React from 'react';
import { Button } from 'antd';
import { loadFollower } from '../../interface';

const Display = ({ user, follower }) => (
  <div style={{ flex: 1, width: '100%', padding: 10 }}>
    <h1>{user}</h1>
    {follower && follower.map((f, index) => <p key={index || 0}>{f}</p>)}
    <Button onClick={loadFollower}>more</Button>
  </div>
);

export default Display;
