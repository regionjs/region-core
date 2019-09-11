import React from 'react';
import { createRegion } from 'region-core';
import { Form, Input } from 'antd';
import Card from '../shared/Card';
import { fetchValidate } from '../shared/fetch';

const asyncValidateRegion = createRegion(null);

const loadValidate = (value) => {
  asyncValidateRegion.set(value);
  asyncValidateRegion.loadBy(fetchValidate)(value);
};

const handleChange = e => loadValidate(e.target.value);

const getValidateStatus = ({ loading, error, value }) => {
  if (value === null) {
    return null;
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
  const { loading, error, data: value } = asyncValidateRegion.useProps();
  const validateStatus = getValidateStatus({ loading, error, value });
  return (
    <Card>
      <Form.Item
        hasFeedback
        validateStatus={validateStatus}
        help={loading ? 'validating...' : error}
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
