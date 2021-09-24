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

  handleClick(answer: string): void {
    this.data.responded = true;
    this.data.userAnswer = answer;
  }

  getClass(answer: string): string {
    if (!this.data.responded) {
      return 'btn btn-primary btn-lg btn-block';
    } else {
      if(this.data.correctAnswer === answer) {
        return 'btn btn-success btn-lg btn-block';
      } else if(this.data.userAnswer === answer) {
        return 'btn btn-danger btn-lg btn-block';
      }
    }
    return 'btn btn-secondary btn-lg btn-block';
  }

}
