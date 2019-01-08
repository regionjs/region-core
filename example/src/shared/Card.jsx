import React from 'react';
import { Card as RawCard } from 'antd';

const Card = ({ children, ...rest }) => (
  <RawCard style={{ width: 500, margin: 30 }} {...rest}>{children}</RawCard>
);

export default Card;
