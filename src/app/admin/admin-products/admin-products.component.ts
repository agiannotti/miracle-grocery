import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent {
  products;
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  log(p) {
    console.log(p);
  }
}
