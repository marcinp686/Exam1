import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Observable<Product>;

  constructor(private fakestore: FakestoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this.route.params.pipe(switchMap( data => this.fakestore.getProduct(data['id'])));
  }

}
