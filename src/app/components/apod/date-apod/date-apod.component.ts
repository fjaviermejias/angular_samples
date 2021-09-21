import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-apod',
  templateUrl: './date-apod.component.html',
  styleUrls: ['./date-apod.component.scss']
})
export class DateApodComponent implements OnInit {

  @Output() dateChange: any = new EventEmitter<string>();
  
  selectedDate!: NgbDateStruct;

  constructor() { }

  ngOnInit(): void {
  }

  updateDate(date: NgbDateStruct): void {
    console.log(date.year + '-' + date.month + '-' + date.day);
    this.dateChange.emit(date.year + '-' + date.month + '-' + date.day);

  }

}
