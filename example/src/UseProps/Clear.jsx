import React from 'react';
import { useProps } from 'region-shortcut';
import { Card, Button } from 'antd';
import { loadFollower, clearFollower } from '../shared/load';
import Lines from '../shared/Lines';

const Display = () => {
  const { loading, user, follower } = useProps(['user', 'follower']);
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
