import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.css']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage: AdvantageType;
  constructor() {
    this.advantage = {
      item: 1,
      info: '',
      text: ''
    }
  }

  ngOnInit(): void {
  }

}
