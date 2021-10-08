import React from 'react';
import { createRegion } from 'region-core';
import { Space } from 'antd';
import { Button, List, Card } from '../components';
import { getList, postList, putList, patchList, deleteList } from './mockList';

interface Item {
  id: number;
  value: number;
}

interface Shape {
  [key: number]: Item;
}
const listRegion = createRegion<Shape>();
listRegion.load(getList());

/* eslint-disable no-param-reassign */
const handleGet = listRegion.loadBy(getList);

const handlePost = listRegion.loadBy(
  postList,
  (state = {}, result) => {
    state[result.id] = result;
    return state;
  },
);

const handlePutBy = listRegion.loadBy(
  putList,
  (state = {}, result) => {
    state[result.id] = result;
    return state;
  },
);

const handlePatchBy = listRegion.loadBy(
  patchList,
  (state = {}, result) => {
    state[result.id] = result;
    return state;
  },
);

const handleDeleteBy = listRegion.loadBy(
  deleteList,
  (state = {}, result, id) => {
    delete state[id];
    return state;
  },
);
/* eslint-enable no-param-reassign */

const deNormalize = (entity = {}) => {
  const array: any[] = [];
  Object.keys(entity).forEach((key) => {
    // @ts-ignore
    const item = entity[key];
    array.push(item);
  });
  return array;
};

const Component = () => {
  const loading = listRegion.useLoading();
  const list = listRegion.useValue();
  const formattedList = deNormalize(list);
  return (
    <Card>
      <a
        href={'https://en.wikipedia.org/wiki/Representational_state_transfer'}
        target="_blank"
        rel="noopener noreferrer"
      >
        What is RESTful?
      </a>
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
                <Space>
                  <Button onClick={handlePut}>PUT</Button>
                  <Button onClick={handlePatch}>PATCH</Button>
                  <Button onClick={handleDelete}>DELETE</Button>
                </Space>
              </List.Item>
            );
          }
        }
      />
    </Card>
  );
};

export default Component;
