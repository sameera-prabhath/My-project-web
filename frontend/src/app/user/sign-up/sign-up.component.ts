import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {MatDialogRef} from '@angular/material';

import { UserService } from '../../shared/user.service'



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  confirmPassword: string;
  constructor(private userService: UserService,public dialogRef: MatDialogRef<SignUpComponent>,
    ) { }

  ngOnInit() {
    this.resetSelectedUser();
  }
  
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {

      this.userService.postUser(form.value).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          this.resetForm(form);
          this.dialogRef.close();
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else
            this.serverErrorMessages = 'Something went wrong.';
        }
      );
    
  }


 resetSelectedUser(){
  this.userService.selectedUser = {
    fullName: '',
    email: '',
    password: ''
  };
 }


  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
