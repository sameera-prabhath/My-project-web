import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {


  // noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  type:string= "password";
  token:string= '';
  // options:any;
  pw:string= '';
  cpw:string= '';
  show = false;
  sh='Show'

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.token=params.token;
    });

}

onc(){
  const cus = {
    token:this.token,
    password: this.pw
  };

  alert("done...")

  this.http.post(environment.apiBaseUrl + '/resetcuspw', cus )
  .subscribe(res => {console.log("okay...")

console.log(res)
})

}

  toggleShow()
  {
      this.show = !this.show;
      if (this.show){
          this.type = "text";
          this.sh='Hide'
      }
      else {
          this.type = "password";
          this.sh='Show'
      }
  }



}
