import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'src/app/store';
import { CartItem as CartItemProps } from '../../redux/cart.types';
import CheckoutItem from '.';

const cartItem: CartItemProps = {
  _id: 'adsakdjl',
  name: 'Hoodie',
  category: 'hat',
  imageUrl: 'hoodie.png',
  price: 250,
  quantity: 1,
};

describe('CheckoutItem component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <CheckoutItem cartItem={cartItem} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should_HaveName', () => {
    render(
      <Provider store={store}>
        <CheckoutItem cartItem={cartItem} />
      </Provider>,
    );
    expect(screen.getByLabelText('name')).toHaveTextContent('Hoodie');
  });
});
