import React from 'react';
import { Input } from 'antd';
import Card from '../shared/Card';
import RegionLocalStorage from './region';

const myRegion = new RegionLocalStorage();

const { set, useProps } = myRegion;

const handleChange = e => set('value', e.target.value);

const ExtendRegion = () => {
  const { value} = useProps('value');
  return (
    <Card>
      <Input value={value} onChange={handleChange} />
    </Card>
  );
}

export default ExtendRegion;
