import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  myArray:any[]=[];
  Data!: { data: any; label: any; }[];
  element: any;
  elements!: { data: any; label: any; }[];
  barChartData1!: { data: any; }[];
//    myData:any[]=[
//     // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//     // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
//     // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series c'},
//     // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series d'}
//  ]
  
  constructor(private user:DataService) {
    this.getData()
   }

  
  ngOnInit() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels :any[]= [];
  public barChartType:ChartType = 'bar';
  public barChartLegend :boolean = true;

  public barChartData :any[]= [
    {data: [], label: 'Price A'},
    {data: [], label: 'Quntity B'},
    {data: [], label: 'Ratio C'}

  ];
  
  getData(){
    this.user.getData().subscribe((data:any)=> {this.myArray = data.results
      console.log('myData',this.myArray)


      this.myArray.forEach((element:any) => {
        console.log('element',element)
        this.barChartLabels.push(element.t)
        this.barChartData[0].data.push(element.l)
       this.barChartData[1].data.push(element.o)
       this.barChartData[2].data.push(element.c)
      })
         
        
   
    })
   }


}
