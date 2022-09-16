import { Product } from '../../product/redux/product.types';

export interface CategoryState {
  categories: Category[];
}
export interface Category {
  _id: string;
  name: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
export interface CategoryMap {
  [key: string]: Product[];
}
