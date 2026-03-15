import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected readonly title = 'MacaroonsAng';

  public products: ProductType[] = [];

  protected readonly advantages: AdvantageType[] = [
    {
      item: 1,
      info: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      item: 2,
      info: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      item: 3,
      info: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      item: 4,
      info: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  protected formValues = {
    productName: '',
    name: '',
    phone: ''
  }

  constructor(private productService: ProductService,
              public cartService: CartService) {
  }

  protected scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  };

  protected addToCart(product: ProductType, target: HTMLElement): void {
    // this.scrollTo(target);
    // this.formValues.productName = product.name.toUpperCase();
    this.cartService.count++;
    this.cartService.sum = Math.round((this.cartService.sum + product.price) * 100)/100;
    alert(`${product.name} добавлен в корзину!`);
  };

  protected createOrder(): void {
    if (!this.formValues.productName) {
      alert('Заполните название товара');
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }
    alert('Спасибо за заказ');
    this.formValues = {
      productName: '',
      name: '',
      phone: ''
    };
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}









