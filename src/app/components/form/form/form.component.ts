import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero('', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero('', '');
  }

  handleClick(form: any) {
    this.newHero(); 
    console.log(form);
    form.reset();
  }
}
