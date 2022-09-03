import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'src/app/store';
import { Product } from 'src/interfaces/product.interface';
import ProductCard from '.';

const mockProduct: Product = {
  id: 1,
  name: 'Red Hat',
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
