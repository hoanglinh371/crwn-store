import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';

import ProductCard from 'src/components/ProductCard';
import { selectProducts } from 'src/features/product/redux/product.selectors';
import { getProductsByCategoryThunk } from 'src/features/product/redux/product.thunks';

const cx = classNames.bind(styles);

const Category: React.FC = () => {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProductsByCategoryThunk(category as string));
  }, [dispatch, category]);

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>{category}</h2>
      <div className={cx('products')}>
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
