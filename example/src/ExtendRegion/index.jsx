import React from 'react';
import { Input } from 'antd';
import Card from '../shared/Card';
import RegionLocalStorage from './region';

const myRegion = new RegionLocalStorage();

const handleChange = e => myRegion.set('value', e.target.value);

const ExtendRegion = ({ value }) => (
  <Card>
    <Input value={value} onChange={handleChange} />
  </Card>
);

export default myRegion.connectWith('value', ExtendRegion);
