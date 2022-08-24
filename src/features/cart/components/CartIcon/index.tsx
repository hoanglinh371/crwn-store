import React from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as ShoppingIcon } from 'src/assets/shopping-bag.svg';
import { useAppSelector, useAppDispatch } from 'src/app/hooks';

import { selectCartCount } from '../../redux/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart.slice';
import styles from './CartIcon.module.scss';

const cx = classNames.bind(styles);

const CartIcon: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);

  const handleToggleCartDropdown = () => {
    dispatch(toggleCartDropdown());
  };

  return (
    <div className={cx('container')} onClick={handleToggleCartDropdown}>
      <ShoppingIcon className={cx('shopping-icon')} />
      <span className={cx('item-count')}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
