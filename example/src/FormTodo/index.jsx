import React from 'react';

const pre = ''
  + "set('obj.a', 1);\n"
  + "set('obj.b', 2);\n"
  + "connectWith('obj', Component); // { a: 1, b:2 }\n";

export default () => (
  <div style={{ padding: 32 }}>
    <h1>From Todo</h1>
    <pre>{pre}</pre>
  </div>
);
