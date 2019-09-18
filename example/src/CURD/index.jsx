import React from 'react';
import { createRegion } from 'region-core';
import { Button, List, Card } from '../components';
import { getList, postList, putList, patchList, deleteList } from './mockList';

const listRegion = createRegion();
listRegion.load(getList);

/* eslint-disable no-param-reassign */
const handleGet = listRegion.loadBy(getList);

const handlePost = listRegion.loadBy(
  postList,
  (state, result) => {
    state[result.id] = result;
    return state;
  },
);

const handlePutBy = listRegion.loadBy(
  putList,
  (state, result) => {
    state[result.id] = result;
    return state;
  },
);

const handlePatchBy = listRegion.loadBy(
  patchList,
  (state, result) => {
    state[result.id] = result;
    return state;
  },
);

const handleDeleteBy = listRegion.loadBy(
  deleteList,
  (state, result, params) => {
    const { id } = params;
    delete state[id];
    return state;
  },
);
/* eslint-enable no-param-reassign */

const deNormalize = (entity = {}) => {
  const array = [];
  Object.keys(entity).forEach((key) => {
    array.push(entity[key]);
  });
  return array;
};

export default () => {
  const loading = listRegion.useLoading();
  const list = listRegion.useValue();
  const formattedList = deNormalize(list);
  return (
    <Card>
      <List
        loading={loading}
        dataSource={formattedList}
        header={<Button onClick={handleGet}>GET</Button>}
        footer={<Button onClick={handlePost}>POST</Button>}
        renderItem={
          (item) => {
            const nextItem = { id: item.id, value: item.value + 1 };
            const handlePut = () => handlePutBy(nextItem);
            const handlePatch = () => handlePatchBy(nextItem);
            const handleDelete = () => handleDeleteBy(item.id);
            return (
              <List.Item>
                <span style={{ flex: 1 }}>{item.value}</span>
                <Button onClick={handlePut}>PUT</Button>
                <Button onClick={handlePatch}>PATCH</Button>
                <Button onClick={handleDelete}>DELETE</Button>
              </List.Item>
            );
          }
        }
      />
    </Card>
  );
};
