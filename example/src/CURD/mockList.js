const list = {
  0: { id: 0, value: 0 },
  1: { id: 1, value: 1 }
};
let index = 2;

const factory = (func) => (item) => new Promise((resolve) => {
  setTimeout(() => { resolve(func(item)); }, 500);
});

export const getList = factory(() => list)

export const postList = factory(() => {
  const item = { id: index, value: index };
  list[index] = item;
  index++;
  return item
})

export const putList = factory((item => {
  list[item.id] = item;
  return list[item.id];
}))

export const patchList = factory(item => {
  list[item.id] = Object.assign(list[item.id], item);
  return list[item.id]
})

export const deleteList = factory(id => {
  delete list[id];
  return null;
})
