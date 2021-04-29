import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { ProductService } from 'src/app/shared/services/product.service';

import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  categories$;
  product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.categories$ = categoryService.getCategories();

    let id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.productService.getProduct(id).subscribe((details) => {
        this.product = details['Products'];
        // .pipe(take(1))
        // .subscribe((p) => {
        //   this.product = p['products'];
        // });

        // if (id) this.productService.getProduct(id);
        // .subscribe((p) => (this.product = p));
      });
  }

  save(product) {
    this.router.navigate(['/admin/products/']);
    this.productService.create(product);
    console.log(product);
  }
}
