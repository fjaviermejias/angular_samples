import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable()
export class HeroesService {

  heroes: Hero[] = [
    new Hero('Batman', 'Bruce Wayne',0),
    new Hero('Superman', 'Clark Kent',1),
    new Hero('Spiderman', 'Peter Parker',2),
    new Hero('Wolverine', 'Logan',3),
    new Hero('Deadpool', 'Wade Wilson',4),
    new Hero('Hulk', 'Bruce Banner',5),
  ];

  newHeroName = '';
  newHeroDescription = '';


  constructor() { }
}
