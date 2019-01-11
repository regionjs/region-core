import React, { Fragment } from 'react';
import { Input, Switch, Radio, Checkbox } from 'antd';
import RegionForm from './region';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const myRegion = new RegionForm();

const { bindWith } = myRegion;
const SwitchA = bindWith('a', Switch);
const InputB = bindWith('b', Input);
const RadioGroupC = bindWith('c', Radio.Group);
const CheckBoxGroupD = bindWith('d', Checkbox.Group);

const Form = () => (
  <Card>
    <SwitchA />
    <Divider />
    <InputB />
    <Divider />
    <RadioGroupC options={['Hangzhou', 'Shanghai', 'Beijing', 'Chengdu']} />
    <Divider />
    <CheckBoxGroupD options={['Apple', 'Pear', 'Orange']} />
  </Card>
);

const Result = ({ a, b, c, d }) => (
  <Card>
    {JSON.stringify({ a, b, c, d })}
  </Card>
);

const ResultConnected = myRegion.connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => <Fragment><Form /><ResultConnected /></Fragment>;

export default Panel;
