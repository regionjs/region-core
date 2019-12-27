import React, { Component } from 'react';
import { createRegion } from 'region-core';
import { Input, Card, Divider } from '../components';

const region = createRegion('initialValue');

const handleChange = (e: any) => region.set(e.target.value);

class ClassComponent extends Component<{value: string}> {
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

const withValue = (ComponentIn: any) => {
  const ComponentOut = (props: any) => {
    const value = region.useValue();
    return <ComponentIn value={value} {...props}/>;
  };
  return ComponentOut;
};

export default withValue(ClassComponent);
