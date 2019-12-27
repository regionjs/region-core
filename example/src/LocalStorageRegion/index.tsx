import React from 'react';
import { createLocalStorageRegion } from 'region-core';
import { Input, Card } from '../components';

const localStorageRegion = createLocalStorageRegion('localStorage-key', 'some value stored in localStorage');

const handleChange = (e: any) => localStorageRegion.set(e.target.value);

const LocalStorageRegion = () => {
  const value = localStorageRegion.useValue();
  return (
    <Card>
      <Input value={value} onChange={handleChange} />
    </Card>
  );
};

export default LocalStorageRegion;
