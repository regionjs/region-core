import React, { Fragment } from 'react';
import { createCombinedRegion } from 'region-core';
import { Input, Switch, Radio, Checkbox, Card, Divider } from '../components';

interface Shape {
  a: boolean;
  b: string;
  c: string;
  d: string[];
}
const combinedRegion = createCombinedRegion<Shape>();

const handleChange = (value: boolean) => combinedRegion.set('a', value);
const handleInput = (e: any) => combinedRegion.set('b', e.target.value);
const handleRadio = (e: any) => combinedRegion.set('c', e.target.value);
const handleCheckBox = (value: any[]) => combinedRegion.set('d', value);

const FormCard = () => {
  const {
    a, b, c, d,
  } = combinedRegion.useProps(['a', 'b', 'c', 'd']);
  return (
    <Card>
      <Switch checked={a} onChange={handleChange} />
      <Divider />
      <Input value={b} onChange={handleInput} />
      <Divider />
      <Radio.Group value={c} onChange={handleRadio} options={['Hangzhou', 'Shanghai', 'Beijing', 'Chengdu']} />
      <Divider />
      <Checkbox.Group options={['Apple', 'Pear', 'Orange']} value={d} onChange={handleCheckBox} />
    </Card>
  );
};

const Result = () => {
  const {
    a, b, c, d,
  } = combinedRegion.useProps(['a', 'b', 'c', 'd']);
  return (
    <Card>
      {JSON.stringify({
        a, b, c, d,
      })}
    </Card>
  );
};

const Panel = () => <Fragment><FormCard /><Result /></Fragment>;

export default Panel;
