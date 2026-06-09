import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcompProducts } from './fullcomp-products';

describe('FullcompProducts', () => {
  let component: FullcompProducts;
  let fixture: ComponentFixture<FullcompProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullcompProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(FullcompProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
