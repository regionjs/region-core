import React from 'react';
import { connectWith } from 'redux-loadings';
import { Card } from 'antd';
import { loadFollower } from '../interface';

const Display = ({ loading, user, follower }) => (
  <Card
    loading={loading}
    title={user}
    extra={<a onClick={loadFollower}>More</a>}
    style={{ width: 300, margin: 30 }}
  >
    {follower && follower.map((f, index) => <p key={index || 0}>{f}</p>)}
  </Card>
);

export default connectWith(['user', 'follower'], Display, Display);
