import { Component, Input } from '@angular/core';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  get items() {
    return this.basketService.items.length;
  }

  constructor(private basketService: BasketService) {}
}
