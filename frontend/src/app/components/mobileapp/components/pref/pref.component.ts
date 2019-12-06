import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../../../environments/environment'

import { simg } from '../../../../shared/simg.model';

import { UserService } from '../../../../shared/user.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { from } from 'rxjs';



@Component({
  selector: 'app-pref',
  templateUrl: './pref.component.html',
  styleUrls: ['./pref.component.css']
})
export class PrefComponent implements OnInit {
selectedFile: File= null;
Title:string = '';
textcolor:string = '';
a:any
imgname:string = '';
showSucessMessage: boolean;

selectedFile_s: File= null;
Title_s:string = '';
des_s:string = '';
//imgname_s:string = '';
showSucessMessage_s: boolean;

sm:simg[];

url:string  = environment.apiBaseUrl;

theme:any={}

@ViewChild('fileUploader') fileUploader:ElementRef;

  constructor(private http:HttpClient,private userService: UserService) { }

  ngOnInit() {


this.updatepage();
this.findsimg();

this.userService.getthme().subscribe(res=>{
  this.theme=res;
  this.userService.theTheme.sbox= this.theme.sbox;
  this.userService.theTheme.theme=this.theme.theme;
  this.userService.theTheme.color=this.theme.color;
  this.userService.theTheme.statusbarcolor=this.theme.statusbarcolor;
  })

  }



  onFileSelectd(event){
console.log(event);
this.selectedFile = <File>event.target.files[0];
  }


  onSubmit(){
    const fd =new FormData();

if(this.selectedFile){
  fd.append('file', this.selectedFile );
  fd.append('oriName', this.selectedFile.name );
}
   
   
    fd.append('title', this.Title );
    fd.append('textcolor', this.textcolor );

this.http.post(environment.apiBaseUrl + '/editloadpage',fd )
.subscribe(res => {console.log("");
this.updatepage()})

this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
                  
                  

  }

    

updatepage(){
  this.http.get(environment.apiBaseUrl + '/getloadpage')
  .subscribe(res => {
  
  this.a = res;
  this.Title = this.a.title;
  this.textcolor = this.a.color;
  this.imgname = this.a.imgName;
  
  console.log(res)
  })
   
}






setTheme(sbox){
  this.userService.settheme(this.theme.theme, this.theme.color,this.theme.statusbarcolor,sbox).subscribe(
    res => {
      // this.showSucessMessage = true;
      // setTimeout(() => this.showSucessMessage = false, 1500);  
      alert("done")  
                     
    },

    err => {  
      console.log(err);
      alert("Something Went Wrong")  
    }
   
);
}


///////////////////////////// s ////

onFileSelectd_s(event){
  console.log(event);
  this.selectedFile_s = <File>event.target.files[0];
    }



    onSubmit_s(){
      const fds =new FormData();
  
  
      fds.append('file', this.selectedFile_s );
      fds.append('oriName', this.selectedFile_s.name );
      fds.append('title', this.Title_s );
      fds.append('description', this.des_s );


  
  this.http.post(environment.apiBaseUrl + '/addsimg',fds )
  .subscribe(res => {console.log("");   
  this.updatepage_s();
 

})
  
  this.showSucessMessage_s = true;
          setTimeout(() => this.showSucessMessage_s = false, 2000);
                    

    }
  

    updatepage_s(){

  
      this.Title_s = '';
      this.des_s = '';
      this.selectedFile_s = null;
      this.fileUploader.nativeElement.value = null;
    }



////////////////////////////////////////

deletesimg(id){
  if(confirm("Are You Sure ?"))
  this.http.get(environment.apiBaseUrl + '/deletesimg/'+id)
  .subscribe(res => {
  console.log(res)
  })
}


findsimg(){  
  this.http.get(environment.apiBaseUrl + '/getsimg')
  .subscribe((res:simg[]) => {
  
     this.sm = res;

  })
   
}



}
