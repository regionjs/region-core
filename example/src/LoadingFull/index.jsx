import React, { useEffect } from 'react';
import Wrapper from './Wrapper';
import { loadUser, loadFollower } from '../interface';

const LoadingFull = () => {
  useEffect(() => {
    loadUser();
    loadFollower();
  });
  return (
    <Wrapper />
  );
};

export default LoadingFull;
