import faker from 'faker';

export const apiGetUser = (): Promise<string> => new Promise((resolve) => setTimeout(() => {
  resolve(`${faker.name.lastName()} ${faker.name.firstName()}`);
}, 500));

export const apiGetNextFollower = (): Promise<string> => new Promise((resolve) => setTimeout(() => {
  resolve(`${faker.name.lastName()} ${faker.name.firstName()}`);
}, 1000));
