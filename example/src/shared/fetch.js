const fetchFactory = (value, delay = 1000) => () => new Promise((resolve) => {
  setTimeout(() => { resolve(value); }, delay);
});

export const fetchUser = fetchFactory('the user from api', 500);
export const fetchFollower = fetchFactory('some followers from api');
export const fetchSome = fetchFactory('something from api');
export const deleteFollower = fetchFactory([]);

export const fetchAsyncEffect = array => new Promise((resolve) => {
  setTimeout(() => { resolve(array.length); }, 1000);
});

export const fetchA = fetchFactory('A from api');
export const fetchB = fetchFactory('B from api');
export const fetchC = fetchFactory('C from api');

export const fetchValidate = value => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (String(Number(value)) === value) {
      resolve(null);
    } else {
      reject(new Error('message from api: type some number'));
    }
  }, 1000);
});

const toggleList = [false, false, false, true, true, false, true, true];
let index = -1;
export const fetchValueWithError = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    index += 1;
    if (toggleList[index]) {
      resolve('well, lucky');
    } else {
      reject(new Error('message from api: error'));
    }
  }, 1000);
});
