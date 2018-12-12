import React from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Button } from 'antd';
import { loadFollower, clearFollower } from '../interface';
import Lines from '../components/Lines';

const Display = ({ loading, user, follower }) => (
  <Card
    title={user}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
    <Button loading={loading} onClick={loadFollower}>More</Button>
    <Button loading={loading} onClick={clearFollower}>Clear</Button>
  </Card>
);

export default connectWith(['user', 'follower'], Display);
