import React from 'react';
import classNames from 'classnames/bind';

import SHOP_DATA from 'src/shop-data.json';
import styles from './Shop.module.scss';

import ProductCard from 'src/components/ProductCard';

const cx = classNames.bind(styles);

const Shop: React.FC = () => {
    return (
        <div className={cx('container')}>
            {SHOP_DATA.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
