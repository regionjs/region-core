import React from 'react';
import { load, useProps } from 'region-shortcut';
import { Button, List } from 'antd';
import Card from '../shared/Card';
import { getList, postList, putList, patchList, deleteList } from "./mockList";

load('list', getList);

const handleGet = () => load('list', getList);
const handlePost = () => load('list', postList, {
  format: (result, snapshot) => {
    snapshot[result.id] = result;
    return snapshot;
  }
});
const handlePutBy = params => load('list', putList, {
  params,
  format: (result, snapshot) => {
    snapshot[result.id] = result;
    return snapshot;
  }
});
const handlePatchBy = params => load('list', patchList, {
  params,
  format: (result, snapshot) => {
    snapshot[result.id] = result;
    return snapshot;
  }
});
const handleDeleteBy = (id) => load('list', deleteList, {
  params: id,
  format: (result, snapshot) => {
    delete snapshot[id];
    return snapshot;
  }
});

const deNormalize = (entity = {}) => {
  const array = []
  Object.keys(entity).forEach(key => {
    array.push(entity[key]);
  })
  return array
}

export default () => {
  const { loading, list } = useProps('list');
  const formattedList = deNormalize(list);
  return (
    <div style={{ padding: 32 }}>
      <List
        loading={loading}
        header={<Button onClick={handleGet}>GET</Button>}
        footer={<Button onClick={handlePost}>POST</Button>}
        dataSource={formattedList}
        renderItem={
          item => {
            const nextItem = { id: item.id, value: item.value + 1 };
            const handlePut = () => handlePutBy(nextItem);
            const handlePatch = () => handlePatchBy(nextItem);
            const handleDelete = () => handleDeleteBy(item.id);
            return (
              <List.Item>
                <snap style={{flex: 1}}>{item.value}</snap>
                <Button onClick={handlePut}>PUT</Button>
                <Button onClick={handlePatch}>PATCH</Button>
                <Button onClick={handleDelete}>DELETE</Button>
              </List.Item>
            )
          }}
      />
    </div>
  );
}
