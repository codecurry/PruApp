import {
  Component,
  OnInit,
  Input } from '@angular/core';
import { ProductGroup } from '../shared/productGroup.model';

@Component({
  selector: 'app-product-group',
  templateUrl: './app-product-group.component.html',
  styleUrls: ['./app-product-group.component.css']
})
export class ProductGroupComponent implements OnInit {
  @Input() productGroup: ProductGroup;
  selectedOption;
  constructor() { }

  ngOnInit() {
  }
  onNgModelChange($event) {
    console.log($event);
    this.selectedOption = $event;
  }

}
