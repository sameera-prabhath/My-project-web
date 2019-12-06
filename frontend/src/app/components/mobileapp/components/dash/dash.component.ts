import { Component, OnInit ,EventEmitter ,ElementRef } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
noOfProduct = 0
noOforders = 0
noOfsales = 0
Tsales = 0
o:any[]
s:any[]
count=0



private test2: any[] = [{ data: [] }];
bardata

public mbarChartLabels:string[] = []

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.products()
    this.orders()
    this.sales()


    this.http.get(environment.apiBaseUrl + '/barcharteditor')
    .subscribe((data)=>
    {
      this.bardata = data
   console.log(this.bardata)
  this.test2 =this.bardata.data

    this.barChartData = [
      {data: this.test2, label: 'Order'},
     
    ];
    this.mbarChartLabels = this.bardata.user

    })

  }

/////////////////////////////
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









  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartColors:Array<any> = [
  {
    backgroundColor: 'rgba(227,171,67,0.4)',
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





  /////////////////////////////
  products(){  
    this.http.get(environment.apiBaseUrl + '/productlist')
    .subscribe((data:any[])=>
    {
  this.noOfProduct = data.length
    })
   }

   orders(){  
    this.http.get(environment.apiBaseUrl + '/getorders')
    .subscribe((data:any[])=>
    {
      this.noOforders = data.length
      this.o = data

      for(let i=0; i<this.noOforders;i++){
if(this.o[i].orderstatus=='Pending')
this.count++
      }

    })
   }

   sales(){  
    this.http.get(environment.apiBaseUrl + '/getcompletedorders')
    .subscribe((data:any[])=>
    {
      this.noOfsales = data.length
      this.s = data

      for(let i=0; i<this.noOfsales;i++){

         for(let j=0; j<this.s[i].orderitems.length ;j++)
         {
         this.Tsales = this.Tsales + ( this.s[i].orderitems[j].price * this.s[i].orderitems[j].quantity)

         }
      }

    })
   }


}
