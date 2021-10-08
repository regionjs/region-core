interface Item {
  id: number;
  value: number;
}

interface Shape {
  [key: number]: Item;
}

const list: Shape = {
  0: { id: 0, value: 0 },
  1: { id: 1, value: 1 },
};

let index = 2;

const delay = () => new Promise((resolve) => {
  setTimeout(resolve, 500);
});

export const getList = async () => {
  await delay();
  return list;
};

export const postList = async () => {
  await delay();
  const item = { id: index, value: index };
  list[index] = item;
  index += 1;
  return item;
};

export const putList = async (item: Item) => {
  await delay();
  list[item.id] = item;
  return list[item.id];
};

export const patchList = async (item: Item) => {
  await delay();
  list[item.id] = Object.assign(list[item.id], item);
  return list[item.id];
};

export const deleteList = async (id: number) => {
  await delay();
  delete list[id];
  return null;
};
