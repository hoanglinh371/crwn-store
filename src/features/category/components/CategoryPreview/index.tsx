import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { Product } from 'src/features/product/redux/product.types';
import styles from './CategoryPreview.module.scss';

import ProductCard from '../../../../components/ProductCard';
interface Props {
  title: string;
  products: Product[];
}

const cx = classNames.bind(styles);

const CategoryPreview: React.FC<Props> = ({ title, products }) => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className={cx('preview')}>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
