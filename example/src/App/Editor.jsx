import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import { codeRegion, loadCode } from './codeRegion';

const getWindowSize = () => {
  if (typeof window === 'undefined') {
    return {
      innerWidth: null,
      innerHeight: null,
      outerWidth: null,
      outerHeight: null,
    };
  }
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  };
};

const useWindowSize = () => {
  // 窗口的尺寸事实上和页面内容是无关的，所以没必要等组件布局后再读，初始化的时候直接拿就好
  const [size, setSize] = useState(getWindowSize);
  useEffect(
    () => {
      const updateWindowSize = () => setSize(getWindowSize());
      window.addEventListener('resize', updateWindowSize);
      return () => window.removeEventListener('resize', updateWindowSize);
    },
    [],
  );
  return size;
};

const Editor = ({ selectedKey }) => {
  const { innerWidth } = useWindowSize();
  const loading = codeRegion.useLoading();
  const code = codeRegion.useValue();
  useEffect(
    () => {
      loadCode(selectedKey);
    },
    [selectedKey],
  );

  if (loading) {
    return null;
  }

  return (
    <MonacoEditor
      width={innerWidth - 260}
      height={500}
      language="javascript"
      theme="vs-dark"
      value={code}
    />
  );
};
export default Editor;
