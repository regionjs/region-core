import React from 'react';

const pre = ''
  + "set('obj.a', 1);\n"
  + "set('obj.b', 2);\n"
  + "connectWith('obj', Component); // { a: 1, b:2 }\n";

export default () => (
  <div style={{ padding: 32 }}>
    <h1>Deep Set/Load(Abandoned)</h1>
    <pre>{pre}</pre>
    <p>注：某些请求下需要组织 redux 的结构，但是需要在支持复杂结构和检查最佳实践之间作出取舍。</p>
    <p>我最终决定不实现这个功能，原因有四：</p>
    <p>1. 复杂的 key 会难以维护</p>
    <p>2. 它导致 redux-loadings 内部实现变得复杂，我不得不考虑是否要实现以及暴露 connectWith('obj.a') 这个我不太喜欢的接口</p>
    <p>3. 用这个 api 实现 async validate 太复杂</p>
    <p>4. 计划中 createRegion 比它更好</p>
  </div>
);
