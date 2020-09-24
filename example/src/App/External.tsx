import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import Editor from './Editor';
import styles from './External.module.css';
import { codeRegion } from './codeRegion';

const External = ({ selectedKey }: any) => {
  const codeLoading = codeRegion.useLoading();
  let gotoDefinitionClass = styles.code;
  if (!codeLoading) {
    gotoDefinitionClass = `${styles.code} ${styles.dark}`;
  }
  return (
    <div className={styles.container}>
      <div className={gotoDefinitionClass}>
        <a
          href={`https://github.com/regionjs/region-core/blob/master/example/src/${selectedKey}/index.tsx`}
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubOutlined />
        </a>
      </div>
      <Editor selectedKey={selectedKey} />
    </div>
  );
};

export default External;
