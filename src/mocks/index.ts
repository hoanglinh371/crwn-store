import { CartItem as CartItemProps } from 'src/features/cart/redux/cart.types';

export const cartItemMock: CartItemProps[] = [
  {
    _id: '123123123',
    name: 'Brown Brim',
    category: 'jacket',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25,
    quantity: 1,
  },
  {
    _id: '12sds2frew',
    name: 'Blue Beanie',
    category: 'jacket',
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    price: 18,
    quantity: 3,
  },
  {
    _id: '54432sqsd',
    name: 'Brown Cowboy',
    category: 'hat',
    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    price: 35,
    quantity: 4,
  },
];

export const checkoutItemMock: CartItemProps[] = cartItemMock;
