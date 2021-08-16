import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { CircalChartComponent } from './charts/circal-chart/circal-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PaiChartComponent } from './charts/pai-chart/pai-chart.component';
import { SpiderChartComponent } from './charts/spider-chart/spider-chart.component';
import { D3BarChartComponent } from './D3 Charts/d3-bar-chart/d3-bar-chart.component';
import { D3CircleChartComponent } from './D3 Charts/d3-circle-chart/d3-circle-chart.component';
import { D3LineChartComponent } from './D3 Charts/d3-line-chart/d3-line-chart.component';
import { D3PaiChartComponent } from './D3 Charts/d3-pai-chart/d3-pai-chart.component';
import { D3SpiderChartComponent } from './D3 Charts/d3-spider-chart/d3-spider-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'doughnut-chart', component: CircalChartComponent},
  {path: 'pie-chart', component: PaiChartComponent},
  {path: 'radar-chart', component: SpiderChartComponent},
  {path: 'D3Bar-chart', component: D3BarChartComponent},
  {path: 'D3Circle-chart', component: D3CircleChartComponent},
  {path: 'D3Line-chart', component: D3LineChartComponent},
  {path: 'D3Pai-chart', component: D3PaiChartComponent},
  {path: 'D3Spider-chart', component: D3SpiderChartComponent},
  {path: 'line-chart', component: LineChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
