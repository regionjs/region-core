import React from 'react';
import { createLocalStorageRegion } from 'region-core';
import { Input } from 'antd';
import Card from '../shared/Card';

const localStorageRegion = createLocalStorageRegion('localStorage-key', 'some value stored in localStorage');

const handleChange = e => localStorageRegion.set(e.target.value);

const LocalStorageRegion = () => {
  const value = localStorageRegion.useValue()
  return (
    <Card>
      <Input value={value} onChange={handleChange} />
    </Card>
  );
}

export default LocalStorageRegion;
