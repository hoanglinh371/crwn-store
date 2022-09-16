import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import { Category as DirectoryProps } from '../../redux/category.types';
import styles from './DirectoryItem.module.scss';

interface Props {
  directory: DirectoryProps;
}

const cx = classNames.bind(styles);

const DirectoryItem: React.FC<Props> = ({ directory }) => {
  const { name, imageUrl } = directory;
  const navigate = useNavigate();

  const changeUrl = () => navigate(`/shop/${name}`);

  return (
    <div className={cx('container')} onClick={changeUrl}>
      <div
        className={cx('bg-image')}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={cx('body-container')}>
        <h2>{name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
