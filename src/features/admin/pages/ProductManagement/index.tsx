import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import classNames from 'classnames/bind';
import { selectProducts } from '../../redux/admin.selectors';
import { getProductsThunk } from 'src/features/product/redux/product.thunks';

const ProductManagement: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProductsThunk(2));
  }, [dispatch]);

  return (
    <div className='container'>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {products.map((p, i) => {
          return (
            <tr key={p._id}>
              <td>{i}</td>
              <td>{p.name}</td>
              <td>
                <img src={p.imageUrl} alt={p.name} />
              </td>
              <td>{p.price}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ProductManagement;
