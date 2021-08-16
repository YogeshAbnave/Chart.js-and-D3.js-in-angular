import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  myArray: any;
  data: any[]=[];
  // lineData: any []= [];
  // labelData: any[]=[];

  constructor(private user:DataService) {
    this.getData()
   }

  ngOnInit(): void {
  }

  getData(){
    this.user.getData().subscribe((data:any)=> {this.myArray = data.results
      console.log('LineData',this.myArray)
      
      let lineData = this.myArray.map( (elem:any) => elem.l)
      let labelData = this.myArray.map( (elem:any) => elem.item)
      let QuntityData = this.myArray.map( (elem:any) => elem.o)

    
      console.log('QuntityData Data',QuntityData)
      console.log('line Data',lineData)

      new Chart (this.ctx, {
        type: 'line',
        data: {
          datasets: [{
                label: 'Current Vallue',
                data:lineData,
                backgroundColor: "rgb(115 185 243 / 65%)",
                borderColor: "#007ee7",
                fill: true,
            },
            {
              label: 'Invested Amount',
              data:QuntityData,
              backgroundColor: "#47a0e8",
              borderColor: "#007ee7",
              fill: true,
          }
        ],
            labels:labelData
        },
    });

    })
   }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    
  

  
  }



}
