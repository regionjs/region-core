import React from 'react';
import { Form, Input } from 'antd';
import { formRegion } from '../shared/regionForm';
import { loadValidate } from './load';
import Card from '../shared/Card';

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

const AsyncValidate = ({ loading, error, value }) => {
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

export default formRegion.connectWith('value', AsyncValidate);
