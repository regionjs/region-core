import React from 'react';

const Button = ({ onClick, children }) => (
  <div
    style={{ color: 'blue', cursor: 'pointer' }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Button;
