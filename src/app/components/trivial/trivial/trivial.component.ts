import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/model/cardmodel';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  cards: CardModel[] = [];

  constructor(public service: TrivialService) { }

  ngOnInit(): void {
    this.service.getCards().subscribe(
      (data) => { this.processData(data) },
      (error) => { this.processError(error) });
  }

  processData(data: any): void {
    console.log(data);
    for (const jsonCard of data.results) {
      const tempCard = new CardModel(jsonCard);
      this.cards.push(tempCard);
    }
  }

  processError(error: any): void {
    console.log(error);
  }
}
