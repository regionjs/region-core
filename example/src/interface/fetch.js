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

export const fetchValidate = value => new Promise((resolve) => {
  setTimeout(() => {
    if (String(Number(value)) === value) {
      resolve(null);
    } else {
      // TODO made it reject
      resolve('message from api: type some number');
    }
  }, 1000);
});
