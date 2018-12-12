import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Input, Switch, Radio, Checkbox } from 'antd';
import { setA, setB, toggleB, setC, setD } from '../interface';
import Divider from '../components/Divider';

const handleInput = e => setA(e.target.value);
const handleSwitch = Math.random() < 0.5 ? setB : toggleB; // both works
const handleRadio = e => setC(e.target.value);

const FormCard = ({ a, b, c, d }) => (
  <Card style={{ width: 500, margin: 30 }}>
    <Input value={a} onChange={handleInput} />
    <Divider />
    <Switch checked={b} onChange={handleSwitch} />
    <Divider />
    <Radio.Group value={c} onChange={handleRadio}>
      <Radio.Button value="hangzhou">Hangzhou</Radio.Button>
      <Radio.Button value="shanghai">Shanghai</Radio.Button>
      <Radio.Button value="beijing">Beijing</Radio.Button>
      <Radio.Button value="chengdu">Chengdu</Radio.Button>
    </Radio.Group>
    <Divider />
    <Checkbox.Group options={['Apple', 'Pear', 'Orange']} value={d} onChange={setD} />
  </Card>
);

const FormConnected = connectWith(['a', 'b', 'c', 'd'], FormCard);

const Result = ({ a, b, c, d }) => (
  <Card style={{ width: 500, margin: 30 }}>
    {JSON.stringify({ a, b, c, d })}
  </Card>
);

const ResultConnected = connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => <Fragment><FormConnected /><ResultConnected /></Fragment>;

export default Panel;
