import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { basketGuard } from './guards/basket.guard';
import { BasketEmptyComponent } from './components/basket-empty/basket-empty.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'basketEmpty', component: BasketEmptyComponent },
  { path: 'basket', component: BasketComponent, canMatch: [basketGuard] },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: 'catalog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
