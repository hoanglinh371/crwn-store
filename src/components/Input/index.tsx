import React, { useId } from 'react';
import classNames from 'classnames/bind';
import { Control, useController } from 'react-hook-form';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface Props extends React.HTMLProps<HTMLInputElement> {
  control?: Control<any, any>;
  name: string;
  label: string;
}

const Input: React.FC<Props> = ({ name, control, label, ...props }) => {
  const id = useId();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={cx('group')}>
      <input id={id} className={cx('form-input')} {...field} {...props} />
      <label className={cx('form-input-label')} htmlFor={id}>
        {label}
      </label>
      {error && <p className={cx('error-message')}>{error.message}</p>}
    </div>
  );
};

export default Input;
