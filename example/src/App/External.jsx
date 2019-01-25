/* global window */
import React from 'react';

const External = ({ selectedKey }) => (
  <div style={{ margin: '30px 30px 0 30px' }}>
    <a
      href={`https://github.com/regionjs/region-core/blob/master/example/src/${selectedKey}/index.jsx`}
      rel="noreferrer noopener"
      target="_blank"
    >
      code
    </a>
  </div>
);

export default External;
