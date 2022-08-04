import React from 'react';
import classNames from 'classnames/bind';

import styles from './Checkout.module.scss';

import CheckoutItem from 'src/components/CheckoutItem';

const cx = classNames.bind(styles);

const Checkout: React.FC = () => {
    const cartItems: any = [];

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div className={cx('header-block')}>
                    <span>Product</span>
                </div>
                <div className={cx('header-block')}>
                    <span>Description</span>
                </div>
                <div className={cx('header-block')}>
                    <span>Quantity</span>
                </div>
                <div className={cx('header-block')}>
                    <span>Price</span>
                </div>
                <div className={cx('header-block')}>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item: any) => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}
        </div>
    );
};

export default Checkout;
