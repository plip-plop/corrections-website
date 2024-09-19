import { Component, Inject } from '@angular/core';
import { Product } from './components/product/product.types';
import { BasketService } from './services/basket.service';
import { CatalogService } from './services/catalog.service';
import { APP_TITLE } from './app.token';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  total = 0;

  products: Product[] = this.catalogService.products;

  get hasProductsInStock(): boolean {
    return this.products.some(({ stock }) => stock > 0);
  }

  constructor(
    private catalogService: CatalogService,
    private basketService: BasketService,
    @Inject(APP_TITLE) public appTitle: string,
    public titleService: Title
  ) {
    titleService.setTitle(appTitle);
  }

  valoriserPanier({ id, title, price }: Product) {
    const success = this.catalogService.decreaseStock(id);
    if (success) {
      this.basketService.addItem({ id, title, price });
    }
  }
}
