import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {

  @Input()
  product!: Product;

  upQuantity(product: Product): void {
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }

  downQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
}