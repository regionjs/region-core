import React from 'react';
import './layout.css';

const Row = ({ children }) => <div style={{ flex: 1, display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>{children}</div>;

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
    <Row>
      <div className="panel">
        {children[0]}
      </div>
      <div className="panel">
        {children[1]}
      </div>
    </Row>
    <Row>
      <div className="panel">
        {children[2]}
      </div>
      <div className="panel">
        {children[3]}
      </div>
    </Row>
  </div>
);

export default Layout;
