import React from 'react';
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_942570_v4nrzgehvpk.js',
});

const pre = ''
  + 'git clone https://github.com/dancerphil/redux-loadings.git\n'
  + 'cd example\n'
  + 'npm i\n'
  + 'npm start\n';

export default () => (
  <div style={{ padding: 32 }}>
    <h1>How to run this</h1>
    <pre>{pre}</pre>
    <div style={{ fontSize: 18 }}>
      <a href="https://github.com/dancerphil/redux-loadings"><Icon type="github" /></a>
      {' '}
      <a href="https://www.npmjs.com/package/redux-loadings"><IconFont type="npm" /></a>
    </div>
  </div>
);
