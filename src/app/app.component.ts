import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_TITLE } from './app.token';
import { Product } from './components/product/product.types';
import { SelectProductKey } from './pipes/select-product-key/select-product-key.types';
import { BasketService } from './services/basket.service';
import { CatalogService } from './services/catalog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  productKey: SelectProductKey = undefined;
  productsAffiches?: Product[];

  get products() {
    return this.catalogService.products;
  }

  get hasProductsInStock() {
    return this.catalogService.hasProductsInStock;
  }

  get total() {
    return this.basketService.total;
  }

  constructor(
    private catalogService: CatalogService,
    private basketService: BasketService,
    @Inject(APP_TITLE) public appTitle: string,
    public titleService: Title,
    private http: HttpClient
  ) {
    titleService.setTitle(appTitle);
  }

  ngOnInit(): void {
    this.catalogService.fetchProducts().subscribe();
  }

  valoriserPanier({ id, title, price }: Product) {
    const success = this.catalogService.decreaseStock(id);
    if (success) {
      this.basketService.addItem({ id, title, price });
      this.basketService.addItemAvecServeur({ id, title, price });
    }
  }

  trackByProductId(_: number, { id }: Product) {
    return id;
  }
}
