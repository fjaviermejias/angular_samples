import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() text = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
  }

}
