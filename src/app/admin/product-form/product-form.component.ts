import { CategoryService } from '../../shared/services/category.service';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  categories;

  constructor(
    private productService: ProductService,
    categoryService: CategoryService
  ) {
    this.categories = categoryService.getCategories();
  }

  save(product) {
    this.productService.create(product);
  }
}
