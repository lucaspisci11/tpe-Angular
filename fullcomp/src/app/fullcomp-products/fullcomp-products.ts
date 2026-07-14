import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-fullcomp-products',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './fullcomp-products.html',
  styleUrl: './fullcomp-products.scss'
})
export class FullcompProductsComponent {

}