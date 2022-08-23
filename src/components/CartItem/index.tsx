import React from 'react';
import classNames from 'classnames/bind';

import { CartItem as CartItemProps } from 'src/interfaces/product.interface';
import styles from './CartItem.module.scss';

interface Props {
  cartItem: CartItemProps;
}

const cx = classNames.bind(styles);

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className={cx('container')}>
      <img src={imageUrl} alt={name} />
      <div className={cx('item-details')}>
        <span className={cx('name')}>{name}</span>
        <span className={cx('price')}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
