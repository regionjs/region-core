import React from 'react';
import { connectWith } from 'redux-loadings';
import { Card } from 'antd';
import { loadFollower } from '../interface';
import Lines from '../components/Lines';

const Display = ({ loading, user, follower }) => (
  <Card
    loading={loading}
    title={user}
    extra={<a onClick={loadFollower}>More</a>}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
  </Card>
);

export default connectWith(['user', 'follower'], Display);
