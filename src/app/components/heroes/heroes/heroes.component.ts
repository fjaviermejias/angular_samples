import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];

  hero: Hero = new Hero('','', 0);

  constructor(public service: HeroesService) { }

  ngOnInit(): void {
    console.log('creo el componente HeroesComponent');
    this.heroes = this.service.heroes;
    this.hero = this.service.hero;
    
  }

  ngOnDestroy(): void {
    console.log('destruyo el componente HeroesComponent');
    this.service.heroes = this.heroes;
    this.service.hero = this.hero;
  }

  // this.heroes.push(new Hero(this.newHeroName,this.newHeroDescription,this.heroes.length));
  handleNewHero(hero: Hero): void {
    this.heroes.push(hero);
  }

  handleChange(hero: Hero): void {
    console.log('handleChange (heroes): ' + hero);
    this.hero = new Hero(hero.name, hero.description);
  }

}
