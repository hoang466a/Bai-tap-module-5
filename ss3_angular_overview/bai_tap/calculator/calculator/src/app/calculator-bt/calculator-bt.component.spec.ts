import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBtComponent } from './calculator-bt.component';

describe('CalculatorBtComponent', () => {
  let component: CalculatorBtComponent;
  let fixture: ComponentFixture<CalculatorBtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorBtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
