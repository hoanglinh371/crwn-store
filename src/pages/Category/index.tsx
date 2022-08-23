import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Product } from 'src/interfaces/product.interface';
import SHOP_DATA from 'src/shop-data';
import styles from './Category.module.scss';

import ProductCard from 'src/components/ProductCard';

const cx = classNames.bind(styles);

const Category: React.FC = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(SHOP_DATA[category as string]);
  }, [category]);

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>{category}</h2>
      <div className={cx('products')}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
