import { cleanup, render, screen } from '@testing-library/react';

import { CartItem as CartItemProps } from 'src/interfaces/product.interface';
import CartItem from '.';

const mockCartItem: CartItemProps = {
  id: 1,
  name: 'Koi Ring',
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
