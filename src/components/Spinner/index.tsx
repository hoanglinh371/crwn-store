import React from 'react';
import classNames from 'classnames/bind';

import styles from './Spinner.module.scss';

const cx = classNames.bind(styles);

const Spinner: React.FC = () => {
  return (
    <div className={cx('overlay')}>
      <div className={cx('container')}></div>
    </div>
  );
};

export default Spinner;
