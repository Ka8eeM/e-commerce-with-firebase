import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-card/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(
    private cartService: ShoppingCartService
  ) {

  }

  @Input('product') product: any;
  @Input('shoppingCart') shoppingCart: any;

  ngOnInit(): void {

  }

  addToCart() {
    this.cartService.addTocart(this.product);
  }

  removeFromCart() {
    this.cartService.removerFromCart(this.product);
  }
  getQuantity() {
    if (!this.shoppingCart) {
      return 0;
    }
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }

}