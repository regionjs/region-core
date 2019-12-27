import React, { FC } from 'react';
import { Card as AntdCard } from 'antd';

const Card: FC<any> = ({ children, ...rest }) => (
  <AntdCard style={{ width: 500, margin: 30 }} {...rest}>{children}</AntdCard>
);

export default Card;
