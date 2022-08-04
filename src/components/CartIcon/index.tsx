import React from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as ShoppingIcon } from 'src/assets/shopping-bag.svg';

import styles from './CartIcon.module.scss';

const cx = classNames.bind(styles);

const CartIcon: React.FC = () => {
    return (
        <div className={cx('container')}>
            <ShoppingIcon className={cx('shopping-icon')} />
            <span className={cx('item-count')}>{0}</span>
        </div>
    );
};

export default CartIcon;
