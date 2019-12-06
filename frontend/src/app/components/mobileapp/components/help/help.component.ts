
import { Component, OnInit ,EventEmitter ,ElementRef } from '@angular/core';

import { HttpClient,HttpHeaders } from "@angular/common/http"

import { environment } from '../../../../../environments/environment'


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private http:HttpClient ) { 
  }

  private test2: any[] = [{ data: [] }];
  bardata

  ngOnInit() {
    

    this.http.get(environment.apiBaseUrl + '/barchart')
    .subscribe((data)=>
    {
      this.bardata = data
   console.log(this.bardata)
  this.test2 =this.bardata.data

    this.barChartData = [
      {data:this.test2, label: 'sales'},
     
    ];
  
    })

  }
/////////////////



  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
 

    public mbarChartLabels:string[] = ['January ', 'February','March','April ','May','June','July','August','September','October','November','December' ];




    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
  
    public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];

    public barChartData:any[] = [
    {data:this.test2, label: 'sales'}
    ];

  
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
  
    public chartHovered(e:any):void {
      console.log(e);
    }
  
 

}