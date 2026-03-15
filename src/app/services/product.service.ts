import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    //ajax
    return [
      {
        image: 'image1.png',
        name: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'image2.png',
        name: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'image3.png',
        name: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'image4.png',
        name: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70
      }
    ]
  }
}
