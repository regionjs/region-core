import React from 'react';
import { createCombinedRegion } from 'region-core';
import { Button, Divider, Icon, Card } from '../components';
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

const getStatus = ({ loading, error }: {loading: boolean, error: Error}) => {
  if (loading) {
    return 'loading';
  }
  if (error) {
    return 'close-circle';
  }
  return 'check-circle';
};

const Display = () => {
  // loading and error is combined
  const { loading, error, value1, value2 } = errorRegion.useProps(['value1', 'value2']);
  return (
    <Card>
      {'Status: '}<Icon type={getStatus({ loading, error })} />
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
