import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {

  newHeroName = '';
  newHeroDescription = '';

  heroes: Hero[] = [];

  constructor(public service: HeroesService) { }

  ngOnInit(): void {
    console.log('creo el componente HeroesComponent');
    this.heroes = this.service.heroes;
    this.newHeroName = this.service.newHeroName;
    this.newHeroDescription = this.service.newHeroDescription;
    
  }

  ngOnDestroy(): void {
    console.log('destruyo el componente HeroesComponent');
    this.service.heroes = this.heroes;
    this.service.newHeroName = this.newHeroName;
    this.service.newHeroDescription = this.newHeroDescription;
  }


  onClick() {
    this.heroes.push(new Hero(this.newHeroName,this.newHeroDescription,this.heroes.length));
    this.newHeroName = '';
    this.newHeroDescription = '';
  }

}
