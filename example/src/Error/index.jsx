import React, { Component } from 'react';
import { Button } from 'antd';
import { loadValueWithError } from './load';
import { formRegion } from '../shared/regionForm';
import Card from '../shared/Card';

class Error extends Component {
  componentDidMount() {
    loadValueWithError();
  }

  render() {
    const { loading, error, valueWithError } = this.props;
    const log = ''
      + `loading: ${loading}\n`
      + `value: ${valueWithError}\n`
      + `error: ${error && error.message}\n`;
    return (
      <Card>
        <pre>{log}</pre>
        <Button loading={loading} onClick={loadValueWithError}>Try Again</Button>
      </Card>
    );
  }
}

export default formRegion.connectWith('valueWithError', Error);
