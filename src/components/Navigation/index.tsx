import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'src/assets/crown.svg';

import styles from './Navigation.module.scss';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

const cx = classNames.bind(styles);

const Navigation: React.FC = () => {
  return (
    <div className={cx('navigation')}>
      <Link className={cx('logo-container')} to='/'>
        <Logo />
      </Link>
      <div className={cx('nav-links-container')}>
        <Link className={cx('nav-link')} to='/shop'>
          SHOP
        </Link>
        <Link className={cx('nav-link')} to='/contact'>
          CONTACT
        </Link>
        <Link className={cx('nav-link')} to='/auth'>
          LOGIN
        </Link>
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

export default Navigation;
