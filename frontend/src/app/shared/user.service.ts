import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

import { theme } from './theme.model';
import { order } from './order.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

userType:boolean = true; // meka daala thiyenne auth gard 2 ekata function eka wenuwata


newOrder : order = {
  customername: '',
  email: '',
  telephone:'',
  deliveraddress: '',
  orderitems:null
}

  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
  
  theTheme: theme = {
    theme: '',
    sbox:null,
    color:'',
    statusbarcolor:''
  };



  updateSuccess:boolean;

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods


  

//end file 

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }



  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }

  // *to get all users
  getUsers(){
    return this.http.get(environment.apiBaseUrl + '/userlist');
  }
 // *to get user by id
  getUserById(id){
    return this.http.get(environment.apiBaseUrl +`/user/${id}`);
  }
//*delete user
deleteUser(id){
  return this.http.get(environment.apiBaseUrl +`/user/delete/${id}`);
  }

//*update editor
updateUser(id, name , email,password){
  const user = {
    fullName:name,
    email:email,
    password:password

  };
  return this.http.post(environment.apiBaseUrl +`/user/edit/${id}`,user);
}



// //*check admin or user 
// userMode(UMode:boolean){
//   localStorage.setItem("UMode", `${UMode}`);
  
// }

checkUserType(id){
  return this.http.get(environment.apiBaseUrl +`/checkusertype/${id}` , this.noAuthHeader);
}
  


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }


  
//product upload
// addProduct(product){
//   return this.http.post(environment.apiBaseUrl+'/addnewproduct',product);
// }

//upload sleder box img with data
// addSimg(simg: simg){
//   return this.http.post(environment.apiBaseUrl+'/addsimg',simg);
// }



//get Orders
getOrders(){
  return this.http.get(environment.apiBaseUrl + '/getorders');
}



//get theme
getthme(){
  return this.http.get(environment.apiBaseUrl+'/getTheme');
}

//set theme
settheme(theme, color,statusbarcolor,sbox){

  const Theme = {
    theme: theme,
    color:color,
    sbox:sbox,
    statusbarcolor:statusbarcolor
  };  

  return this.http.post(environment.apiBaseUrl+'/setTheme',Theme);
}





getProducts(){
  return this.http.get(environment.apiBaseUrl + '/productlist');
}

//*delete user
deleteProduct(id){
  return this.http.get(environment.apiBaseUrl +`/product/delete/${id}`);
  }


 // *to get user by id
 getProductById(id){
  return this.http.get(environment.apiBaseUrl +`/product/${id}`);
}


//*update editor
updateProduct(id,product){

  return this.http.post(environment.apiBaseUrl +`/product/edit/${id}`,product);
}

}


