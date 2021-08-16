import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pai-chart',
  templateUrl: './pai-chart.component.html',
  styleUrls: ['./pai-chart.component.scss']
})
export class PaiChartComponent implements OnInit {


   myArray:any []=[];
  public pieChartLabels :any[] = [];
  public pieChartData :any[] = [];
  public pieChartType:ChartType = 'pie';

  constructor(private user:DataService) {
    this.getData()
   }

  ngOnInit(): void {
  }

  getData(){
    this.user.getData().subscribe((data:any)=> {this.myArray = data.results
      console.log('myData',this.myArray)


      this.myArray.forEach((element:any) => {
        this.pieChartLabels.push(element.t)
        console.log('labale',element.t)
        this.pieChartData.push(element.l)
      //  this.barChartData[1].data.push(element.o)
      })
         
        
   
    })
   }

}
