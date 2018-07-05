export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve('the user from api')}, 500);
  })
}

export const fetchFollower = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve('some followers from api')}, 500);
  })
}
