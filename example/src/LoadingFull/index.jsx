import React from 'react';
import { connectWith } from 'region-shortcut';
import { Card } from 'antd';
import { loadFollower } from '../shared/load';
import Lines from '../shared/Lines';

const extra = <a onClick={loadFollower}>More</a>; // eslint-disable-line

const Display = ({ loading, user, follower }) => (
  <Card
    loading={loading}
    title={user}
    extra={extra}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
  </Card>
);

export default connectWith(['user', 'follower'], Display);
