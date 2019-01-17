import React from 'react';
import { Button, Icon } from 'antd';
import { loadValueWithError } from './load';
import { formRegion } from '../shared/regionForm';
import Card from '../shared/Card';

formRegion.set('valueWithError1', null);
formRegion.set('valueWithError2', null);

const getStatus = ({ loading, error }) => {
  if (loading) {
    return 'loading';
  }
  if (error) {
    return 'close-circle';
  }
  return 'check-circle';
};

const Display = ({ loading, error, valueWithError1, valueWithError2 }) => {
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

export default formRegion.connectWith(['valueWithError1', 'valueWithError2'], Display);
