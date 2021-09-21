import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer = new Beer();
  constructor() { }

  ngOnInit(): void {
    console.log(this.beer);
    
  }

}
