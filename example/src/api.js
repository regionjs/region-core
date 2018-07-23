export const fetchUser = () => new Promise((resolve) => {
  setTimeout(() => { resolve('the user from api'); }, 2000);
});

export const fetchFollower = () => new Promise((resolve) => {
  setTimeout(() => { resolve('some followers from api'); }, 5000);
});
