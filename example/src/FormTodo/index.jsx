import React from 'react';

const pre = ''
  + "set('obj.a', 1);\n"
  + "set('obj.b', 2);\n"
  + "connectWith('obj', Component); // { a: 1, b:2 }\n";

export default () => (
  <div style={{ padding: 32 }}>
    <h1>From Todo</h1>
    <pre>{pre}</pre>
    <p>注：某些请求下需要组织 redux 的结构，但是需要在支持复杂结构和检查最佳实践之间作出取舍。</p>
    <p>复杂的 key 会难以维护</p>
  </div>
);
