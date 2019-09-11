import React, { Fragment } from 'react';
import { CombinedRegion } from 'region-core';
import { Input, Switch, Radio, Checkbox } from 'antd';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const combinedRegion = new CombinedRegion();

const handleChange = value => combinedRegion.set('a', value);
const handleInput = e => combinedRegion.set('b', e.target.value);
const handleRadio = e => combinedRegion.set('c', e.target.value);
const handleCheckBox = value => combinedRegion.set('d', value);

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
