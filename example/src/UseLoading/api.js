let count = 0;

export const apiGetUser = () => new Promise(resolve => setTimeout(() => {
  resolve(`user from api: ${count}`)
  count ++
}, 1000))
