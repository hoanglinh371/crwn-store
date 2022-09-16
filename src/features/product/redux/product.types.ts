export interface ProductState {
  products: Product[];
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  imageUrl: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
