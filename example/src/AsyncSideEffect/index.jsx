import React from 'react';
import { connectWith } from 'region-shortcut';
import { Card, Button } from 'antd';
import { loadFollowerWithAsyncSideEffect } from './load';
import Lines from '../shared/Lines';

const Display = ({ loading, user, asyncSideEffect, follower }) => (
  <Card
    title={`${user}(${asyncSideEffect})`}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
    <Button loading={loading} onClick={loadFollowerWithAsyncSideEffect}>More</Button>
  </Card>
);

export default connectWith(['user', 'follower', 'asyncSideEffect'], Display);
