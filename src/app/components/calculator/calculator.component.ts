import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';


  constructor(public service: CalculatorService) { }

  ngOnInit(): void {
    this.display = this.service.getDisplay();
  }

  handleEvent(value: any): void {
    if (typeof value === 'number') {
      this.display = this.service.handleNumber(value);
    } else if (typeof value === 'string') {
      this.display = this.service.handleSymbol(value);
    }
  }


}
