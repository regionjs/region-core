import React, { useCallback, useState } from 'react';
import { createMappedRegion } from 'region-core';
import { Space } from 'antd';
import { Button, Card, Divider } from '../components';
import { fetchA, fetchB } from './mock';

type Key = 'A' | 'B'

const region = createMappedRegion<Key, unknown>();
const loadA = region.loadBy('A', fetchA);
const loadB = region.loadBy('B', fetchB);

const Component = () => {
  const [current, setCurrent] = useState<'A' | 'B'>('A');
  const value = region.useValue(current);
  const handleClickA = useCallback(
    () => {
      setCurrent('A');
      loadA();
    },
    [],
  );
  const handleClickB = useCallback(
    () => {
      setCurrent('B');
      loadB();
    },
    [],
  );
  return (
    <Card>
      <p>
        {'stale-while-revalidate is a cache invalidation strategy popularized by '}
        <a
          href={'https://tools.ietf.org/html/rfc5861'}
          target="_blank"
          rel="noopener noreferrer"
        >
          HTTP RFC 5861
        </a>
      </p>
      <Space>
        <Button onClick={handleClickA}>loadA</Button>
        <Button onClick={handleClickB}>loadB</Button>
      </Space>
      <Divider />
      {value}
    </Card>
  );
};

export default Component;
