import React from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignInProps } from 'src/interfaces/form.interface';
import { MESSAGE } from 'src/constants';
import styles from './SignIn.module.scss';

import Input from 'src/components/Input';
import Button from 'src/components/Button';

const cx = classNames.bind(styles);
const defaultValues: SignInProps = {
  email: '',
  password: '',
};
const schema = yup.object().shape({
  email: yup.string().email(MESSAGE.EMAIL).required(MESSAGE.REQUIRED),
  password: yup.string().min(6, MESSAGE.TEXT_MIN_6).required(MESSAGE.REQUIRED),
});

const SignIn: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<any>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value: SignInProps) => {
    console.log(value);
    reset(defaultValues);
  };

  return (
    <div className={cx('container')}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input type='email' name='email' label='Email' control={control} />

        <Input
          type='password'
          name='password'
          label='Password'
          control={control}
        />

        <div className={cx('button-container')}>
          <Button type='submit'>Sign In</Button>
          <Button type='button' google>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
