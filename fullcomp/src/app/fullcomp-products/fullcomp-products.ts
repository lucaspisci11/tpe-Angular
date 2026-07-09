import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartComponent } from '../cart/cart';

@Component({
  selector: 'app-fullcomp-products',
  standalone: true,
  imports: [
    ProductListComponent,
    CartComponent
  ],
  templateUrl: './fullcomp-products.html',
  styleUrl: './fullcomp-products.scss',
})
export class FullcompProductsComponent {}