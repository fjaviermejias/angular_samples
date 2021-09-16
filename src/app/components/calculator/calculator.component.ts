import { Component, OnInit } from '@angular/core';


enum CalculatorState {
  INIT,
  FIRSTFIGURE,
  SECONDFIGURE,
  RESULT
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';
  currentState = CalculatorState.INIT;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleNumber(value: number): void {
    switch (this.currentState) {
      case CalculatorState.INIT:
        this.firstFigure = value;
        this.currentState = CalculatorState.FIRSTFIGURE;
        this.display = this.display + value;
        break;
      case CalculatorState.FIRSTFIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display = this.display + value;
        break;
      case CalculatorState.SECONDFIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display = this.display + value;
        break;
      case CalculatorState.RESULT:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = CalculatorState.FIRSTFIGURE;
        this.display = '' + value;
        break;

      default:
        break;
    }
  }

  // function that checks if the input is an operator
  isOperator(value: string): boolean {
    return value === '+' || value === '-' || value === '*' || value === '/';
  }

  // resolves operation 
  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;

      default:
        return -1;
    }
  }

  handleSymbol(value: string): void {
    switch (this.currentState) {
      case CalculatorState.INIT:

        break;
      case CalculatorState.FIRSTFIGURE:
        if (this.isOperator(value)) {
          this.operator = value;
          this.currentState = CalculatorState.SECONDFIGURE;
          this.display = this.display + value;
        }
        break;
      case CalculatorState.SECONDFIGURE:
        if (value === '=') {
          this.result = this.resolve();
          this.display = this.display + '=' + this.result;
          this.currentState = CalculatorState.RESULT;
        }
        break;
      case CalculatorState.RESULT:
        if(this.isOperator(value)) {
          this.operator = value;
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.result = 0;
          this.currentState = CalculatorState.SECONDFIGURE;
          this.display = this.firstFigure + value;
        }
        break;

      default:
        break;
    }

  }

  handleEvent(value: any): void {
    if (typeof value === 'number') {
      this.handleNumber(value);
    } else if (typeof value === 'string') {
      this.handleSymbol(value);
    }
  }


}
