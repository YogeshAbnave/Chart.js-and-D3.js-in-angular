import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircalChartComponent } from './circal-chart.component';

describe('CircalChartComponent', () => {
  let component: CircalChartComponent;
  let fixture: ComponentFixture<CircalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
