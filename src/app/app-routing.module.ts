import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'add-product', component: AddProductComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'products-list', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailComponent}
    
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
