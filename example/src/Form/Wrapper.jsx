import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Input, Select, Radio, Checkbox } from 'antd';
import { setA, setB, setC, setD } from '../interface';

const { Option } = Select;

const handleInput = e => setA(e.target.value);
const handleRadio = e => setC(e.target.value);

const Divider = () => <div style={{ height: 10 }} />;

const FormCard = ({ a, b, c, d }) => (
  <Card style={{ width: 500, margin: 30 }}>
    <Input value={a} onChange={handleInput} />
    <Divider />
    <Select style={{ width: '100%' }} value={b} onChange={setB}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </Select>
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
