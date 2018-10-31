import React from 'react';
import Button from './Button';
import { loadFollower } from '../load';

const Display = ({ user, follower }) => (
  <div style={{ flex: 1, width: '100%', padding: 10 }}>
    <h1>{user}</h1>
    {follower && follower.map(f => <p>{f}</p>)}
    <Button onClick={loadFollower}>more</Button>
  </div>
);

export default Display;
