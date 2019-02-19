import React from 'react';
import { region } from 'region-shortcut';
import { Card, Button } from 'antd';
import { loadFollower } from '../shared/load';
import Lines from '../shared/Lines';

const { useProps } = region;

const Display = () => {
  const { loading, user, follower } = useProps(['user', 'follower']);
  return (
    <Card
      title={user}
      style={{ width: 300, margin: 30 }}
    >
      <Lines lines={follower} />
      <Button loading={loading} onClick={loadFollower}>More</Button>
    </Card>
  );
};

export default Display;
