const toggleList = [false, false, false, true, true, false, true, true];
let index = -1;

export const fetchValue1 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    index += 1;
    if (toggleList[index]) {
      resolve('resolved 1');
    } else {
      reject(new Error('rejected 1'));
    }
  }, 1000);
});

export const fetchValue2 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    index += 1;
    if (toggleList[index]) {
      resolve('resolved 2');
    } else {
      reject(new Error('rejected 2'));
    }
  }, 1000);
});
