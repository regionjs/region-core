import React, { Fragment } from 'react';
import { Input, Switch, Radio, Checkbox } from 'antd';
import { formRegion } from '../shared/regionForm';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const handleChange = value => formRegion.set('a', value);
const handleInput = e => formRegion.set('b', e.target.value);
const handleRadio = e => formRegion.set('c', e.target.value);
const handleCheckBox = value => formRegion.set('d', value);

const FormCard = ({ a, b, c, d }) => (
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

const FormConnected = formRegion.connectWith(['a', 'b', 'c', 'd'], FormCard);

const Result = ({ a }) => (
  <Card>
    {JSON.stringify({ a })}
  </Card>
);

const ResultConnected = formRegion.connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => <Fragment><FormConnected /><ResultConnected /></Fragment>;

export default Panel;
