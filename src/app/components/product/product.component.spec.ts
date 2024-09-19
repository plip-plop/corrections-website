import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 'welsch',
      title: 'Coding the welsch',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-welsch.jpg',
      price: 20,
      stock: 2,
    };
    nativeElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the product photo as image url', () => {
    const image = nativeElement.querySelector('img');
    expect(image?.src).toContain('/assets/coding-the-welsch.jpg');
  });

  it('should display the product description', () => {
    const text = nativeElement.querySelector('small')?.textContent;
    expect(text).toContain('Tee-shirt col rond - Homme');
  });

  it('should display the product title', () => {});

  it('should display the product price', () => {});

  it('should emit addToBasket event with the given product when the button is clicked', () => {
    const emitSpy = spyOn(component.addToBasket, 'emit');
    nativeElement.querySelector('button')?.click();
    expect(emitSpy).toHaveBeenCalledWith(component.product);
  });
});
