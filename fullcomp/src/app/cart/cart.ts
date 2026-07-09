import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart-service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent {

  cartList: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartList = this.cartService.getCartList();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }
  getTotal(): number {
  return this.cartService.getTotal();
}

}