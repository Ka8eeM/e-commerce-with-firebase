import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db: AngularFireDatabase
  ) {

  }

  update(productId: string, product: any) {
    return this.db.object('/products/' + productId).update(product);
  }

  create(product: any) {
    this.db.list('/products').push(product);
  }

  delete(productId: string) {
    return this.db.object('/products/' + productId).remove();
  }

  getProductById(productId: string) {
    return this.db.object('/products/' + productId).valueChanges();
  }


  getProducts() {
    return this.db.list('/products').snapshotChanges();
  }
}
