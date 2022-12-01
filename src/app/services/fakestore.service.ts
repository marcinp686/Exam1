import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor(private http: HttpClient) { }

  getCategories() : Observable<string[]> {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id: number) : Observable<Product> {
      return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
  
  addProduct(product: Product) : any {
    return this.http.post('https://fakestoreapi.com/products', product).subscribe();    
  }

}
