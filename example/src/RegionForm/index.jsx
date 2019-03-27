import React, { Fragment } from 'react';
import { Input, Switch, Radio, Checkbox } from 'antd';
import { formRegion } from '../shared/regionForm';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const { set, useProps } = formRegion;

const handleChange = value => set('a', value);
const handleInput = e => set('b', e.target.value);
const handleRadio = e => set('c', e.target.value);
const handleCheckBox = value => set('d', value);

const FormCard = () => {
  const { a, b, c, d } = useProps(['a', 'b', 'c', 'd']);
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
  const { a, b, c, d } = useProps(['a', 'b', 'c', 'd']);
  return (
    <Card>
      {JSON.stringify({ a, b, c, d })}
    </Card>
  );
};

const Panel = () => <Fragment><FormCard /><Result /></Fragment>;

export default Panel;
