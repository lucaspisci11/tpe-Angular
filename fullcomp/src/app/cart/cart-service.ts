import { Injectable } from '@angular/core';
import { Product } from '../product-list/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList: Product[] = [];

  addToCart(product: Product): void {
    const item = this.cartList.find(p => p.name === product.name);

    if (item) {
      item.quantity += product.quantity;
    } else {
      this.cartList.push({ ...product });
    }
  }

  getCartList(): Product[] {
    return this.cartList;
  }

  getQuantityInCart(product: Product): number {
    const item = this.cartList.find(p => p.name === product.name);
    return item ? item.quantity : 0;
  }

  getAvailableStock(product: Product): number {
    return product.stock - this.getQuantityInCart(product);
  }

  removeFromCart(product: Product): void {
    const index = this.cartList.indexOf(product);

    if (index !== -1) {
      this.cartList.splice(index, 1);
    }
  }

  getTotal(): number {
    return this.cartList.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
}