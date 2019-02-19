import React from 'react';
import { connectWith } from 'region-shortcut';
import { Card, Button } from 'antd';
import { loadFollowerWithAsyncSideEffect } from './load';
import Lines from '../shared/Lines';

const Title = ({ asyncSideEffect }) => `The number of follower: ${asyncSideEffect}`;

const Loading = () => 'loading...';

const LoadingTitle = connectWith('asyncSideEffect', Title, { Loading });

const Display = ({ loading, follower }) => (
  <Card
    title={<LoadingTitle />}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
    <Button loading={loading} onClick={loadFollowerWithAsyncSideEffect}>More</Button>
  </Card>
);

export default connectWith(['follower'], Display);
