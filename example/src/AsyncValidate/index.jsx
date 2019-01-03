import React from 'react';
import { Card, Form, Input } from 'antd';
import { formRegion } from '../regions/regionForm';
import { loadValidate } from './interface';

const handleChange = e => loadValidate(e.target.value);

const getValidateStatus = (loading, value, message) => {
  if (value === null) {
    return null;
  }
  if (loading) {
    return 'validating';
  }
  if (message) {
    return 'error';
  }
  return 'success';
};

const AsyncValidate = ({ loading, validateValue, validateMessage }) => {
  const validateStatus = getValidateStatus(loading, validateValue, validateMessage);
  return (
    <Card style={{ width: 500, margin: 30 }}>
      <Form>
        <Form.Item
          hasFeedback
          validateStatus={validateStatus}
          help={loading ? 'validating' : validateMessage}
        >
          <Input
            placeholder="type some number"
            value={validateValue}
            onChange={handleChange}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default formRegion.connectWith(['validateValue', 'validateMessage'], AsyncValidate);
