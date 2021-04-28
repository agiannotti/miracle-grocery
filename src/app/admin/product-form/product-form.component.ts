import { CategoryService } from '../../shared/services/category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  categories$;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
    console.log(this.categories$);
  }
}
