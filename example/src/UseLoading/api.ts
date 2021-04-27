import faker from 'faker';

export const apiGetUser = () => new Promise(resolve => setTimeout(() => {
  resolve(`${faker.name.lastName()} ${faker.name.firstName()}`);
}, 1000));
