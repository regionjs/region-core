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

const factory = <T, R>(func: (v: T) => R) => (item: T): Promise<R> => new Promise((resolve) => {
  setTimeout(() => { resolve(func(item)); }, 500);
});

export const getList = factory(() => list);

export const postList = factory(() => {
  const item = { id: index, value: index };
  list[index] = item;
  index += 1;
  return item;
});

export const putList = factory(((item: Item) => {
  list[item.id] = item;
  return list[item.id];
}));

export const patchList = factory((item: Item) => {
  list[item.id] = Object.assign(list[item.id], item);
  return list[item.id];
});

export const deleteList = factory((id: number) => {
  delete list[id];
  return null;
});
