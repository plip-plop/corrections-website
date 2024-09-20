import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BasketService } from '../services/basket.service';

export const basketGuard: CanActivateFn = (route, state) => {
  const basketService = inject(BasketService);
  const router = inject(Router);

  return basketService.fetchBasket().pipe(
    map((basket) => {
      if (basket.length > 0) {
        return true;
      } else {
        router.navigateByUrl('basketEmpty');
      }
      return false;
    })
  );
};
