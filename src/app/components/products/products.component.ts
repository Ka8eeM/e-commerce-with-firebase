import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, take } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-card/shopping-cart.service';
import { ShoppingCart } from 'src/app/interfaces/shpping-cart/ShoppingCart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products!: any[];
  filteredProducts: any[] = [];
  subscribeForProducts!: Subscription;
  subscribeForRouter!: Subscription;
  category: any;
  cart$!: Observable<ShoppingCart>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService
  ) {

    this.subscribeForProducts = this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        // read value of category from activaed route
        this.subscribeForRouter =
          this.route.queryParamMap.subscribe(params => {
            this.category = params.get('category');
          })

        this.filteredProducts = (this.category) ?
          this.products.filter(pr => {
            pr.payload.val().categoty === this.category
          }) : this.products;
      })


  }


  async ngOnInit(): Promise<void> {
    this.cart$ = (await this.cartService.getCart());
    console.log(this.cart$);
    // //.pipe(take(1))

    // (await this.cartService.getCart()).valueChanges().subscribe(cart => {
    //   this.cart = cart;
    //   console.log(cart);
    // });
  }

  ngOnDestroy(): void {
    this.subscribeForProducts.unsubscribe();
  }

}
