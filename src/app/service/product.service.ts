import { Injectable } from '@angular/core';
import { Product } from '../types/product.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  api = `http://localhost:3000/`;

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products`);
  }

  getProduct(id:number): Observable<Product> {
    return this.httpClient.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
