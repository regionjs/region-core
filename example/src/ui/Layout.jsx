import React, { Fragment } from 'react';
import './layout.css';

const Layout = ({ children }) => (
  <Fragment>
    {children.map((child, index) => (
      <div key={index} className="panel">
        {child}
      </div>
    ))}
  </Fragment>
);

export default Layout;
