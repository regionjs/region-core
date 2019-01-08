import React, { Fragment } from 'react';
import { Switch } from 'antd';
import { formRegion } from '../shared/regionForm';
import Card from '../shared/Card';

const handleChange = value => formRegion.set('a', value);

const FormCard = ({ a }) => (
  <Card>
    <Switch checked={a} onChange={handleChange} />
  </Card>
);

const FormConnected = formRegion.connectWith('a', FormCard);

const Result = ({ a }) => (
  <Card>
    {JSON.stringify({ a })}
  </Card>
);

const ResultConnected = formRegion.connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => <Fragment><FormConnected /><ResultConnected /></Fragment>;

export default Panel;
