import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Input() heroData = new Hero('', '');
  @Output() onFormChanged = new EventEmitter<Hero>();
  @Output() onHeroAdded = new EventEmitter<Hero>();

  newHeroName = '';
  newHeroDescription = '';

  constructor() { }

  ngOnInit(): void {
    this.newHeroName = this.heroData.name;
    this.newHeroDescription = this.heroData.description;
  }

  handleChange(): void {
    this.onFormChanged.emit(new Hero(this.newHeroName, this.newHeroDescription));
  }

  onClick() {
    // this.heroes.push(new Hero(this.newHeroName,this.newHeroDescription,this.heroes.length));
    this.onHeroAdded.emit(new Hero(this.newHeroName, this.newHeroDescription));
    this.newHeroName = '';
    this.newHeroDescription = '';
  }

}
