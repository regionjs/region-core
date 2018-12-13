import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Input, Radio } from 'antd';
import { setId, setType } from '../interface';
import Lines from '../components/Lines';
import Divider from '../components/Divider';

const Result = ({ item, array }) => (
  <Card style={{ width: 500, margin: 30 }}>
    <p>Active</p>
    <p>{item ? item.value : 'null'}</p>
    <Divider />
    <Lines lines={array.map(i => i.value)} />
  </Card>
);

const getFilteredArray = (array, type) => {
  if (type && type !== 'all') {
    return array.filter(item => item.type === type);
  }
  return array;
};

const ResultConnected = connectWith({
  entity: 'array',
  selector: ({ array }, { id, type }) => {
    const filteredArray = getFilteredArray(array, type);
    return { item: filteredArray.find(item => item.id === id), array: filteredArray };
  },
}, Result);

const handleInput = e => setId(e.target.value);
const handleRadio = e => setType(e.target.value);

const Panel = ({ id, type }) => (
  <Fragment>
    <Card style={{ width: 500, margin: 30 }}>
      <Input value={id} onChange={handleInput} />
      <Divider />
      <Radio.Group value={type} onChange={handleRadio}>
        <Radio.Button value="all">All</Radio.Button>
        <Radio.Button value="cat">Cat</Radio.Button>
        <Radio.Button value="dog">Dog</Radio.Button>
      </Radio.Group>
    </Card>
    <ResultConnected id={id} type={type} />
  </Fragment>
);

const PanelConnected = connectWith(['id', 'type'], Panel);

export default PanelConnected;
