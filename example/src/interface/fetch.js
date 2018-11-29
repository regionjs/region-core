export const fetchUser = () => new Promise((resolve) => {
  setTimeout(() => { resolve('the user from api'); }, 500);
});

export const fetchFollower = () => new Promise((resolve) => {
  setTimeout(() => { resolve('some followers from api'); }, 1000);
});

export const fetchSome = () => new Promise((resolve) => {
  setTimeout(() => { resolve('something from api'); }, 1000);
});

export const deleteFollower = () => new Promise((resolve) => {
  setTimeout(() => { resolve([]); }, 1000);
});

export const fetchAsyncEffect = array => new Promise((resolve) => {
  setTimeout(() => { resolve(array.length); }, 1000);
});
