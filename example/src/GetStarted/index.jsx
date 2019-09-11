import React from 'react';
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_942570_v4nrzgehvpk.js',
});

const pre = ''
  + 'git clone https://github.com/regionjs/region-core.git\n'
  + 'cd example\n'
  + 'npm i\n'
  + 'npm start\n';

const GetStarted = () => (
  <div style={{ padding: 32 }}>
    <h1>How to run this</h1>
    <pre>{pre}</pre>
    <div style={{ fontSize: 18 }}>
      <a href="https://github.com/regionjs/region-core"><Icon type="github" /></a>
      {' '}
      <a href="https://www.npmjs.com/package/region-core"><IconFont type="npm" /></a>
    </div>
  </div>
);

export default GetStarted;
