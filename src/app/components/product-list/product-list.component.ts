import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]> = this.fakestore.getProducts();

  constructor(private fakestore: FakestoreService) { }

  ngOnInit(): void {
  }

}
