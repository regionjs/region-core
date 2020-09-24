import React from 'react';
import { createFromIconfontCN, GithubOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_942570_3ol64gksd4x.js',
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
    <h1>Related</h1>
    <div style={{ fontSize: 18 }}>
      <a href="https://github.com/regionjs/region-core"><GithubOutlined /> Github</a>
      <span style={{ margin: '0 15px' }} />
      <a href="https://www.npmjs.com/package/region-core"><IconFont type="npm" /> npm</a>
      <span style={{ margin: '0 15px' }} />
      <a href="https://github.com/regionjs/region-core/blob/master/docs/Document.md"><IconFont type="docs" /> Docs</a>
    </div>
  </div>
);

export default GetStarted;
