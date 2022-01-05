import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products!: any[];
  filteredProducts!: any[];
  subscribe!: Subscription;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(
    private productService: ProductService
  ) {

    this.subscribe = this.productService.getProducts()
      .subscribe(products => {
        this.filteredProducts = this.products = products;
        
        // Calling the DT trigger to manually render the table
         this.dtTrigger.next(0);
      })
  }



  filter(query: any) {
    if (query) {
      this.filteredProducts =
        this.products.filter((pr) => {
          pr.payload.val().title.toLowerCase().includes(query.toLowerCase());
        })
    }
    else
      this.filteredProducts = this.products;
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    };

  }

}
