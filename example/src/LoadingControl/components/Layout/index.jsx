import React from 'react';
import Card from '../../../shared/Card';

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
    <Card>
      {children[0]}
    </Card>
    <Card>
      {children[1]}
    </Card>
    <Card>
      {children[2]}
    </Card>
  </div>
);

export default Layout;
