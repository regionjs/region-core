import React, { Fragment } from 'react';
import { Input, Switch, Radio, Checkbox } from 'antd';
import RegionForm from './region';
import Card from '../shared/Card';

const myRegion = new RegionForm({
  name: 'bindForm',
  defaultProps: {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 20 },
    },
  },
});

const { bindWith } = myRegion;

const validate = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.9) {
      resolve();
    } else {
      reject(new Error('error'));
    }
  }, 500);
});

const SwitchA = bindWith('a', Switch, { validate });
const InputB = bindWith('b', Input, { validate });
const RadioGroupC = bindWith('c', Radio.Group, { validate });
const CheckBoxGroupD = bindWith('d', Checkbox.Group, { validate });

const Form = () => (
  <Card>
    <SwitchA label="A" />
    <InputB label="B" />
    <RadioGroupC label="C" options={['Hangzhou', 'Shanghai', 'Beijing', 'Chengdu']} />
    <CheckBoxGroupD label="D" options={['Apple', 'Pear', 'Orange']} />
  </Card>
);

const Result = ({ a, b, c, d }) => (
  <Card>
    {JSON.stringify({ a, b, c, d })}
  </Card>
);

const ResultConnected = myRegion.connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => (
  <Fragment>
    <Form />
    <ResultConnected />
  </Fragment>
);

export default Panel;
