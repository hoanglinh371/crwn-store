import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'src/assets/crown.svg';
import { useAppSelector } from 'src/app/hooks';

import { selectIsCartDropdownOpen } from 'src/features/cart/redux/cart.selectors';
import styles from './Navigation.module.scss';

import CartIcon from 'src/features/cart/components/CartIcon';
import CartDropdown from 'src/features/cart/components/CartDropdown';

const cx = classNames.bind(styles);

const Navigation: React.FC = () => {
  const isOpen = useAppSelector(selectIsCartDropdownOpen);

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
      {isOpen && <CartDropdown />}
    </div>
  );
};

export default Navigation;
