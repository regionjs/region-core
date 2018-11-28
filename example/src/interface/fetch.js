export const fetchUser = () => new Promise((resolve) => {
  setTimeout(() => { resolve('the user from api'); }, 500);
});

export const fetchFollower = () => new Promise((resolve) => {
  setTimeout(() => { resolve('some followers from api'); }, 2000);
});

export const fetchSome = () => new Promise((resolve) => {
  setTimeout(() => { resolve('something from api'); }, 2000);
});
