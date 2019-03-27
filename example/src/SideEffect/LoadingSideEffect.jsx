import React from 'react';
import { connect, useProps } from 'region-shortcut';
import { Card, Button } from 'antd';
import { loadFollowerWithAsyncSideEffect } from './load';
import Lines from '../shared/Lines';

const Title = ({ asyncSideEffect }) => `The number of follower: ${asyncSideEffect}`;

const Loading = () => 'loading...';

const LoadingTitle = connect('asyncSideEffect', { Loading })(Title);

const Display = () => {
  const { loading, follower } = useProps('follower');
  return (
    <Card
      title={<LoadingTitle />}
      style={{ width: 300, margin: 30 }}
    >
      <Lines lines={follower} />
      <Button loading={loading} onClick={loadFollowerWithAsyncSideEffect}>More</Button>
    </Card>
  );
}

export default Display;
