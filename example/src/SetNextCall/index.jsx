import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Radio, Button } from 'antd';
import { setNextCall, loadResultFactory } from './load';

const handleRadio = e => setNextCall(loadResultFactory(e.target.value));

const Display = () => (
  <Card style={{ width: 300, margin: 30 }}>
    <Radio.Group onChange={handleRadio}>
      <Radio.Button value="a">A</Radio.Button>
      <Radio.Button value="b">B</Radio.Button>
      <Radio.Button value="c">C</Radio.Button>
    </Radio.Group>
  </Card>
);

const Result = ({ loading, nextCall, result }) => (
  <Card style={{ width: 300, margin: 30 }}>
    <p>{result}</p>
    <Button loading={loading} onClick={nextCall}>Call</Button>
  </Card>
);

const ResultConnected = connectWith(['nextCall', 'result'], Result);

const Panel = () => (
  <Fragment>
    <Display />
    <ResultConnected />
  </Fragment>
);

export default Panel;
