import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
   imports: [CommonModule],
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
    image: '/img/16pro.jpeg'
  },
    {
    name: 'A21',
    make: 'Samsung',
    price: 1000,
    stock: 0,
    image: '/img/a21.jfif'
  },
    {
    name: 'Iphone 17 Pro',
    make: 'Apple',
    price: 2500,
    stock: 2,
    image: '/img/iphone.17pro.jfif'
  }
];
constructor() { }

ngOnInit(): void {
}
}