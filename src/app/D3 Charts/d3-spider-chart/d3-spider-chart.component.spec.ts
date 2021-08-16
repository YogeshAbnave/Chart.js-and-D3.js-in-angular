import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SpiderChartComponent } from './d3-spider-chart.component';

describe('D3SpiderChartComponent', () => {
  let component: D3SpiderChartComponent;
  let fixture: ComponentFixture<D3SpiderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3SpiderChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SpiderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
