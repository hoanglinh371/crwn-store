import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'src/app/store';
import { Product } from 'src/features/product/redux/product.types';
import ProductCard from '.';

const mockProduct: Product = {
  _id: '123456789',
  name: 'Red Hat',
  category: 'hat',
  imageUrl: 'red-hat-image',
  price: 99,
};

describe('ProductCard component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should_HaveNameProduct', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>,
    );
    expect(screen.getByLabelText('name')).toHaveTextContent('Red Hat');
  });
});
