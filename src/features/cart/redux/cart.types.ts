import { Product } from 'src/features/product/redux/product.types';

export interface CartItem extends Product {
  quantity: number;
}
