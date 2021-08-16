import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CircleChartComponent } from './d3-circle-chart.component';

describe('D3CircleChartComponent', () => {
  let component: D3CircleChartComponent;
  let fixture: ComponentFixture<D3CircleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3CircleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CircleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
