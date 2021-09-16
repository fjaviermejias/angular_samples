import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() onKeyEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: any): void {
    this.onKeyEvent.emit(value);
  }

}
