import React from 'react';

const pre = ''
  + "connectWith('follower?id', Component);\n"
  + "connectWith('follower?id&type', Component);\n"
  + "connectWith('follower?id&type=all', Component);\n"
  + "const selector = createSelector('follower', (follower, ownProps) => {\n"
  + "  return follower.filter({ id, type } => id === ownProps.id && type === 'all')\n"
  + '});\n'
  + 'connectWith(selector, Component);\n';

export default () => (
  <div style={{ padding: 32 }}>
    <h1>Own Props Todo</h1>
    <pre>{pre}</pre>
    <p>估计最后一种最有用，缩减或者去掉这个功能都不太行。</p>
  </div>
);
