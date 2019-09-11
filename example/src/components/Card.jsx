import React from 'react';
import { Card as AntdCard } from 'antd';

const Card = ({ children, ...rest }) => (
  <AntdCard style={{ width: 500, margin: 30 }} {...rest}>{children}</AntdCard>
);

export default Card;
