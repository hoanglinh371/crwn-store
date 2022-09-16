import React from 'react';
import classNames from 'classnames/bind';
import { useAppDispatch } from 'src/app/hooks';

import { Product } from 'src/features/product/redux/product.types';
import { addProduct } from 'src/features/cart/redux/cart.slice';
import styles from './ProductCard.module.scss';

import Button from '../Button';

interface Props {
  product: Product;
}

const cx = classNames.bind(styles);

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();

  const handleAddToCart = () => dispatch(addProduct(product));

  return (
    <div className={cx('container')}>
      <img src={imageUrl} alt={name} />
      <div className={cx('footer')}>
        <span aria-label='name' className={cx('name')}>
          {name}
        </span>
        <span className={cx('price')}>${price}</span>
      </div>
      <Button type='button' inverted onClick={handleAddToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
