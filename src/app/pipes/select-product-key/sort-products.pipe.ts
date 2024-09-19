import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../components/product/product.types';

@Pipe({
  name: 'sortProducts',
})
export class SortProductsPipe implements PipeTransform {
  transform(
    products: Product[] | null | undefined,
    key?: keyof Product
  ): Product[] {
    if (!key) {
      return products ?? [];
    }
    return [...(products ?? [])].sort((productA, productB) => {
      if (productA[key] > productB[key]) {
        return 1;
      }
      if (productA[key] < productB[key]) {
        return -1;
      }
      return 0;
    });
  }
}
