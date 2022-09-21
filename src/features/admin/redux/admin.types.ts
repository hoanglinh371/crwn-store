import { Category } from 'src/features/category/redux/category.types';
import { Product } from 'src/features/product/redux/product.types';

export interface AdminState {
  products: Product[];
  categories: Category[];
}
