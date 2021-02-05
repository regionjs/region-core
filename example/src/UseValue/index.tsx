import React from 'react';
import { createRegion } from 'region-core';
import { Input, Card, Divider } from '../components';

const region = createRegion('initialValue');

const handleChange = (e: any) => region.set(e.target.value);

const Component = () => {
  const value = region.useValue();
  return (
    <Card>
      {value}
      <Divider/>
      <Input style={{ width: 300 }} value={value} onChange={handleChange} />
    </Card>
  );
};

export default Component;
