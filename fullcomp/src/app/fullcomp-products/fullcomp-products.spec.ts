import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcompProductsComponent } from './fullcomp-products';

describe('FullcompProductsComponent', () => {
  let component: FullcompProductsComponent;
  let fixture: ComponentFixture<FullcompProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullcompProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullcompProductsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});