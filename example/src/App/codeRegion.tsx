import { createRegion } from 'region-core';

export const codeRegion = createRegion<string>('');

export const loadCode = (selectedKey: any) => {
  const href = `https://raw.githubusercontent.com/regionjs/region-core/master/example/src/${selectedKey}/index.tsx`;
  const request = new Request(href);
  const fetcher = () => fetch(request).then(res => res.text());
  codeRegion.load(fetcher);
};
