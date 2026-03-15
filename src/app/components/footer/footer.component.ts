import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  protected readonly instagram: string = 'https://www.instagram.com/';
  protected readonly showPresent: boolean = true;
  protected readonly phone: string = '375293689868';
  constructor(public cartService: CartService) { }

  public ngOnInit(): void {
  }

}
