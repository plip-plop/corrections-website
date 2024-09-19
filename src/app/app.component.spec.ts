import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './components/menu/menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display the products', () => {});

  // ----- DOM Testing (the hard way) -----
  it('should update the total when a product emits the "addToBasket" event', () => {});

  // ----- Class Testing (the easy way) -----
  it('should update the total when "addToBasket" class method is called', () => {});
});
