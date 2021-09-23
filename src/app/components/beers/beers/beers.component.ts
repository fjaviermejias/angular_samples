import { Component, OnDestroy, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeersService } from 'src/app/services/beers.service';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit, OnDestroy {

  value: number = 0;
  highValue: number = 0;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  beers: Beer[] = [];
  showBeers: Beer[] = [];

  constructor(public service: BeersService) { }

  ngOnInit(): void {
    this.value = this.service.value;
    this.highValue = this.service.highValue;
    console.log('BeersComponent.ngOnInit');
    this.service.getBeersData().subscribe(
      (data) => { this.processData(data) },
      (error) => { this.processError(error) });
  }

  ngOnDestroy(): void {
    this.service.value = this.value;
    this.service.highValue = this.highValue;
    console.log('BeersComponent.ngOnDestroy');
  }


  processData(data: any): void {
    console.log(data);
    
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
