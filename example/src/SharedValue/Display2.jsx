import React from 'react';
import { Card, Button } from 'antd';
import { loadFollower, clearFollower, useLoading, useUser, useFollower } from './load';
import Lines from '../shared/Lines';

const Display = () => {
  const loading = useLoading()
  const user = useUser();
  const follower = useFollower();
  return (
    <Card
      title={user}
      style={{ width: 300, margin: 30 }}
    >
      <Lines lines={follower} />
      <Button loading={loading} onClick={loadFollower}>More</Button>
      <Button loading={loading} onClick={clearFollower}>Clear</Button>
    </Card>
  );
};

export default Display;
