import { Product } from '../../components/product/product.types';

export type SelectProductKey =
  | keyof Pick<Product, 'price' | 'stock'>
  | undefined;
