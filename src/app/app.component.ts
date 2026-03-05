import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = 'MacaroonsAng';

  protected readonly products: ProductType[] = [
    {
      image: 'image1.png',
      name: 'Макарун с малиной',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'image2.png',
      name: 'Макарун с манго',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'image3.png',
      name: 'Пирог с ванилью',
      quantity: '1 шт.',
      price: '1,70 руб.'
    },
    {
      image: 'image4.png',
      name: 'Пирог с фисташками',
      quantity: '1 шт.',
      price: '1,70 руб.'
    }
  ];

  protected readonly advantages = [
    {
      info: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      info: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      info: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      info: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  protected formValues = {
    productName: '',
    name: '',
    phone: ''
  }

  protected scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  };

  protected addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productName = product.name.toUpperCase();
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
}









