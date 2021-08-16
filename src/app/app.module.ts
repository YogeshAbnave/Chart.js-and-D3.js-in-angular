import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PaiChartComponent } from './charts/pai-chart/pai-chart.component';
import { CircalChartComponent } from './charts/circal-chart/circal-chart.component';
import { SpiderChartComponent } from './charts/spider-chart/spider-chart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { D3BarChartComponent } from './D3 Charts/d3-bar-chart/d3-bar-chart.component';
import { D3LineChartComponent } from './D3 Charts/d3-line-chart/d3-line-chart.component';
import { D3PaiChartComponent } from './D3 Charts/d3-pai-chart/d3-pai-chart.component';
import { D3CircleChartComponent } from './D3 Charts/d3-circle-chart/d3-circle-chart.component';
import { D3SpiderChartComponent } from './D3 Charts/d3-spider-chart/d3-spider-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PaiChartComponent,
    CircalChartComponent,
    SpiderChartComponent,
    LineChartComponent,
    D3BarChartComponent,
    D3LineChartComponent,
    D3PaiChartComponent,
    D3CircleChartComponent,
    D3SpiderChartComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
