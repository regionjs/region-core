import React, { Fragment } from 'react';
import { Card, Input } from 'antd';
import { formRegion } from './region';

const setA = e => formRegion.set('a', e.target.value);

const FormCard = ({ a }) => (
  <Card style={{ width: 500, margin: 30 }}>
    <Input value={a} onChange={setA} />
  </Card>
);

const FormConnected = formRegion.connectWith('a', FormCard);

const Result = ({ a }) => (
  <Card style={{ width: 500, margin: 30 }}>
    {JSON.stringify({ a })}
  </Card>
);

const ResultConnected = formRegion.connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => <Fragment><FormConnected /><ResultConnected /></Fragment>;

export default Panel;
