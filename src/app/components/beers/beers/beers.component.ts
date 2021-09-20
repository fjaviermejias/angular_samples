import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];

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
    console.log(this.beers);
  }

  processError(error: any): void {
    console.log(error);
  }

}
