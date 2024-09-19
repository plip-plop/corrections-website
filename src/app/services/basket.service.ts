import { Injectable } from '@angular/core';
import { BasketItem } from './basket-item';
import { Product } from '../components/product/product.types';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  addItem(item: BasketItem): void {
    this._items.push(item);
  }

  addItemAvecServeur(item: BasketItem): void {
    this.http
      .post('http://localhost:8080/api/basket', item)
      .subscribe((success) => {
        console.log(success);
        this.items.push(item);
      });
  }
}
