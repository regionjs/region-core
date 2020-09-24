import React from 'react';
import { createCombinedRegion } from 'region-core';
import { LoadingOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Card } from '../components';
import { fetchValue1, fetchValue2 } from './api';

interface Shape {
  value1: string;
  value2: string;
}
const errorRegion = createCombinedRegion<Shape>();

const loadValueWithError = () => {
  errorRegion.load('value1', fetchValue1);
  errorRegion.load('value2', fetchValue2);
};

loadValueWithError();

const getIcon = ({ loading, error }: {loading: boolean, error: Error}) => {
  if (loading) {
    return <LoadingOutlined />;
  }
  if (error) {
    return <CloseCircleOutlined />;
  }
  return <CheckCircleOutlined />;
};

const Display = () => {
  // loading and error is combined
  // @ts-ignore
  const { loading, error, value1, value2 } = errorRegion.useProps(['value1', 'value2']);
  return (
    <Card>
      {'Status: '}{getIcon({ loading, error })}
      <Divider />
      {'Value will remain last resolved value'}
      <pre>{`value1: ${value1}\nvalue2: ${value2}\n`}</pre>
      {'Error will be combined'}
      <pre>{`error message: ${error && error.message}\n`}</pre>
      <Button loading={loading} onClick={loadValueWithError}>Try Again</Button>
    </Card>
  );
};

export default Display;
