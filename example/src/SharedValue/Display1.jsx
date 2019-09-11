import React from 'react';
import { Card, Button, Lines } from '../components';
import { loadFollower, useLoading, useUser, useFollower } from './load';

const extra = <Button type="link" onClick={loadFollower}>More</Button>;

const Display = () => {
  const loading = useLoading();
  const user = useUser();
  const follower = useFollower();
  return (
    <Card
      loading={loading}
      title={user}
      extra={extra}
      style={{ width: 300, margin: 30 }}
    >
      <Lines lines={follower} />
    </Card>
  );
};

export default Display;
