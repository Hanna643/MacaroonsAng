import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;

  constructor() {
    this.product = {
      image: '',
      name: '',
      quantity: '',
      price: ''
    }
  }

  ngOnInit(): void {
  }

}
