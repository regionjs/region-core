import React, { Fragment } from 'react';
import { createRegion } from 'region-core';
import { Card, Radio, Button } from 'antd';
import { fetchA, fetchB, fetchC } from '../shared/fetch';

const nextCallRegion = createRegion()
const resultRegion = createRegion(null)

const fetchCalls = {
  a: fetchA,
  b: fetchB,
  c: fetchC,
};

const handleRadio = e => nextCallRegion.set(() => {
  const fetch = fetchCalls[e.target.value]
  return resultRegion.loadBy(fetch);
});

const Display = () => (
  <Card style={{ width: 300, margin: 30 }}>
    <Radio.Group onChange={handleRadio}>
      <Radio.Button value="a">A</Radio.Button>
      <Radio.Button value="b">B</Radio.Button>
      <Radio.Button value="c">C</Radio.Button>
    </Radio.Group>
  </Card>
);

const Result = () => {
  const nextCallLoading = nextCallRegion.useLoading()
  const resultLoading = resultRegion.useLoading()
  const nextCall = nextCallRegion.useValue()
  const result = resultRegion.useValue()
  console.log(nextCall);
  return (
    <Card style={{ width: 300, margin: 30 }}>
      <p>{result}</p>
      <Button loading={nextCallLoading || resultLoading} onClick={nextCall}>Call</Button>
    </Card>
  );
}

const Panel = () => (
  <Fragment>
    <Display />
    <Result />
  </Fragment>
);

export default Panel;
