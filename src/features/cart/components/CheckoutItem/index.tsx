import React from 'react';
import classNames from 'classnames/bind';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useAppDispatch } from 'src/app/hooks';

import {
  addProduct,
  removeProduct,
  clearProduct,
} from 'src/features/cart/redux/cart.slice';
import { CartItem as CartItemProps } from 'src/features/cart/redux/cart.types';
import styles from './CheckoutItem.module.scss';

interface Props {
  cartItem: CartItemProps;
}

const cx = classNames.bind(styles);

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useAppDispatch();

  const handleAddProduct = () => dispatch(addProduct(cartItem));

  const handleRemoveProduct = () => dispatch(removeProduct(cartItem));

  const handleClearProduct = () => dispatch(clearProduct(cartItem));

  return (
    <div className={cx('container')}>
      <div className={cx('image-container')}>
        <img src={imageUrl} alt={name} />
      </div>
      <span aria-label='name' className={cx('name')}>
        {name}
      </span>
      <span className={cx('quantity')}>
        <div
          aria-label='dec-btn'
          className={cx('arrow')}
          onClick={handleRemoveProduct}
        >
          <FaChevronLeft />
        </div>
        <span className={cx('value')}>{quantity}</span>
        <div
          aria-label='inc-btn'
          className={cx('arrow')}
          onClick={handleAddProduct}
        >
          <FaChevronRight />
        </div>
      </span>
      <span className={cx('price')}>${price}</span>
      <div
        aria-label='del-btn'
        className={cx('remove-button')}
        onClick={handleClearProduct}
      >
        <IoClose />
      </div>
    </div>
  );
};

export default CheckoutItem;
