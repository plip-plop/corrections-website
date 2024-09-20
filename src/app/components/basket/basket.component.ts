import { Component, inject } from '@angular/core';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
})
export class BasketComponent {
  basketService = inject(BasketService);

  protected get items() {
    return this.basketService.items;
  }

  protected get total() {
    return this.basketService.total;
  }
}
