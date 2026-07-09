import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputInteger } from '../input-integer/input-integer';
import { CartService } from '../cart/cart-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputInteger],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      name: 'Iphone 16 Pro',
      make: 'Apple',
      price: 1500,
      stock: 5,
      image: '/img/16pro.jpeg',
      quantity: 0,
    },
    {
      name: 'A21',
      make: 'Samsung',
      price: 1000,
      stock: 0,
      image: '/img/a21.jfif',
      quantity: 0,
    },
    {
      name: 'Iphone 17 Pro',
      make: 'Apple',
      price: 2500,
      stock: 2,
      image: '/img/iphone.17pro.jfif',
      quantity: 0,
    }
  ];

constructor(private cartService: CartService) { }

  ngOnInit(): void { }

 addToCart(product: Product): void {
  this.cartService.addToCart(product);
  product.quantity = 0;
}

getAvailableStock(product: Product): number {
  return this.cartService.getAvailableStock(product);
}


}