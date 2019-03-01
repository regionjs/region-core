import React, { Fragment, useMemo } from 'react';
import { useProps } from 'region-shortcut';
import { Input, Radio } from 'antd';
import { setId, setType } from './load';
import Card from '../shared/Card';
import Lines from '../shared/Lines';
import Divider from '../shared/Divider';

const getFilteredArray = (array, type) => {
  if (type && type !== 'all') {
    return array.filter(item => item.type === type);
  }
  return array;
};

const Result = ({ id, type }) => {
  const { array } = useProps('array');
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


const handleInput = e => setId(e.target.value);
const handleRadio = e => setType(e.target.value);

const Panel = () => {
  const { id, type } = useProps(['id', 'type']);
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
