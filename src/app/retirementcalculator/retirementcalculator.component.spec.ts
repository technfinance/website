import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementcalculatorComponent } from './retirementcalculator.component';

describe('RetirementcalculatorComponent', () => {
  let component: RetirementcalculatorComponent;
  let fixture: ComponentFixture<RetirementcalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirementcalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
