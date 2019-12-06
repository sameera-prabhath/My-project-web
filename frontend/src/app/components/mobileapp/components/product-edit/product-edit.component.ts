import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../../shared/user.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id:String;

  product:any={};
  productName:String;
  price:String;
  description:String;
  stock:String;

  showSucessMessage: boolean;

  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.userService.getProductById(this.id).subscribe(res=>{
      this.product=res;
      this.productName=this.product.productName;
      this.price=this.product.price;
      this.description=this.product.description;
      this.stock=this.product.availablity;
      })
          });
  }


  updateProduct(productName,price,description,form,stock){

    const product = {
      productName:productName,
      availablity:stock,
      price:price, 
      description:description
  
    };

    this.userService.updateProduct(this.id,product).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
                  this.resetForm(form);
                  this.userService.updateSuccess=true;
                  this.router.navigate([`/products`]);
                       
      },
      err => {  
        console.log(err);
        // if (err.status === 422) {
        //   this.serverErrorMessages = err.error.join('<br/>');
        // }
        // else
        //   this.serverErrorMessages = 'Something went wrong.';
      }
     
 );
}

  resetForm(form: NgForm) {

    form.resetForm();
    
  }
   


}
