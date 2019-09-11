import React from 'react';
import { createRegion } from 'region-core';
import { Button, Spin } from 'antd';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const leftPartRegion = createRegion(null);
const rightPartRegion = createRegion(null);

const fetch = () => new Promise(resolve => setTimeout(resolve, 1000));

const handleLeft = leftPartRegion.loadBy(fetch);

const handleRight = rightPartRegion.loadBy(fetch);

const LeftPart = () => {
  const loading = leftPartRegion.useLoading();
  return <Button loading={loading} onClick={handleLeft}>Load Left Part</Button>;
};

const RightPart = () => {
  const loading = rightPartRegion.useLoading();
  return <Button loading={loading} onClick={handleRight}>Load Right Part</Button>;
};

const SomethingIsLoading = () => {
  const loadingLeft = leftPartRegion.useLoading();
  const loadingRight = rightPartRegion.useLoading();
  return <Button loading={loadingLeft || loadingRight} disabled>Something is loading</Button>;
};

const Parent = () => {
  const loadingLeft = leftPartRegion.useLoading();
  const loadingRight = rightPartRegion.useLoading();
  return (
    <Card>
      <Spin spinning={loadingLeft && loadingRight}>
        <LeftPart />
        <Divider />
        <RightPart />
        <Divider />
        <SomethingIsLoading />
      </Spin>
    </Card>
  );
};
export default Parent;
