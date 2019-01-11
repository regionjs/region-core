import React, { Fragment } from 'react';
import { connectWith } from 'region-shortcut';
import { Input, Switch, Radio, Checkbox } from 'antd';
import { setA, setB, toggleA, setC, setD } from './load';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const handleSwitch = Math.random() < 0.5 ? setA : toggleA; // both works
const handleInput = e => setB(e.target.value);
const handleRadio = e => setC(e.target.value);
const handleCheckBox = setD;

const FormCard = ({ a, b, c, d }) => (
  <Card>
    <Switch checked={a} onChange={handleSwitch} />
    <Divider />
    <Input value={b} onChange={handleInput} />
    <Divider />
    <Radio.Group value={c} onChange={handleRadio} options={['Hangzhou', 'Shanghai', 'Beijing', 'Chengdu']} />
    <Divider />
    <Checkbox.Group options={['Apple', 'Pear', 'Orange']} value={d} onChange={handleCheckBox} />
  </Card>
);

const FormConnected = connectWith(['a', 'b', 'c', 'd'], FormCard);

const Result = ({ a, b, c, d }) => (
  <Card>
    {JSON.stringify({ a, b, c, d })}
  </Card>
);

const ResultConnected = connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => <Fragment><FormConnected /><ResultConnected /></Fragment>;

export default Panel;
