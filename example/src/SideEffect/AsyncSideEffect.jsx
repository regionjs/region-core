import React from 'react';
import { useProps } from 'region-shortcut';
import { Card, Button } from 'antd';
import { loadFollowerWithAsyncSideEffect } from './load';
import Lines from '../shared/Lines';

const Display = () => {
  const { loading, asyncSideEffect, follower } = useProps(['follower', 'asyncSideEffect']);
  return (
    <Card
      title={`The number of follower: ${asyncSideEffect}`}
      style={{ width: 300, margin: 30 }}
    >
      <Lines lines={follower} />
      <Button loading={loading} onClick={loadFollowerWithAsyncSideEffect}>More</Button>
    </Card>
  );
}

export default Display;
