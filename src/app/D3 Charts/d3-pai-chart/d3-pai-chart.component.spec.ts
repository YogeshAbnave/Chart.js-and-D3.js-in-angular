import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3PaiChartComponent } from './d3-pai-chart.component';

describe('D3PaiChartComponent', () => {
  let component: D3PaiChartComponent;
  let fixture: ComponentFixture<D3PaiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3PaiChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3PaiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
