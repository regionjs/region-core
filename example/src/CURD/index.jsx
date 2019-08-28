import React from 'react';
import { createRegion } from 'region-core';
import { Button, List } from 'antd';
import Card from '../shared/Card';
import { getList, postList, putList, patchList, deleteList } from "./mockList";

const listRegion = createRegion()
listRegion.load(getList);

const handleGet = () => listRegion.load(getList);
const handlePost = () => listRegion.load(postList, {
  format: (result, snapshot) => {
    snapshot[result.id] = result;
    return snapshot;
  }
});
const handlePutBy = params => listRegion.load(putList, {
  params,
  format: (result, snapshot) => {
    snapshot[result.id] = result;
    return snapshot;
  }
});
const handlePatchBy = params => listRegion.load(patchList, {
  params,
  format: (result, snapshot) => {
    snapshot[result.id] = result;
    return snapshot;
  }
});
const handleDeleteBy = (id) => listRegion.load(deleteList, {
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
          item => {
            const nextItem = { id: item.id, value: item.value + 1 };
            const handlePut = () => handlePutBy(nextItem);
            const handlePatch = () => handlePatchBy(nextItem);
            const handleDelete = () => handleDeleteBy(item.id);
            return (
              <List.Item>
                <span style={{flex: 1}}>{item.value}</span>
                <Button onClick={handlePut}>PUT</Button>
                <Button onClick={handlePatch}>PATCH</Button>
                <Button onClick={handleDelete}>DELETE</Button>
              </List.Item>
            )
          }
        }
      />
    </Card>
  );
}
