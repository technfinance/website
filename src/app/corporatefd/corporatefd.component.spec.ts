import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatefdComponent } from './corporatefd.component';

describe('CorporatefdComponent', () => {
  let component: CorporatefdComponent;
  let fixture: ComponentFixture<CorporatefdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatefdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatefdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
