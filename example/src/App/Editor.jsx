import React, { useState, useEffect } from 'react';
import MonacoEditor from "react-monaco-editor";
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import { load, useProps } from 'region-shortcut';

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
      if (typeof window !== 'undefined') {
        const updateWindowSize = () => setSize(getWindowSize());
        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
      }
    },
    []
  );
  return size;
};

const Editor = ({selectedKey}) => {
  const {innerWidth} = useWindowSize()
  const {loading, code} = useProps('code');
  useEffect(
    () => {
      const href = `https://raw.githubusercontent.com/regionjs/region-core/master/example/src/${selectedKey}/index.jsx`
      const request = new Request(href)
      const fetcher = () => fetch(request).then(res => {
        console.log(res)
        return res.text()
      })
      load('code', fetcher)
    },
    [selectedKey]
  );

  if (loading) {
    return null;
  }

  return (
    <div style={{ flex: 1, minHeight: 500}}>
      <MonacoEditor
        width={innerWidth - 200}
        // height={100}
        language="javascript"
        theme="vs-dark"
        value={code}
      />
    </div>
  )
}
export default Editor;
