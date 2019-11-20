const factory = func => item => new Promise((resolve) => {
  setTimeout(() => { resolve(func(item)); }, 500);
});

let countA = 1;
export const fetchA = factory(() => `A${countA++}`);

let countB = 1;
export const fetchB = factory(() => `B${countB++}`);
