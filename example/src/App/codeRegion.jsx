import { createRegion } from 'region-core';

export const codeRegion = createRegion();

export const loadCode = (selectedKey) => {
  const href = `https://raw.githubusercontent.com/regionjs/region-core/master/example/src/${selectedKey}/index.jsx`;
  const request = new Request(href);
  const fetcher = () => fetch(request).then(res => res.text());
  codeRegion.load(fetcher);
};
