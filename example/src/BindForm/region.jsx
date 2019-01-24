import React from 'react';
import { Region } from 'region-shortcut';
import { Form } from 'antd';
import { omit } from 'lodash';
import antdAdapter from './adapter';

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

class RegionForm extends Region {
  constructor() {
    super('bindForm');
    this.adapter = antdAdapter;
  }

  handlerFactory = (key, selector, validate) => (value) => {
    const selectedValue = selector(value);
    this.set(key, selectedValue);
    if (validate) {
      this.load(key, validate, { params: selectedValue });
    }
  }

  bindWith = (key, Component, { validate } = {}) => {
    const { set, connectWith, handlerFactory, adapter } = this;
    set(key, null);
    const [valueName, handlerName, selector] = adapter(Component);
    const handler = handlerFactory(key, selector, validate);
    const Hoc = ({ loading, error, [key]: value, ...args }) => {
      const validateStatus = getValidateStatus({ loading, error, value });
      const passByArgs = omit(args, ['dispatch', valueName, handlerName]);
      const bindObj = { [valueName]: value, [handlerName]: handler };
      return (
        <Form.Item
          validateStatus={validateStatus}
          help={loading ? 'validating...' : error}
        >
          <Component {...bindObj} {...passByArgs} />
        </Form.Item>
      );
    };
    return connectWith(key, Hoc);
  }
}
export default RegionForm;
