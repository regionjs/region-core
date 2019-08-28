import React from 'react';
import { CombinedRegion } from 'region-core';
import { Button, Icon } from 'antd';
import { fetchValueWithError } from '../shared/fetch';
import Card from '../shared/Card';

const errorRegion = new CombinedRegion()

const loadValueWithError = () => {
  errorRegion.load('valueWithError1', fetchValueWithError);
  errorRegion.load('valueWithError2', fetchValueWithError);
};

errorRegion.set('valueWithError1', null);
errorRegion.set('valueWithError2', null);

const getStatus = ({ loading, error }) => {
  if (loading) {
    return 'loading';
  }
  if (error) {
    return 'close-circle';
  }
  return 'check-circle';
};

const Display = () => {
  const { loading, error, valueWithError1, valueWithError2 } = errorRegion.useProps(['valueWithError1', 'valueWithError2']);
  const log = ''
    + `loading: ${loading}\n`
    + `value1: ${valueWithError1}\n`
    + `value2: ${valueWithError2}\n`
    + `error: ${error}\n`;
  return (
    <Card>
      <Icon type={getStatus({ loading, error })} />
      <pre>{log}</pre>
      <Button loading={loading} onClick={loadValueWithError}>Try Again</Button>
    </Card>
  );
};

export default Display;
