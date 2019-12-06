import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userDetails;
id:String;


emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
showSucessMessage: boolean;
serverErrorMessages: string;
confirmPassword: string;
constructor(private userService: UserService,private router:Router,private route:ActivatedRoute ) { }
user:any={};
  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
           
      this.userService.selectedUser.fullName=this.userDetails.fullName;
      this.userService.selectedUser.email=this.userDetails.email;
      this.id=this.userDetails._id;
      },
      err => { 
        console.log(err);
        
      }
    );



  }

  updateUser(fullName,email,password,form){
    this.userService.updateUser(this.id,fullName,email,password).subscribe(
      res => {
       
        this.showSucessMessage = true;
        setTimeout(() => {this.showSucessMessage = false;
           this.userService.getUserProfile().subscribe(
            res => {
              this.userDetails = res['user'];
                 
            this.userService.selectedUser.fullName=this.userDetails.fullName;
            this.userService.selectedUser.email=this.userDetails.email;
            this.id=this.userDetails._id;
            },
            err => { 
              console.log(err);
              
            }
          );
        }, 2000);
                  this.resetForm(form);
            

                       
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
