import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { appTitleProvider } from './app.token';

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [appTitleProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
