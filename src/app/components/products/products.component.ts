import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryServiceService } from 'src/app/services/categories/category-service.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products!: any[];
  filteredProducts!: any[];
  subscribeForProducts!: Subscription;
  categories$: any;
  category: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryServiceService,
    private route: ActivatedRoute
  ) {
    this.subscribeForProducts = this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        // read value of category from activaed route
        this.route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
        })

        this.filteredProducts = (this.category) ?
          this.products.filter(pr => {
            pr.payload.val().categoty === this.category
          }) : this.products;
      })

    this.categories$ = this.categoryService.getCategories();
  }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscribeForProducts.unsubscribe();
  }

}
