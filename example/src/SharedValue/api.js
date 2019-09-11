const fetchFactory = (value, delay = 1000) => () => new Promise((resolve) => {
  setTimeout(() => { resolve(value); }, delay);
});

export const fetchUser = fetchFactory('the user from api', 500);
export const fetchFollower = fetchFactory('some followers from api');
export const deleteFollower = fetchFactory([]);
