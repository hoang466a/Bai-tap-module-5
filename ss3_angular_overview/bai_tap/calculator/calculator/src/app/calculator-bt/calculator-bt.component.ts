import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-bt',
  templateUrl: './calculator-bt.component.html',
  styleUrls: ['./calculator-bt.component.css']
})
export class CalculatorBtComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  calculator?: string;
  result?: number;

  calculate(){
    switch (this.calculator) {
      case `+`:
        this.result = this.num1 + this.num2;
        break;
      case `-`:
        this.result = this.num1 - this.num2;
        break;
      case `*`:
        this.result = this.num1 * this.num2;
        break;
      case `/`:
        this.result = this.num1 / this.num2;
        break;
      default:
          this.result = 0;
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
