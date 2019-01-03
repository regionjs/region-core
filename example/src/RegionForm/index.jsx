import React, { Fragment } from 'react';
import { Card, Switch } from 'antd';
import { formRegion } from '../shared/regionForm';

const handleChange = value => formRegion.set('a', value);

const FormCard = ({ a }) => (
  <Card style={{ width: 500, margin: 30 }}>
    <Switch checked={a} onChange={handleChange} />
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
