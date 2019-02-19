import React from 'react';
import { connectWith } from 'region-shortcut';
import { Card, Button } from 'antd';
import { loadFollowerWithAsyncSideEffect } from './load';
import Lines from '../shared/Lines';

const Display = ({ loading, asyncSideEffect, follower }) => (
  <Card
    title={`The number of follower: ${asyncSideEffect}`}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
    <Button loading={loading} onClick={loadFollowerWithAsyncSideEffect}>More</Button>
  </Card>
);

export default connectWith(['follower', 'asyncSideEffect'], Display);
