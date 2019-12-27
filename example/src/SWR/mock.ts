const factory = <O>(func: () => O) => (): Promise<O> => new Promise((resolve) => {
  setTimeout(() => { resolve(func()); }, 500);
});

let countA = 0;
export const fetchA = factory(() => {
  countA += 1;
  return `A${countA}`;
});

let countB = 0;
export const fetchB = factory(() => {
  countB += 1;
  return `B${countB}`;
});
