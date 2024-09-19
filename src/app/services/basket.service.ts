import { Injectable } from '@angular/core';
import { BasketItem } from './basket-item';
import { Product } from '../components/product/product.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _items: BasketItem[] = [];

  get items(): BasketItem[] {
    return this._items;
  }

  get total(): number {
    return this._items.reduce((total, product) => total + product.price, 0);
  }

  addItem(item: BasketItem): void {
    this._items.push(item);
  }
}
