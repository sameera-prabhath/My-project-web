import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../shared/user.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:any[]; 
  searchText;
  constructor(private userService: UserService , private router:Router) { }

  ngOnInit() {

    this.fetchOrders()
  }



    fetchOrders(){
    this.userService.getOrders().subscribe((data:any[])=>{
      this.order=data;
      console.log('Data requested...');
      console.log(this.order);
    });
  }


  editOrder(id){
    this.router.navigate([`/vieworder/${id}`]);
 }


}
