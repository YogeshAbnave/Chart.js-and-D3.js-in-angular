import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-circal-chart',
  templateUrl: './circal-chart.component.html',
  styleUrls: ['./circal-chart.component.scss']
})
export class CircalChartComponent implements OnInit {

  myArray:any[]=[];
  public doughnutChartLabels :any[]= [];
  public doughnutChartData :any[]= [];
  public doughnutChartType:ChartType = 'doughnut';

  constructor(private user:DataService) {
    this.getData()
   }

  ngOnInit(): void {
  }

   
  getData(){
    this.user.getData().subscribe((data:any)=> {this.myArray = data.results
      console.log('myData',this.myArray)
      this.myArray.forEach((element:any) => {
        this.doughnutChartLabels.push(element.l)
       this.doughnutChartData.push(element.o)
      })
    })
   }
 
}
