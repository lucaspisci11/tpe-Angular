import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  product = {
    name: 'Iphone 16 Pro',
    make: 'Apple',
    price: 1500,
    stock: 5,
    image: '/img/16pro.jpeg'
  };

}