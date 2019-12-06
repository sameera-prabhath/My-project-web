import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { environment } from '../../../../../environments/environment'
import { HttpClient,HttpHeaders } from "@angular/common/http"

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor( private router:Router,private http:HttpClient) { }
sales:any[];



noOfsales = 0
Tsales = 0
s:any[]

  ngOnInit() {
    this.salesa()
    this.fetchOrders()
  }

  
  fetchOrders(){
    this.http.get(environment.apiBaseUrl + '/getcompletedorders')
.subscribe((data:any[])=>{
      this.sales=data; 
      console.log(this.sales);
    });
  }



  
  editOrder(id){
    this.router.navigate([`/viewosales/${id}`]);
 }


 salesa(){  
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
