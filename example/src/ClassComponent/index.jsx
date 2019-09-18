import React, { Component } from 'react';
import { createRegion } from 'region-core';
import { Input, Card, Divider } from '../components';

const region = createRegion('initialValue');

const handleChange = e => region.set(e.target.value);

class ClassComponent extends Component {
  render() {
    const { value } = this.props;
    return (
     <Card>
       {value}
       <Divider/>
       <Input value={value} onChange={handleChange} />
     </Card>
    );
  }
}

const withValue = (ComponentIn) => {
  const ComponentOut = (props) => {
    const value = region.useValue();
    return <ComponentIn value={value} {...props}/>;
  };
  return ComponentOut;
};

export default withValue(ClassComponent);
