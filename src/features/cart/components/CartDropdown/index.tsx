import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';

import { selectCartItems } from '../../redux/cart.selectors';
import styles from './CartDropdown.module.scss';

import Button from 'src/components/Button';
import CartItem from '../CartItem';

const cx = classNames.bind(styles);

const CartDropdown: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={cx('container')}>
      <div className={cx('cart-items')}>
        {cartItems.map((item) => (
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
