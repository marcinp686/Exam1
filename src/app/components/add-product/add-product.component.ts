import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productFormGroup: FormGroup = new FormGroup(
  {
    title: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(0)])
  })

  constructor(private fakestore : FakestoreService, private router: Router) { }

  ngOnInit(): void {
  }

  onProductAdd(product: Product) : void {     
    this.fakestore.addProduct(product)
    //this.router.navigate(['/categories']);
  } 

}
