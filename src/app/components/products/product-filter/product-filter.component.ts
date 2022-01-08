import { Component, Input, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/categories/category-service.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$: any;
  @Input('category') category: any;

  constructor(
    private catService: CategoryServiceService
  ) {
    this.categories$ = this.catService.getCategories();    
  }

  ngOnInit(): void {
  }

}
