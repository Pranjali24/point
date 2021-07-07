import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http:HttpClient){}

  baseURL="http://localhost:3000/"
  newBaseURL="https://pointbackend.herokuapp.com/"


  //  generate JWT toke 
  generateJWTToken(){
   return this.http.get<{token:string}>(this.newBaseURL+"api/token")


  }
  // get user details from JWT token
  getDetailFromToken(token:string) {
    return this.http.get(this.newBaseURL+"api/"+token)

  }

  //  new user registration
  registerNewUser(user) {
    this.http.post<{error:any}>(this.baseURL+"api/user/registration",user).subscribe(response=>{
      console.log('user created ',response.error);
    },err => {
      console.log('erorrrrrrrrrrrrrrrr : ', err.error);
     })
  }

  // login user
  loginUser(user){
    return this.http.post<{token:string,user:any}>(this.baseURL+"api/user/login",user)
  }

  // get Active users
  getActiveUserName(){
    return this.http.get(this.baseURL+"api/user")
  }

//  get all messages
getAllMessages(token){
  let tokenHeader ={
    headers:new HttpHeaders({
   "Accept": "application/json",
   "token":token
 })};
  return this.http.get<{username:string,messages:any}>(this.baseURL+"api/user/allmessages",tokenHeader)
}

}
