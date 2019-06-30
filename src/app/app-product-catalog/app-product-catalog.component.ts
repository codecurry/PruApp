import { Component, OnInit } from '@angular/core';

import { ProductCatalog } from '../shared/productCatalog.model';
import { ProductGroup } from '../shared/productGroup.model';
import { ProductItem } from '../shared/productItem.model';
import { ProductCatalogService } from './product-catalog.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './app-product-catalog.component.html',
  styleUrls: ['./app-product-catalog.component.css'],
  providers: [ProductCatalogService]
})
export class ProductCatalogComponent implements OnInit {
  catalog: ProductCatalog;
  panelOpenState = false;
  constructor(private productListService: ProductCatalogService ) { }

  ngOnInit() {
    this.catalog = this.productListService.getCatalog();
  }

}
