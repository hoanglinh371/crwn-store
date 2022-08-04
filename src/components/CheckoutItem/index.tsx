import React from 'react';
import classNames from 'classnames';

import styles from './CheckoutItem.module.scss';

interface Props {
    cartItem: any;
}

const cx = classNames.bind(styles);

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className={cx('container')}>
            <div className={cx('image-container')}>
                <img src={imageUrl} alt={name} />
            </div>
            <span className={cx('name')}>{name}</span>
            <span className={cx('quantity')}>{quantity}</span>
            <span className={cx('price')}>{price}</span>
            <div className={cx('remove-button')}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
