import { cleanup, render, screen } from '@testing-library/react';

import { CartItem as CartItemProps } from 'src/features/cart/redux/cart.types';
import CartItem from '.';

const mockCartItem: CartItemProps = {
  _id: '1234',
  name: 'Koi Ring',
  category: 'hat',
  imageUrl: 'koi-ring.png',
  price: 50,
  quantity: 2,
};

describe('CartItem component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(<CartItem cartItem={mockCartItem} />);
    expect(container).toMatchSnapshot();
  });

  it('Should_HaveImageSrc', () => {
    render(<CartItem cartItem={mockCartItem} />);

    expect(screen.getByLabelText('image')).toHaveAttribute(
      'src',
      'koi-ring.png',
    );
  });
});
