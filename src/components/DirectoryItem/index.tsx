import React from 'react';
import classNames from 'classnames/bind';

import styles from './DirectoryItem.module.scss';
import { Directory as DirectoryProps } from 'src/interfaces/directory.interface';

interface Props {
    directory: DirectoryProps;
}

const cx = classNames.bind(styles);

const DirectoryItem: React.FC<Props> = ({ directory }) => {
    const { title, imageUrl } = directory;

    return (
        <div className={cx('container')}>
            <div
                className={cx('bg-image')}
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className={cx('body-container')}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
