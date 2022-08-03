import React from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './SignUp.module.scss';
import { SignUpProps } from 'src/interfaces/form.interface';
import { MESSAGE } from 'src/constants';

import Input from 'src/components/Input';
import Button from 'src/components/Button';

const cx = classNames.bind(styles);
const defaultValues: SignUpProps = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};
const schema = yup.object().shape({
    displayName: yup.string().required(MESSAGE.REQUIRED),
    email: yup.string().email(MESSAGE.EMAIL).required(MESSAGE.REQUIRED),
    password: yup
        .string()
        .min(6, MESSAGE.TEXT_MIN_6)
        .required(MESSAGE.REQUIRED),
    confirmPassword: yup
        .string()
        .min(6, MESSAGE.TEXT_MIN_6)
        .required(MESSAGE.REQUIRED),
});

const SignUp: React.FC = () => {
    const { control, handleSubmit, reset } = useForm<any>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const handleSubmitForm = (value: SignUpProps) => {
        console.log(value);
        reset(defaultValues);
    };

    return (
        <div className={cx('container')}>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <Input
                    type='text'
                    name='displayName'
                    label='Display Name'
                    control={control}
                />

                <Input
                    type='email'
                    name='email'
                    label='Email'
                    control={control}
                />

                <Input
                    type='password'
                    name='password'
                    label='Password'
                    control={control}
                />

                <Input
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    control={control}
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;
