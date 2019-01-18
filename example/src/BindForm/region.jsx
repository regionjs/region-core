import React from 'react';
import { Region } from 'region-shortcut';
import { omit } from 'lodash';
import antdAdapter from './adapter';

class RegionForm extends Region {
  constructor() {
    super('bindForm');
    this.adapter = antdAdapter;
  }

  handlerFactory = (key, selector) => (value) => {
    this.set(key, selector(value));
  }

  bindWith = (key, Component) => {
    const { connectWith, handlerFactory, adapter } = this;
    const [valueName, handlerName, selector] = adapter(Component);
    const handler = handlerFactory(key, selector);
    const Hoc = ({ [key]: value, ...args }) => {
      const passByArgs = omit(args, ['loading', 'error', 'dispatch', valueName, handlerName]);
      const bindObj = { [valueName]: value, [handlerName]: handler };
      return <Component {...bindObj} {...passByArgs} />;
    };
    return connectWith(key, Hoc);
  }
}
export default RegionForm;
