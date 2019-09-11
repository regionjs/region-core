import React, { Fragment, useMemo } from 'react';
import { createRegion } from 'region-core';
import { Input, Radio } from 'antd';
import Card from '../shared/Card';
import Lines from '../shared/Lines';
import Divider from '../shared/Divider';

const generate = (type, id) => ({
  id: String(id),
  type,
  value: `item with id === ${id} and type === ${type}`,
});

const animalRegion = createRegion(['cat', 'cat', 'dog', 'cat', 'dog'].map(generate));
const idRegion = createRegion();
const typeRegion = createRegion();

const getFilteredArray = (array, type) => {
  if (type && type !== 'all') {
    return array.filter(item => item.type === type);
  }
  return array;
};

const Result = ({ id, type }) => {
  const array = animalRegion.useValue();
  const memoizedArray = useMemo(
    () => getFilteredArray(array, type),
    [array, type],
  );
  const memoizedItem = useMemo(
    () => memoizedArray.find(item => item.id === id),
    [memoizedArray, id],
  );
  return (
    <Card>
      <p>Active</p>
      <p>{memoizedItem ? memoizedItem.value : 'null'}</p>
      <Divider />
      <Lines lines={memoizedArray.map(i => i.value)} />
    </Card>
  );
};


const handleInput = e => idRegion.set(e.target.value);
const handleRadio = e => typeRegion.set(e.target.value);

const Panel = () => {
  const id = idRegion.useValue();
  const type = typeRegion.useValue();
  return (
    <Fragment>
      <Card>
        <Input value={id} onChange={handleInput} />
        <Divider />
        <Radio.Group value={type} onChange={handleRadio}>
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="cat">Cat</Radio.Button>
          <Radio.Button value="dog">Dog</Radio.Button>
        </Radio.Group>
      </Card>
      <Result id={id} type={type} />
    </Fragment>
  );
};

export default Panel;
