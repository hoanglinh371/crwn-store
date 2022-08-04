import { CartItem as CartItemProps } from 'src/interfaces/product.interface';

export const cartItemMock: CartItemProps[] = [
    {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
        quantity: 3,
    },
    {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
        quantity: 4,
    },
];

export const checkoutItemMock: CartItemProps[] = cartItemMock;
