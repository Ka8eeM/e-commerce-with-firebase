import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable, Subscription } from 'rxjs';


import { take, first, map } from 'rxjs/operators'
import { ShoppingCart } from 'src/app/interfaces/shpping-cart/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  subscribeForItems!: Subscription;
  constructor(
    private db: AngularFireDatabase
  ) {
  }


  public async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
      .valueChanges()
      .pipe(
        map(_cart => new ShoppingCart((_cart as any).items
        )));
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      createdDate: new Date().getTime()
    })
  }

  // 
  private async getOrCreateCartId() {
    // get createdcart
    let cartId = localStorage.getItem('cartId');
    if (cartId)
      return cartId;

    // create cart 
    let result = await this.create();
    localStorage.setItem('cartId', result.key!);
    return result.key;

  }

  getItem(cartId: any, productId: any) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async addTocart(product: any) {
    this.updateCart(product, 1);
  }

  async removerFromCart(product: any) {
    this.updateCart(product, -1);
  }

  private async updateCart(product: any, quantityState: number) {
    let cartId = await this.getOrCreateCartId();

    let items$ = this.getItem(cartId, product.key);

    items$.snapshotChanges().pipe(first()).subscribe((item: any) => {
      if (item.payload.exists()) {
        items$.update({ quantity: item.payload.val().quantity + quantityState })
      }
      else {
        items$.update({
          product: {
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imageUrl: product.payload.val().imageUrl
          },
          quantity: 1
        })
      }
    });
  }

} 