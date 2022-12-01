import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  
})
export class CategoriesComponent implements OnInit {

  categories!: Observable<string[]>;
  
  constructor(private fakestore: FakestoreService) { }

  ngOnInit(): void {
    this.categories = this.fakestore.getCategories();
  }

}
