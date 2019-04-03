import React from 'react';
import { set, load, useProps } from 'region-shortcut';
import { Button, Spin } from 'antd';
import Card from '../shared/Card';

set('leftPart')
set('rightPart')

const fetch = () => new Promise((resolve) => {
  setTimeout(() => { resolve(); }, 1000);
});

const handleLeft = () => {
  load('leftPart', fetch)
}

const handleRight = () => {
  load('rightPart', fetch)
}

const LeftPart = () => {
  const { loading } = useProps('leftPart');
  return <Button loading={loading} onClick={handleLeft}>Load Left Part</Button>
}

const RightPart = () => {
  const { loading } = useProps('rightPart');
  return <Button loading={loading} onClick={handleRight}>Load Right Part</Button>
}

const SomethingIsLoading = () => {
  const { loading } = useProps(['leftPart', 'rightPart']);
  return <Button loading={loading} disabled>Something is loading</Button>
}

const Parent = () => {
  const { loading: loadingLeft } = useProps('leftPart');
  const { loading: loadingRight } = useProps('rightPart');
  return (
    <Card>
      <Spin spinning={loadingLeft && loadingRight}>
        <LeftPart />
        <br />
        <RightPart />
        <br />
        <SomethingIsLoading />
      </Spin>
    </Card>
  );
}
export default Parent;
