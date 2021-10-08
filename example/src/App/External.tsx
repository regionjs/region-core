import React, { useEffect } from 'react';
import { Spin } from 'antd';
import Refractor from 'react-refractor';
import { GithubOutlined } from '@ant-design/icons';
import styles from './External.module.css';
import { codeRegion, loadCode } from './codeRegion';

interface Props {
  selectedKey: string
}

const External = ({ selectedKey }: Props) => {
  const codeLoading = codeRegion.useLoading(selectedKey);
  const code = codeRegion.useValue(selectedKey);

  useEffect(
    () => {
      loadCode(selectedKey);
    },
    [selectedKey],
  );

  if (codeLoading) {
    return <div className={styles.container}><Spin /></div>;
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.code} ${styles.dark}`}>
        <a
          className={styles.title}
          href={`https://github.com/regionjs/region-core/blob/master/example/src/${selectedKey}/index.tsx`}
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubOutlined />
          <span className={styles['title-text']}>{`src/${selectedKey}/index.tsx`}</span>
        </a>
      </div>
      <Refractor language="tsx" value={code} />
    </div>
  );
};

export default External;
