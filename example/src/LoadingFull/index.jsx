import React, { useEffect } from 'react';
import Wrapper from './Wrapper';
import { loadUser, loadFollower } from '../interface';


const LoadingControl = () => {
  useEffect(() => {
    loadUser();
    loadFollower();
  });
  return (
    <Wrapper />
  );
};

export default LoadingControl;
