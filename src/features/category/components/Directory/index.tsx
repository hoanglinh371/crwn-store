import React from 'react';
import classNames from 'classnames/bind';

import styles from './Directory.module.scss';

import DirectoryItem from '../DirectoryItem';

interface Props {
  directories: any[];
}

const cx = classNames.bind(styles);

const Directory: React.FC<Props> = ({ directories }) => {
  return (
    <div className={cx('container')}>
      {directories.map((directory) => (
        <DirectoryItem key={directory._id} directory={directory} />
      ))}
    </div>
  );
};

export default Directory;
