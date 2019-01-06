import React from 'react';
import { connectWith } from 'redux-loadings';
import { Card } from 'antd';
import { loadFollower } from '../shared/load';
import Lines from '../shared/Lines';

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
