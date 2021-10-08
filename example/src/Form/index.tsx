import React, { Fragment } from 'react';
import { createRegion } from 'region-core';
import { Descriptions } from 'antd';
import { Input, Switch, Radio, Checkbox, Card, Divider } from '../components';

interface Shape {
  a: boolean;
  b: string;
  c: string;
  d: string[];
}
const combinedRegion = createRegion<Shape>({ a: false, b: '', c: '', d: [] });

const setKeyValue = (key: any, value: any) => {
  combinedRegion.set((state) => ({ ...state, [key]: value }));
};

const handleChange = (value: boolean) => setKeyValue('a', value);
const handleInput = (e: any) => setKeyValue('b', e.target.value);
const handleRadio = (e: any) => setKeyValue('c', e.target.value);
const handleCheckBox = (value: any[]) => setKeyValue('d', value);

const FormCard = () => {
  const { a, b, c, d } = combinedRegion.useValue();
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
  const { a, b, c, d } = combinedRegion.useValue();
  return (
    <Card>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="A">{String(a)}</Descriptions.Item>
        <Descriptions.Item label="B">{b}</Descriptions.Item>
        <Descriptions.Item label="C">{c}</Descriptions.Item>
        <Descriptions.Item label="D">{d.join(', ')}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

const Panel = () => <Fragment><FormCard /><Result /></Fragment>;

export default Panel;
