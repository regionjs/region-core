import faker from 'faker';

export const apiGetUserResolved = (): Promise<string> => new Promise(
  (resolve) => setTimeout(() => {
    resolve(`${faker.name.lastName()} ${faker.name.firstName()}`);
  },
  1000),
);

export const apiGetUserRejected = (): Promise<string> => new Promise(
  (resolve, reject) => setTimeout(() => {
    reject(new Error(faker.lorem.word()));
  },
  1000),
);
