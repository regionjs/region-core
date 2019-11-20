import React, { Fragment, useMemo } from 'react';
import { createRegion } from 'region-core';
import { Radio, Card, Lines } from '../components';

const generate = (type, id) => ({
  id: String(id),
  type,
  value: `${type}-${id}`,
});

const animalRegion = createRegion(['cat', 'cat', 'dog', 'cat', 'dog'].map(generate));
const typeRegion = createRegion();

const getFilteredArray = (array, type) => {
  if (type && type !== 'all') {
    return array.filter(item => item.type === type);
  }
  return array;
};

const handleRadio = e => typeRegion.set(e.target.value);

const Panel = () => {
  const array = animalRegion.useValue();
  const type = typeRegion.useValue();
  const memoizedArray = useMemo(
    () => getFilteredArray(array, type),
    [array, type],
  );
  return (
    <Fragment>
      <Card>
        <Radio.Group value={type} onChange={handleRadio}>
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="cat">Cat</Radio.Button>
          <Radio.Button value="dog">Dog</Radio.Button>
        </Radio.Group>
      </Card>
      <Card>
        <Lines lines={memoizedArray.map(i => i.value)} />
      </Card>
    </Fragment>
  );
};

export default Panel;
