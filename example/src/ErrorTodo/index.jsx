import React from 'react';

const pre = ''
  + "connectWith('obj', Component, Loading, Error);\n";

export default () => (
  <div style={{ padding: 32 }}>
    <h1>Error Todo</h1>
    <pre>{pre}</pre>
    <p>注：可以把 silentLoading 配置项引申为 LoadingComponent 和 ErrorComponent，但是 error 的 type 和 message 业务性强，难以定义。</p>
    <p>如果没有默认的 ErrorComponent 或者难以定义默认的 ErrorComponent，会影响开发体验</p>
  </div>
);
