import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeersService } from 'src/app/services/beers.service';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  value: number = 4;
  highValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  beers: Beer[] = [];
  showBeers: Beer[] = [];

  constructor(public service: BeersService) { }

  ngOnInit(): void {

    this.service.getBeersData().subscribe(
      (data) => { this.processData(data) },
      (error) => { this.processError(error) });
  }

  processData(data: any): void {
    for (const beerJson of data) {
      const beer = new Beer(beerJson);
      this.beers.push(beer);
    }
    this.showBeers = this.beers.filter((beer) => {
      return beer.abv >= this.value && beer.abv <= this.highValue;
    });
  }

  processError(error: any): void {
    console.log(error);
  }

  handleChange(): void {
    this.showBeers = this.beers.filter((beer) => {
      return beer.abv >= this.value && beer.abv <= this.highValue;
    });
  }
}
