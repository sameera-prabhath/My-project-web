import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';


import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-editor-edit',
  templateUrl: './editor-edit.component.html',
  styleUrls: ['./editor-edit.component.css']
})
export class EditorEditComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  confirmPassword: string;
  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute ) { }

  id:String;
  user:any={};

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.userService.getUserById(this.id).subscribe(res=>{
      this.user=res;
      this.userService.selectedUser.fullName=this.user.fullName;
      this.userService.selectedUser.email=this.user.email;
      })
          });
  }

  updateUser(fullName,email,password,form){
    this.userService.updateUser(this.id,fullName,email,password).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
                  this.resetForm(form);
                  this.userService.updateSuccess=true;
                  this.router.navigate([`/editorslist`]);
                       
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
