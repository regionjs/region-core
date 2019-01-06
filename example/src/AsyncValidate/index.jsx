import React from 'react';
import { Card, Form, Input } from 'antd';
import { formRegion } from '../shared/regionForm';
import { loadValidate } from './load';

const handleChange = e => loadValidate(e.target.value);

const getValidateStatus = (loading, value, error) => {
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

const AsyncValidate = ({ loading, value, error }) => {
  const validateStatus = getValidateStatus(loading, value, error);
  return (
    <Card style={{ width: 500, margin: 30 }}>
      <Form>
        <Form.Item
          hasFeedback
          validateStatus={validateStatus}
          help={loading ? 'validating' : error}
        >
          <Input
            placeholder="type some number"
            value={value}
            onChange={handleChange}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default formRegion.connectWith(['value', 'error'], AsyncValidate);
