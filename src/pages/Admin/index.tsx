import React from 'react';
import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Admin.module.scss';

import Sidebar from 'src/features/admin/components/Sidebar';
import CategoryManagement from 'src/features/admin/pages/CategoryManagement';
import Dashboard from 'src/features/admin/pages/Dashboard';
import ProductManagement from 'src/features/admin/pages/ProductManagement';
import RoleManagement from 'src/features/admin/pages/RoleManagement';
import UserManagement from 'src/features/admin/pages/UserManagement';

const cx = classNames.bind(styles);

const Admin: React.FC = () => {
  return (
    <div className={cx('container')}>
      <Sidebar />
      <div className={cx('main')}>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/roles' element={<RoleManagement />} />
          <Route path='/users' element={<UserManagement />} />
          <Route path='/categories' element={<CategoryManagement />} />
          <Route path='/products' element={<ProductManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
