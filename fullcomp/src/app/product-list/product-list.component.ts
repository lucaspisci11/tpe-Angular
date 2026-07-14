import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from './product';
import { InputInteger } from '../input-integer/input-integer';
import { CartService } from '../cart/cart-service';
import { ProductsData } from '../products-data';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputInteger],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

 constructor(
  private cartService: CartService,
  private productsData: ProductsData,
  private changeDetector: ChangeDetectorRef,
  @Inject(PLATFORM_ID) private platformId: object
) { }

  ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.productsData.getProducts().subscribe({
      next: (products) => {
        console.log('Productos recibidos en navegador:', products);

        this.products = products;
        this.changeDetector.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }
}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    product.quantity = 0;
  }

  getAvailableStock(product: Product): number {
    return this.cartService.getAvailableStock(product);
  }

}