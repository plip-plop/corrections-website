import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_TITLE } from '../../app.token';
import { SelectProductKey } from '../../pipes/select-product-key/select-product-key.types';
import { BasketService } from '../../services/basket.service';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../product/product.types';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
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
    this.basketService.fetchBasket().subscribe();
  }

  valoriserPanier({ id, title, price }: Product) {
    this.basketService.addItemAvecServeur(id).subscribe(() => {
      this.catalogService.decreaseStock(id);
    });
  }

  trackByProductId(_: number, { id }: Product) {
    return id;
  }
}
