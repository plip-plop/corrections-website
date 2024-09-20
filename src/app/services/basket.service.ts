import { Injectable } from '@angular/core';
import { BasketItem } from './basket-item';
import { Product } from '../components/product/product.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

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

  addItemAvecServeur(id: string) {
    return this.http
      .post<BasketItem>('http://localhost:8080/api/basket', {
        productId: id,
      })
      .pipe(tap((basketItem) => this._items.push(basketItem)));
  }

  fetchBasket(): Observable<BasketItem[]> {
    return this.http
      .get<BasketItem[]>('http://localhost:8080/api/basket')
      .pipe(tap((items) => (this._items = items)));
  }
}
