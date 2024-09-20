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
export class AppComponent {}
