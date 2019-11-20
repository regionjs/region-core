import React from 'react';
import { createRegion } from 'region-core';
import { Button, Card, Divider } from '../components';
import { fetchA, fetchB } from './mock';

const region = createRegion();
const loadA = region.loadBy(fetchA, { id: 'A' });
const loadB = region.loadBy(fetchB, { id: 'B' });

export default () => {
  const value = region.useValue();
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
      <Button onClick={loadA}>loadA</Button>
      <Button onClick={loadB}>loadB</Button>
      <Divider />
      {value}
    </Card>
  );
};
