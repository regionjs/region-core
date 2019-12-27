let count = 0;

export const apiGetUser = () => new Promise((resolve, reject) => setTimeout(() => {
  if (count > 3) {
    const error = new Error(`error: ${count}`);
    reject(error);
  } else {
    resolve(`user from api: ${count}`);
  }
  count++;
}, 1000));
