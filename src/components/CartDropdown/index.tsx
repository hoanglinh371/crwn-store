import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './CartDropdown.module.scss';

import Button from '../Button';

const cx = classNames.bind(styles);

const CartDropdown: React.FC = () => {
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className={cx('container')}>
            <div className={cx('cart-items')}></div>
            <Button type='button' onClick={goToCheckout}>
                CHECKOUT
            </Button>
        </div>
    );
};

export default CartDropdown;
