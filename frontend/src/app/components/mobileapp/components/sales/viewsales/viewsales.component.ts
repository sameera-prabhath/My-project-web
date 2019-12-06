import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../../../../environments/environment'



@Component({
  selector: 'app-viewsales',
  templateUrl: './viewsales.component.html',
  styleUrls: ['./viewsales.component.css']
})
export class ViewsalesComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient ) { }

  id:String;
  order:any={};
  product:any[]=[];
  total:any=0;
  cus_data:any
  msubject:string='';
  mtext:string='';



  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;

      this.http.get(environment.apiBaseUrl +`/order/${this.id}`).subscribe(res => { this.order = res ;
       this.getCusdata(this.order.cus_id)
        
        for (let i = 0; i < this.order.orderitems.length; i++) {
 
    this.http.get(environment.apiBaseUrl +`/product/${this.order.orderitems[i]._id}`).subscribe(res => { this.product[i] = res;
       this.total=this.total + this.product[i].price*this.order.orderitems[i].quantity;
    
    
    });
         
          
        }

       });


    

  })



  

 

}



updatepage(st,sub,msg){

  if(confirm("Are You Sure ?"))
  this.http.post(environment.apiBaseUrl + `/orderedit/${this.id}` , { "orderstatus":`${st}`} )
  .subscribe(res => {
  this.sendmsg(sub, msg)

  console.log(res)
  this.ngOnInit()
  alert("done");
  })
   
}

sendmsg(sub, msg){

this.http.get(environment.apiBaseUrl + `/getcusbyid/${this.order.cus_id}` )
.subscribe(res => {
const c:any =res;

this.http.post(environment.apiBaseUrl + '/emsg' , {
  email:c.email,
  sub:sub,
  msg:msg
    })
    .subscribe(res => {
   console.log(res)
    
    })

})

}



msg(){

 if( confirm('are you sure to send this'))
  this.sendmsg(this.msubject, this.mtext);

}

 
getCusdata(cus_id){

  this.http.get(environment.apiBaseUrl + `/getcusbyid/${cus_id}` )
  .subscribe(res => {
 this.cus_data =res;
  
  
  })

}






}