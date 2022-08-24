import React from 'react';
import classNames from 'classnames/bind';
import { useAppSelector } from 'src/app/hooks';

import {
  selectCartItems,
  selectCartTotal,
} from 'src/features/cart/redux/cart.selectors';
import styles from './Checkout.module.scss';

import CheckoutItem from 'src/components/CheckoutItem';

const cx = classNames.bind(styles);

const Checkout: React.FC = () => {
  const cartItem = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <div className={cx('header-block')}>
          <span>Product</span>
        </div>
        <div className={cx('header-block')}>
          <span>Description</span>
        </div>
        <div className={cx('header-block')}>
          <span>Quantity</span>
        </div>
        <div className={cx('header-block')}>
          <span>Price</span>
        </div>
        <div className={cx('header-block')}>
          <span>Remove</span>
        </div>
      </div>
      {cartItem &&
        cartItem.map((item) => <CheckoutItem key={item.id} cartItem={item} />)}
      <span className={cx('total')}>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
