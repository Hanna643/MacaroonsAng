import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  protected readonly instagram: string = 'https://www.instagram.com/';
  protected readonly showPresent: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

}
