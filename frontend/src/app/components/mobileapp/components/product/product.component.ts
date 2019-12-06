import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { ConfirmationDialogService } from '../../../../confirmation-dialog/confirmation-dialog.service';
import {Router } from '@angular/router';


import { UserService } from '../../../../shared/user.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:any[];
searchText;
  constructor(private userService: UserService,private router:Router,private confirmationDialogService: ConfirmationDialogService,private snackBar:MatSnackBar) { }

  ngOnInit() {
   this.updateSuccessMsg();
   this.fetchProduct();
  }

  public openConfirmationDialog(id) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => {
      if(confirmed) {

        this.userService.deleteProduct(id).subscribe(()=>{
          this.fetchProduct();
        });
      };
      console.log('User confirmed:', confirmed)} )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
    

  fetchProduct(){
    this.userService.getProducts().subscribe((data:any[])=>{
      this.product=data;
      console.log('Data requested...');
      console.log(this.product);
    });
  }


  editProduct(id){
    this.router.navigate([`/products/edit/${id}`]);
 }



 updateSuccessMsg(){
  if(this.userService.updateSuccess){
    this.userService.updateSuccess=false;  
this.snackBar.open('Edit Successfully','Ok',{duration:3000 , verticalPosition: 'top'});
}
}
}
