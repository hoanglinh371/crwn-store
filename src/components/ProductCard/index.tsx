import React from 'react';
import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';

import Button from '../Button';

interface Props {
    product: any;
}

const cx = classNames.bind(styles);

const ProductCard: React.FC<Props> = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className={cx('container')}>
            <img src={imageUrl} alt={name} />
            <div className={cx('footer')}>
                <span className={cx('name')}>{name}</span>
                <span className={cx('price')}>{price}</span>
            </div>
            <Button type='button' inverted>
                Add To Cart
            </Button>
        </div>
    );
};

export default ProductCard;
