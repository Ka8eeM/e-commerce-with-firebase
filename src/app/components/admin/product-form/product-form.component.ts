import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CategoryServiceService } from 'src/app/services/categories/category-service.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: any;
  constructor(
    private catService: CategoryServiceService,
    private productService: ProductService
  ) {
    this.categories$ = this.catService.getCategories();
  }

  ngOnInit(): void {
  }

  save(product: any) {
    this.productService.create(product);
  }
}
