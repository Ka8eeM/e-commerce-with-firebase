import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/interfaces/shpping-cart/ShoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-card/shopping-cart.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  cart$!: Observable<ShoppingCart>;

  constructor(
    private cartService: ShoppingCartService
  ) {
  }

   async ngOnInit(): Promise<void> {
    this.cart$ = (await this.cartService.getCart());
    console.log(this.cart$);
  }


}

