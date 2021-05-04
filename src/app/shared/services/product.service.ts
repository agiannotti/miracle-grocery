import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').valueChanges();
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId).valueChanges();
    // return console.log(this.db.object('/products/' + productId));
  }

  getDetails(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }
}
