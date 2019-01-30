import React, { Fragment } from 'react';
import { RegionForm } from 'region-form';
import { Input, Switch, Radio, Checkbox } from 'antd';
import Card from '../shared/Card';

const myRegion = new RegionForm({
  name: 'myForm',
  defaultProps: {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 20 },
    },
  },
  initialValues: {
    a: false,
    b: 'value',
    c: 'Hangzhou',
    d: ['Apple', 'Pear'],
  },
});

const { bindWith, connectWith } = myRegion;

const validate = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (Math.random() < 0.5) {
    throw new Error('value is invalid');
  }
};

const SwitchA = bindWith('a', Switch, { validate });
const InputB = bindWith('b', Input, { validate });
const RadioGroupC = bindWith('c', Radio.Group, { validate });
const CheckBoxGroupD = bindWith('d', Checkbox.Group, { validate });

const Form = () => (
  <Card>
    <SwitchA label="LabelA" />
    <InputB label="LabelB" />
    <RadioGroupC label="LabelC" options={['Hangzhou', 'Shanghai', 'Beijing', 'Chengdu']} />
    <CheckBoxGroupD label="LabelD" options={['Apple', 'Pear', 'Orange']} />
  </Card>
);

const Result = ({ loading, error, a, b, c, d }) => (
  <Card>
    {JSON.stringify({ loading, error, a, b, c, d })}
  </Card>
);

const ResultConnected = connectWith(['a', 'b', 'c', 'd'], Result);

const Panel = () => (
  <Fragment>
    <Form />
    <ResultConnected />
  </Fragment>
);

export default Panel;
