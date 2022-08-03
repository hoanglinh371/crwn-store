import React from 'react';
import classNames from 'classnames/bind';

import styles from './Auth.module.scss';

import SignIn from 'src/features/auth/components/SignIn';
import SignUp from 'src/features/auth/components/SignUp';

const cx = classNames.bind(styles);

const Auth: React.FC = () => {
    return (
        <div className={cx('container')}>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Auth;
