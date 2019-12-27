import React from 'react';
import { createRegion } from 'region-core';
import { Form, Input, Card } from '../components';
import { fetchValidate } from './api';

const asyncValidateRegion = createRegion<string>('');

const loadValidate = (value: string) => {
  asyncValidateRegion.set(value);
  asyncValidateRegion.loadBy(fetchValidate)(value);
};

const handleChange = (e: any) => loadValidate(e.target.value);

const getValidateStatus = ({ loading, error, value }: any) => {
  if (value === '') {
    return undefined;
  }
  if (loading) {
    return 'validating';
  }
  if (error) {
    return 'error';
  }
  return 'success';
};

const AsyncValidate = () => {
  const { loading, error, value } = asyncValidateRegion.useProps();
  const validateStatus = getValidateStatus({ loading, error, value });
  const errorMessage = error && error.message;
  return (
    <Card>
      <Form.Item
        hasFeedback
        validateStatus={validateStatus}
        help={loading ? 'validating...' : errorMessage}
      >
        <Input
          placeholder="type some number"
          value={value}
          onChange={handleChange}
        />
      </Form.Item>
    </Card>
  );
};

export default AsyncValidate;
