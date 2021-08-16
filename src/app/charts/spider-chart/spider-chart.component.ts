import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-spider-chart',
  templateUrl: './spider-chart.component.html',
  styleUrls: ['./spider-chart.component.scss']
})
export class SpiderChartComponent implements OnInit {
 
  myArray:any []=[];
  public radarChartLabels :any[] = [];
  public radarChartData :any[]= [
    {data: [], label: '2017'},
    {data: [], label: '2018'}
  ];
  public radarChartType:ChartType = 'radar';
  constructor(private user:DataService) {
    this.getData()
   }

  ngOnInit(): void {
  }
  getData(){
    this.user.getData().subscribe((data:any)=> {this.myArray = data.results
      console.log('myData',this.myArray)


      this.myArray.forEach((element:any) => {
        this.radarChartLabels.push(element.item)
        this.radarChartData[0].data.push(element.l)
       this.radarChartData[1].data.push(element.o)
      })
         
        
   
    })
  }

}
