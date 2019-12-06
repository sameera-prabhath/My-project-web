import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

import {MatDialog,MatSnackBar} from '@angular/material';
import { SignUpComponent } from '../../user/sign-up/sign-up.component';
import { ConfirmationDialogService } from '../../confirmation-dialog/confirmation-dialog.service';


import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-editors-list',
  templateUrl: './editors-list.component.html',
  styleUrls: ['./editors-list.component.css']
})

export class EditorsListComponent implements OnInit {
  user:User[]; 
  constructor(private userService: UserService,private router:Router,public dialog: MatDialog,private snackBar:MatSnackBar
    ,private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.fetchUsers();
    this.updateSuccessMsg();
  }


  public openConfirmationDialog(id) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => {
      if(confirmed) {

        this.userService.deleteUser(id).subscribe(()=>{
          this.fetchUsers();
        });
      };
      console.log('User confirmed:', confirmed)} )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(SignUpComponent);
    dialogRef.afterClosed().subscribe(()=>{
      this.fetchUsers();
    })
  }

  

  fetchUsers(){
    this.userService.getUsers().subscribe((data:User[])=>{
      this.user=data;
      console.log('Data requested...');
      console.log(this.user);
    });
  }


  
  editUser(id){
    this.router.navigate([`/editorslist/edit/${id}`]);
 }


  // deleteUser(id){
  //   if(confirm("Are you sure to delete ")) {

  //   this.userService.deleteUser(id).subscribe(()=>{
  //     this.fetchUsers();
  //   });
  // }
  // }

  updateSuccessMsg(){
    if(this.userService.updateSuccess){
      this.userService.updateSuccess=false;  
  this.snackBar.open('Edit Successfully','Ok',{duration:3000 , verticalPosition: 'top'});
}
  }
}
