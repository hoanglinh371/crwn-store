import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  google?: boolean;
  inverted?: boolean;
  onClick?: () => void;
}

const cx = classNames.bind(styles);

const Button: React.FC<Props> = (props) => {
  const { children, type, google, inverted, onClick } = props;

  return (
    <button
      type={type}
      className={cx('container', { google, inverted })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
