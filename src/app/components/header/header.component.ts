import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  protected readonly phone = '+375 (29) 368-98-68';
  public ngOnInit(): void {
  }

}
