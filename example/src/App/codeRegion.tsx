import { createMappedRegion } from 'region-core';

export const codeRegion = createMappedRegion<string, string>('');

export const loadCode = (selectedKey: string) => {
  const href = `https://raw.githubusercontent.com/regionjs/region-core/master/example/src/${selectedKey}/index.tsx`;
  const request = new Request(href);
  const promise = fetch(request).then((res) => res.text());
  codeRegion.load(selectedKey, promise);
};
