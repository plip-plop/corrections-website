import { Injectable } from '@angular/core';
import { Product } from '../components/product/product.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private _products: Product[] = [];

  get products(): Product[] {
    return this._products;
  }

  get hasProductsInStock(): boolean {
    return this._products.some(({ stock }) => stock > 0);
  }

  constructor(private http: HttpClient) {}

  decreaseStock(productId: string): boolean {
    const product = this._products.find(({ id }) => id === productId);

    if (!product || product.stock < 1) {
      return false;
    }
    product.stock--;
    return true;
  }

  fecthProducts(): void {
    this.http
      .get<Product[]>('http://localhost:8080/api/products')
      .pipe(tap((valeur) => console.log(valeur)))
      .subscribe((success) => {
        this._products = success;
        console.log('fecthProducts : ', this._products);
      });
  }

  fecthProducts2(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }
}
