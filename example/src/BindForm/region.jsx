import React from 'react';
import { Region } from 'region-shortcut';
import { Input, Checkbox, Switch, Radio } from 'antd';
import { omit } from 'lodash';

class RegionForm extends Region {
  constructor() {
    super('bindForm');
  }

  handleChangeFactory = key => (value) => {
    this.set(key, value);
  }

  handleEventFactory = key => (e) => {
    this.set(key, e.target.value);
  }

  getHandlers = (key, Component) => {
    const { handleChangeFactory, handleEventFactory } = this;
    const handleChange = handleChangeFactory(key);
    const handleEvent = handleEventFactory(key);
    const standardChangeCallback = { onChange: handleChange };
    const standardEventCallback = { onChange: handleEvent };
    switch (Component) {
      case Input:
      case Radio.Group:
        return ['value', standardEventCallback];
      case Switch:
        return ['value', standardChangeCallback];
      case Checkbox.Group:
        return ['checked', standardChangeCallback];
      default: {
        const name = Component && Component.name;
        console.warn(`Can not unrecognized Component ${name || 'Unknown'}, data is bind on props.value and callback is bind on props.onChange`); // eslint-disable-line no-console
        return ['value', standardChangeCallback];
      }
    }
  }

  bindWith = (key, Component) => {
    const { connectWith, getHandlers } = this;
    const [valueName, handlers] = getHandlers(key, Component);
    const Hoc = ({ [key]: value, ...args }) => {
      const passByArgs = omit(args, ['value', 'loading', 'error', 'dispatch'].concat(Object.keys(handlers)));
      const valueObj = { [valueName]: value };
      return <Component {...valueObj} {...handlers} {...passByArgs} />;
    };
    return connectWith(key, Hoc);
  }
}

export default RegionForm;
