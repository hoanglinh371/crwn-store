import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import { cartItemMock } from 'src/mocks';
import styles from './CartDropdown.module.scss';

import Button from '../Button';
import CartItem from '../CartItem';

const cx = classNames.bind(styles);

const CartDropdown: React.FC = () => {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={cx('container')}>
      <div className={cx('cart-items')}>
        {cartItemMock.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button type='button' onClick={goToCheckout}>
        CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
