import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CategoryServiceService } from 'src/app/services/categories/category-service.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: any;
  currentProduct: any = {};
  id: any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private catService: CategoryServiceService,
    private productService: ProductService
  ) {
    this.categories$ = this.catService.getCategories();
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.id) {
      /* take 1 take the object and unsubsribe to the stream*/

      this.productService.getProductById(this.id).pipe(take(1)).subscribe((prod) => {
        if (prod)
          this.currentProduct = prod;
      })
    }
  }

  ngOnInit(): void {
  }

  delete() {

    if (this.id && confirm('Are you sure delete this product?')) {
      this.productService.delete(this.id);
      this.router.navigateByUrl('/admin/products');
    }
  }
  save(product: any) {
    if (this.id)
      this.productService.update(this.id, product);
    else
      this.productService.create(product);
    this.router.navigateByUrl('/admin/products');
  }
}
