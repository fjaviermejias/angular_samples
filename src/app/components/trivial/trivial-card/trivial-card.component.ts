import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/model/cardmodel';

@Component({
  selector: 'app-trivial-card',
  templateUrl: './trivial-card.component.html',
  styleUrls: ['./trivial-card.component.scss']
})
export class TrivialCardComponent implements OnInit {

  @Input() data: CardModel = new CardModel();
  
  constructor() { }

  ngOnInit(): void {
  }

}
