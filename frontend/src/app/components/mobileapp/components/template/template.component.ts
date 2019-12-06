import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



import { UserService } from '../../../../shared/user.service'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService) { }

  theme:any={};


  ngOnInit() {

    this.userService.getthme().subscribe(res=>{
      this.theme=res;
      this.userService.theTheme.sbox= this.theme.sbox;
      this.userService.theTheme.theme=this.theme.theme;
      this.userService.theTheme.color=this.theme.color;
      this.userService.theTheme.statusbarcolor=this.theme.statusbarcolor;
      })
  }

  

  setTheme(theme, color,statusbarcolor){
    this.userService.settheme(theme, color,statusbarcolor,this.theme.sbox).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
                  
                     
               
                       
      },

      err => {  
        console.log(err);
         this.serverErrorMessages = 'Something went wrong.';
      }
     
 );
}

onItemChange(value){
  console.log(" Value is : ", value );

}


}
