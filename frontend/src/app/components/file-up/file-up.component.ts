import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { FirebaseService } from '../../shared/firebase.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../environments/environment'



@Component({
  selector: 'app-file-up',
  templateUrl: './file-up.component.html',
  styleUrls: ['./file-up.component.css']
})
export class FileUPComponent implements OnInit {
file;


  constructor(private FilesService : UserService,private snackBar:MatSnackBar,private http:HttpClient , private firebaseService: FirebaseService ) { }
  // private files = [];
  private url = 'http://192.168.8.100:3000/api/upload';
  showSucessMessage: boolean;

///////////////////////////////////
  selectedFiles: File[];

  files : File[]=[];
  urls: string[];
  eve: EventTarget

  productname:string = '';
  pPrice:number = null;
  des:string = '';
  stock:string = 'Available';


///////////////////////////////

  ngOnInit() {
   
    
  }

////////////////////////////////////

uploadToFIrebase(form: NgForm){
  this.firebaseService.uploadAnyImageToFirebase( this.selectedFiles,"firebaseSampleTest").then(
    (res: string[])=>{

      const product = {
        imgs:res,
        productName:this.productname,
        price:this.pPrice,
        description:this.des,
        stock:this.stock
      };

      this.http.post(environment.apiBaseUrl + '/addnewproduct',product )
      .subscribe(res => {console.log("okay...");
      this.snackBar.open('Added Successfully','Ok',{duration:3000 , verticalPosition: 'top'}); 
      this.resetForm(form);
      
    })
      

      console.log("firebase upload success"+JSON.stringify(res))
    },err=>{
      console.log("error in uploading to the firebase")
    }
  )
}



public uploader: FileUploader = new FileUploader({
   
  disableMultipart : false,
  itemAlias: 'attachment',
  allowedFileType: ['image']


  });





onsubmit(form: NgForm){

this.selectedFiles = new Array<File>(this.uploader.queue.length);
  for (let i = 0; i < this.uploader.queue.length; i++) {

    this.selectedFiles[i] = this.uploader.queue[i]._file;
    
  }

  console.log( this.uploader.queue.length)
  console.log( this.selectedFiles)

  this.uploadToFIrebase(form);
}


//////////////////////////////////
   

// onSubmit(form: NgForm) {

//     this.uploader.onBeforeUploadItem = (item:any) => {
//       item.withCredentials = false;
//       this.uploader.options.additionalParameter = {
//         name: this.FilesService.newProduct.productName
       
//       };
//     };
  
//     this.FilesService.addProduct(form.value).subscribe(
//       res => {
//         this.showSucessMessage = true;
//         setTimeout(() => this.showSucessMessage = false, 4000);
//     this.resetForm(form);

//       },

//     );
//     this.snackBar.open('Added Successfully','Ok',{duration:3000 , verticalPosition: 'top'}); 
// }

resetForm(form: NgForm){
  form.resetForm();
 this.uploader.clearQueue()
 this.productname='',
 this.pPrice=null,
 this.des='',
 this.stock=''
}

}

