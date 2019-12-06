import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:String;
  id:String;
  bn:String;
  userDetails;

  UType:String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      (res:any) => {
        this.userDetails = res['user'];
        this.name=this.userDetails.fullName.toUpperCase();
        this.bn=this.userDetails.fullName.split('')[0].toUpperCase();
        
        

        this.id=res.uid;
/////////////////////////////////
        console.log(this.id);

        this.userService.checkUserType(this.id).subscribe(
          (res:any) =>{
            this.UType=res.usertype;
         console.log(this.UType);
          }
        )
////////////////////////////////
      },
      err => { 
        console.log(err);
        
      }
    );


    
  }


  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
