import React, { FC } from 'react';
import { Card as AntdCard } from 'antd';

const Card: FC<any> = ({ children, ...rest }) => (
  <AntdCard style={{ margin: 30 }} {...rest}>{children}</AntdCard>
);

export default Card;
