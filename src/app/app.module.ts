import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appTitleProvider } from './app.token';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { SelectProductKeyComponent } from './pipes/select-product-key/select-product-key.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SelectProductKeyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [appTitleProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
