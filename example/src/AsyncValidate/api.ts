export const fetchValidate = (value: string): Promise<string> => new Promise((resolve, reject) => {
  setTimeout(
    () => {
      if (String(Number(value)) === value) {
        resolve(value);
      } else {
        reject(new Error('message from api: type some number'));
      }
    },
    1000,
  );
});
