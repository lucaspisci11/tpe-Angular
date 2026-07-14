import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsData {

  private url = 'https://6a565607b17de7bebbde27e0.mockapi.io/api/products';

  constructor(private http: HttpClient) { }

 getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.url);
}
}